/**
 * EntityUpgrader 单元测试
 */

import { EntityUpgrader } from '../src/typescript/upgrader/EntityUpgrader';
import * as fs from 'fs';
import * as path from 'path';

describe('EntityUpgrader', () => {
  /**
   * 辅助函数：读取测试文件
   * 注意：Entity 只有两个官方版本（v1_19_0 和 v1_21_60）
   */
  function loadTestFile(version: string, filename: string): string {
    const filePath = path.join(
      __dirname,
      'resources/entities',
      version,
      filename
    );
    return fs.readFileSync(filePath, 'utf-8');
  }

  /**
   * 辅助函数：读取 schema 测试文件
   */
  function loadSchemaTestFile(filename: string): string {
    const filePath = path.join(
      __dirname,
      '../../schemas/minecraft-bedrock-json-schemas/test/files/correct/data_bp/entities',
      filename
    );
    return fs.readFileSync(filePath, 'utf-8');
  }

  describe('upgradeToLatest', () => {
    test('should throw error for unsupported version in strict mode', () => {
      const data = { format_version: '1.0.0' };

      expect(() => {
        EntityUpgrader.upgradeToLatest(data, '1.0.0', true);
      }).toThrow('Unsupported version: 1.0.0');
    });

    test('should return immediately if already at latest version', () => {
      const data = JSON.parse(loadTestFile('v1_21_60', 'simple_entity.json'));

      const result = EntityUpgrader.upgradeToLatest(data, '1.21.60');

      expect(result.upgradePath).toEqual(['1.21.60']);
      expect(result.warnings.length).toBe(0);
      expect(result.data.format_version).toBe('1.21.60');
    });

    test('should upgrade v1.19.0 to v1.21.60', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:mob'
          },
          components: {}
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      // Entity 只有两个版本：v1.19.0 和 v1.21.60
      expect(result.upgradePath).toEqual([
        '1.19.0',
        '1.21.60'
      ]);
      expect(result.warnings.length).toBeGreaterThan(0);
    });

    test('should upgrade v1.19.40 simple entity to v1.21.60 (via version inference)', () => {
      // 使用 v1.21.60 的文件内容，但修改 format_version 模拟中间版本
      const data = JSON.parse(loadTestFile('v1_21_60', 'simple_entity.json'));
      data.format_version = '1.19.40';  // 模拟不存在的中间版本

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.40');

      expect(result.data.format_version).toBe('1.21.60');
      // v1.19.40 在全局版本列表中存在，会被精确匹配到 v1.19.0（Entity的最接近版本）
      // 注意：当前版本推断使用全局VERSION_SEQUENCE，所以 v1.19.40 会精确匹配
      expect(result.upgradePath).toEqual([
        '1.19.40',
        '1.19.0',      // 推断后的版本
        '1.21.60'
      ]);
      expect(result.warnings.length).toBeGreaterThan(0);
      // 由于使用全局版本列表，v1.19.40 是精确匹配，不会有"版本推断"警告
      // 但会有升级过程的警告
      expect(result.warnings.some(w => w.includes('v1.19.0 → v1.21.60'))).toBe(true);
    });

    test('should upgrade v1.19.50 to v1.21.60 (via version inference)', () => {
      // 创建一个带有 properties 的实体（测试版本推断）
      const data = {
        format_version: '1.19.50',  // 在全局版本列表中存在
        'minecraft:entity': {
          description: {
            identifier: 'test:property_mob',
            properties: {
              'test:variant': {
                type: 'enum',
                values: ['red', 'blue', 'green'],
                default: 'red'
              }
            }
          },
          components: {}
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.50');

      expect(result.data.format_version).toBe('1.21.60');
      // v1.19.50 在全局版本列表中存在，会精确匹配
      expect(result.upgradePath).toEqual([
        '1.19.50',
        '1.19.0',      // 推断后的版本
        '1.21.60'
      ]);
    });

    test('should upgrade v1.21.50 to v1.21.60 (via version inference)', () => {
      // 创建一个带有 lookat 组件的实体（用于测试组件重命名和版本推断）
      const data = {
        format_version: '1.21.50',  // 在全局版本列表中存在
        'minecraft:entity': {
          description: {
            identifier: 'test:lookat_mob'
          },
          components: {
            'minecraft:behavior.lookat': {
              priority: 8,
              look_at_player: true
            }
          },
          component_groups: {
            'test:active_group': {
              'minecraft:behavior.lookat': {
                priority: 5
              }
            }
          },
          events: {
            'test:day_event': {
              filters: {
                test: 'is_daytime',
                value: true
              },
              add: {
                component_groups: ['test:active_group']
              }
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.21.50');

      expect(result.data.format_version).toBe('1.21.60');
      // v1.21.50 在全局版本列表中存在，会精确匹配
      expect(result.upgradePath).toEqual([
        '1.21.50',
        '1.19.0',      // 推断后的版本
        '1.21.60'
      ]);
    });
  });

  describe('v1.19.0 → v1.21.60 upgrades', () => {
    test('should rename lookat component to looked_at', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:lookat_mob'
          },
          components: {
            'minecraft:behavior.lookat': {
              priority: 8,
              look_at_player: true
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      const components = result.data['minecraft:entity'].components;
      expect(components['minecraft:behavior.looked_at']).toBeDefined();
      expect(components['minecraft:behavior.looked_at']).toEqual({
        priority: 8,
        look_at_player: true
      });
      expect(components['minecraft:behavior.lookat']).toBeUndefined();

      // 检查警告信息
      const renameWarning = result.warnings.find(w => w.includes('Renamed component: lookat → looked_at'));
      expect(renameWarning).toBeDefined();
      expect(renameWarning).toContain('[test:lookat_mob]');
      expect(renameWarning).toContain('[components]');
    });

    test('should rename lookat in component_groups', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:grouped_mob'
          },
          component_groups: {
            'test:active': {
              'minecraft:behavior.lookat': {
                priority: 5
              }
            },
            'test:passive': {
              'minecraft:health': {
                value: 10
              }
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      const activeGroup = result.data['minecraft:entity'].component_groups['test:active'];
      expect(activeGroup['minecraft:behavior.looked_at']).toBeDefined();
      expect(activeGroup['minecraft:behavior.looked_at']).toEqual({
        priority: 5
      });
      expect(activeGroup['minecraft:behavior.lookat']).toBeUndefined();

      // passive 组不应该受影响
      const passiveGroup = result.data['minecraft:entity'].component_groups['test:passive'];
      expect(passiveGroup['minecraft:health']).toBeDefined();

      // 检查警告信息
      const renameWarning = result.warnings.find(w =>
        w.includes('component_groups.test:active') && w.includes('lookat → looked_at')
      );
      expect(renameWarning).toBeDefined();
    });

    test('should rename lookat in both components and component_groups', () => {
      // 创建一个同时在 components 和 component_groups 中有 lookat 的实体
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:lookat_mob'
          },
          components: {
            'minecraft:behavior.lookat': {
              priority: 8,
              look_at_player: true
            }
          },
          component_groups: {
            'test:active_group': {
              'minecraft:behavior.lookat': {
                priority: 5
              }
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0', false);

      // 检查主组件中的重命名
      const components = result.data['minecraft:entity'].components;
      expect(components['minecraft:behavior.looked_at']).toBeDefined();
      expect(components['minecraft:behavior.lookat']).toBeUndefined();

      // 检查 component_groups 中的重命名
      const activeGroup = result.data['minecraft:entity'].component_groups['test:active_group'];
      expect(activeGroup['minecraft:behavior.looked_at']).toBeDefined();
      expect(activeGroup['minecraft:behavior.lookat']).toBeUndefined();

      // 应该有两条警告（components 和 component_groups 各一条）
      const renameWarnings = result.warnings.filter(w => w.includes('Renamed component: lookat → looked_at'));
      expect(renameWarnings.length).toBe(2);
    });

    test('should warn about deprecated event filters', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:event_mob'
          },
          events: {
            'test:day_event': {
              filters: {
                test: 'is_daytime',
                value: true
              },
              add: {
                component_groups: ['test:active']
              }
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');

      // 事件应该被保留
      const events = result.data['minecraft:entity'].events;
      expect(events['test:day_event']).toBeDefined();
      expect(events['test:day_event'].filters).toBeDefined();

      // 应该有关于 filters 的警告
      const filterWarning = result.warnings.find(w =>
        w.includes('test:day_event') && w.includes('deprecated') && w.includes('filters')
      );
      expect(filterWarning).toBeDefined();
    });

    test('should handle entity with multiple event filters', () => {
      // 创建一个有事件过滤器的实体
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:event_mob'
          },
          components: {},
          events: {
            'test:day_event': {
              filters: {
                test: 'is_daytime',
                value: true
              },
              add: {
                component_groups: ['test:active']
              }
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      // 检查事件过滤器警告
      const filterWarnings = result.warnings.filter(w =>
        w.includes('deprecated') && w.includes('filters')
      );
      expect(filterWarnings.length).toBe(1);  // 有 1 个事件带 filters
    });

    test('should handle entity without lookat component', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:simple_mob'
          },
          components: {
            'minecraft:health': {
              value: 10
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');

      // 组件应该保持不变
      const components = result.data['minecraft:entity'].components;
      expect(components['minecraft:health']).toEqual({ value: 10 });

      // 应该只有升级完成的警告，没有重命名警告
      const renameWarnings = result.warnings.filter(w => w.includes('Renamed component'));
      expect(renameWarnings.length).toBe(0);
    });
  });

  describe('properties system support', () => {
    test('should warn about property system when properties exist', () => {
      // 创建一个有属性系统的实体
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:property_mob',
            properties: {
              'test:variant': {
                type: 'enum',
                values: ['red', 'blue', 'green'],
                default: 'red'
              }
            }
          },
          components: {}
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');

      // 属性应该被保留
      const properties = result.data['minecraft:entity'].description.properties;
      expect(properties).toBeDefined();
      expect(properties['test:variant']).toBeDefined();

      // 应该有关于属性系统的警告
      const propertyWarning = result.warnings.find(w =>
        w.includes('properties system') && w.includes('client-side property sync')
      );
      expect(propertyWarning).toBeDefined();
    });

    test('should not give property warning when no properties exist', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:simple'
          },
          components: {}
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      // 虽然没有使用 properties，但升级器会产生一个通用警告
      // 检查不应该有关于"client-side property sync"的特定警告
      const clientPropertyWarning = result.warnings.find(w =>
        w.includes('client-side property sync')
      );
      expect(clientPropertyWarning).toBeUndefined();
    });
  });

  describe('data integrity', () => {
    test('should not modify original data', () => {
      const original = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:mob'
          },
          components: {
            'minecraft:behavior.lookat': {
              priority: 8
            }
          }
        }
      };
      const originalCopy = JSON.parse(JSON.stringify(original));

      EntityUpgrader.upgradeToLatest(original, '1.19.0');

      // 原始数据不应该被修改
      expect(original).toEqual(originalCopy);
    });

    test('should preserve component_groups structure', () => {
      // 使用 v1.21.60 的 entity_with_groups_events.json
      const data = JSON.parse(loadTestFile('v1_21_60', 'entity_with_groups_events.json'));
      const originalGroups = Object.keys(data['minecraft:entity'].component_groups);

      const result = EntityUpgrader.upgradeToLatest(data, '1.21.60');

      const resultGroups = Object.keys(result.data['minecraft:entity'].component_groups);
      expect(resultGroups).toEqual(originalGroups);
    });

    test('should preserve events structure', () => {
      // 使用 v1.21.60 的 entity_with_groups_events.json
      const data = JSON.parse(loadTestFile('v1_21_60', 'entity_with_groups_events.json'));
      const originalEvents = Object.keys(data['minecraft:entity'].events);

      const result = EntityUpgrader.upgradeToLatest(data, '1.21.60');

      const resultEvents = Object.keys(result.data['minecraft:entity'].events);
      expect(resultEvents).toEqual(originalEvents);
    });

    test('should preserve description fields', () => {
      // 使用 v1_19_0 的 simple_mob.json
      const data = JSON.parse(loadTestFile('v1_19_0', 'simple_mob.json'));
      const originalDesc = data['minecraft:entity'].description;

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      const resultDesc = result.data['minecraft:entity'].description;
      expect(resultDesc.identifier).toBe(originalDesc.identifier);
      expect(resultDesc.is_spawnable).toBe(originalDesc.is_spawnable);
      expect(resultDesc.is_summonable).toBe(originalDesc.is_summonable);
    });

    test('should handle entity without minecraft:entity gracefully', () => {
      const data = {
        format_version: '1.19.0'
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.warnings.find(w => w.includes('No minecraft:entity found'))).toBeDefined();
    });
  });

  describe('real-world entities', () => {
    test('should upgrade dragon entity from schema tests (v1.19.0+)', () => {
      const json = loadSchemaTestFile('dragon.entity.bp.json');
      const data = JSON.parse(json);

      // schema 文件使用 v1.16.0，我们需要手动更新到支持的版本
      data.format_version = '1.19.0';

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.data['minecraft:entity'].description.identifier).toBe('blockception:dragon');

      // 组件应该被保留
      const components = result.data['minecraft:entity'].components;
      expect(components['minecraft:health']).toBeDefined();
    });

    test('should upgrade sheep entity from schema tests (v1.19.0+)', () => {
      const json = loadSchemaTestFile('sheep.entity.bp.json');
      const data = JSON.parse(json);

      // schema 文件使用 v1.16.0，我们需要手动更新到支持的版本
      data.format_version = '1.19.0';

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.data['minecraft:entity'].description.identifier).toBe('blockception:sheep');
    });

    test('should throw error for unsupported old versions (v1.16.0)', () => {
      const json = loadSchemaTestFile('dragon.entity.bp.json');
      const data = JSON.parse(json);

      // schema 文件使用 v1.16.0，应该抛出错误
      expect(() => {
        EntityUpgrader.upgradeToLatest(data, '1.16.0', true);
      }).toThrow('Unsupported version: 1.16.0');
    });
  });

  describe('warning collection', () => {
    test('should collect warnings from upgrade', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:mob'
          },
          components: {}
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      // 应该有升级警告
      expect(result.warnings.length).toBeGreaterThan(0);

      // 应该包含升级信息
      expect(result.warnings.some(w => w.includes('v1.19.0 → v1.21.60'))).toBe(true);
    });

    test('should provide detailed warnings for component renames', () => {
      // 创建一个有 lookat 组件的实体
      const data = {
        format_version: '1.19.0',
        'minecraft:entity': {
          description: {
            identifier: 'test:lookat_mob'
          },
          components: {
            'minecraft:behavior.lookat': {
              priority: 8
            }
          },
          component_groups: {
            'test:active_group': {
              'minecraft:behavior.lookat': {
                priority: 5
              }
            }
          }
        }
      };

      const result = EntityUpgrader.upgradeToLatest(data, '1.19.0');

      // 检查详细的重命名警告
      const componentWarning = result.warnings.find(w =>
        w.includes('[test:lookat_mob]') &&
        w.includes('[components]') &&
        w.includes('lookat → looked_at')
      );
      expect(componentWarning).toBeDefined();

      const groupWarning = result.warnings.find(w =>
        w.includes('[test:lookat_mob]') &&
        w.includes('[component_groups.test:active_group]') &&
        w.includes('lookat → looked_at')
      );
      expect(groupWarning).toBeDefined();
    });
  });

  describe('performance', () => {
    test('should upgrade single entity in less than 10ms', () => {
      // 使用 v1_19_0 的 simple_mob.json
      const data = JSON.parse(loadTestFile('v1_19_0', 'simple_mob.json'));

      const start = Date.now();
      EntityUpgrader.upgradeToLatest(data, '1.19.0');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });

    test('should upgrade complex entity in less than 15ms', () => {
      // 使用 v1.21.60 的 entity_with_groups_events.json
      const data = JSON.parse(loadTestFile('v1_21_60', 'entity_with_groups_events.json'));

      const start = Date.now();
      EntityUpgrader.upgradeToLatest(data, '1.21.60');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(15);
    });
  });
});
