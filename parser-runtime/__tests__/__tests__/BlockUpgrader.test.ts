/**
 * BlockUpgrader 单元测试
 */

import { BlockUpgrader } from '../../../main/typescript/upgrader/BlockUpgrader';
import * as fs from 'fs';
import * as path from 'path';

describe('BlockUpgrader', () => {
  /**
   * 辅助函数：读取测试文件
   */
  function loadTestFile(version: string, filename: string): string {
    const filePath = path.join(
      __dirname,
      '../../resources/blocks',
      version,
      filename
    );
    return fs.readFileSync(filePath, 'utf-8');
  }

  describe('upgradeToLatest', () => {
    test('should throw error for unsupported version', () => {
      const data = { format_version: '1.0.0' };

      expect(() => {
        BlockUpgrader.upgradeToLatest(data, '1.0.0');
      }).toThrow('Unsupported version: 1.0.0');
    });

    test('should return immediately if already at latest version', () => {
      const data = JSON.parse(loadTestFile('v1_21_60', 'simple_block.json'));

      const result = BlockUpgrader.upgradeToLatest(data, '1.21.60');

      expect(result.upgradePath).toEqual(['1.21.60']);
      expect(result.warnings.length).toBe(0);
      expect(result.data.format_version).toBe('1.21.60');
    });

    test('should upgrade v1.19.40 simple block to v1.21.60', () => {
      const data = JSON.parse(loadTestFile('v1_19_40', 'simple_block.json'));

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toEqual([
        '1.19.40',
        '1.19.50',
        '1.20.10',
        '1.20.41',
        '1.20.81',
        '1.21.50',
        '1.21.60'
      ]);
      expect(result.warnings.length).toBeGreaterThan(0);
    });

    test('should upgrade v1.19.50 block to v1.21.60', () => {
      const data = JSON.parse(loadTestFile('v1_19_50', 'simple_block.json'));

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.50');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toEqual([
        '1.19.50',
        '1.20.10',
        '1.20.41',
        '1.20.81',
        '1.21.50',
        '1.21.60'
      ]);
    });
  });

  describe('v1.19.40 → v1.19.50 upgrades', () => {
    test('should convert light_emission correctly', () => {
      const data = {
        format_version: '1.19.40',
        'minecraft:block': {
          description: {
            identifier: 'test:glowing_block'
          },
          components: {
            'minecraft:block_light_emission': 1.0
          }
        }
      };

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:light_emission']).toBe(15);
      expect(components['minecraft:block_light_emission']).toBeUndefined();

      // 检查警告信息
      const lightWarning = result.warnings.find(w => w.includes('Converted light_emission'));
      expect(lightWarning).toBeDefined();
      expect(lightWarning).toContain('1 → 15');  // JavaScript converts 1.0 to 1
    });

    test('should convert light_emission with partial values', () => {
      const data = {
        format_version: '1.19.40',
        'minecraft:block': {
          description: {
            identifier: 'test:dim_light'
          },
          components: {
            'minecraft:block_light_emission': 0.5
          }
        }
      };

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:light_emission']).toBe(8);  // Math.round(0.5 * 15) = 8
    });

    test('should convert destroy_time to destructible_by_mining', () => {
      const data = {
        format_version: '1.19.40',
        'minecraft:block': {
          description: {
            identifier: 'test:hard_block'
          },
          components: {
            'minecraft:destroy_time': 5.0
          }
        }
      };

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:destructible_by_mining']).toEqual({
        seconds_to_destroy: 5.0
      });
      expect(components['minecraft:destroy_time']).toBeUndefined();

      // 检查警告信息
      const destroyWarning = result.warnings.find(w => w.includes('Converted destroy_time'));
      expect(destroyWarning).toBeDefined();
    });

    test('should convert explosion_resistance to destructible_by_explosion', () => {
      const data = {
        format_version: '1.19.40',
        'minecraft:block': {
          description: {
            identifier: 'test:tough_block'
          },
          components: {
            'minecraft:explosion_resistance': 20.0
          }
        }
      };

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:destructible_by_explosion']).toEqual({
        explosion_resistance: 20.0
      });
      expect(components['minecraft:explosion_resistance']).toBeUndefined();
    });

    test('should remove deprecated components', () => {
      const data = {
        format_version: '1.19.40',
        'minecraft:block': {
          description: {
            identifier: 'test:old_block'
          },
          components: {
            'minecraft:block_light_filter': 0,
            'minecraft:breathability': 'solid',
            'minecraft:friction': 0.6
          }
        }
      };

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:block_light_filter']).toBeUndefined();
      expect(components['minecraft:breathability']).toBeUndefined();
      expect(components['minecraft:friction']).toBe(0.6);  // friction 不应该被删除

      // 检查警告信息
      const deprecatedWarnings = result.warnings.filter(w => w.includes('Removed deprecated component'));
      expect(deprecatedWarnings.length).toBe(2);
    });

    test('should handle complex block from test data', () => {
      const data = JSON.parse(loadTestFile('v1_19_40', 'complex_block.json'));

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      expect(result.data.format_version).toBe('1.21.60');

      const components = result.data['minecraft:block'].components;
      // 检查光照转换
      expect(components['minecraft:light_emission']).toBe(0);  // 0.0 → 0
      expect(components['minecraft:block_light_emission']).toBeUndefined();

      // 检查破坏时间转换
      expect(components['minecraft:destructible_by_mining']).toEqual({
        seconds_to_destroy: 2.0
      });

      // 检查 permutations 中的光照值也被转换了
      const perm = result.data['minecraft:block'].permutations[0];
      expect(perm.components['minecraft:light_emission']).toBe(15);  // 1.0 → 15
    });
  });

  describe('v1.20.81 → v1.21.50 upgrades', () => {
    test('should warn about event components migration', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:block': {
          description: {
            identifier: 'test:interactive_block'
          },
          components: {
            'minecraft:on_interact': {
              event: 'toggle',
              target: 'self'
            },
            'minecraft:random_ticking': {
              on_tick: {
                event: 'random_event'
              }
            }
          }
        }
      };

      const result = BlockUpgrader.upgradeToLatest(data, '1.20.81');

      expect(result.data.format_version).toBe('1.21.60');

      // 事件组件应该被保留（向下兼容）
      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:on_interact']).toBeDefined();
      expect(components['minecraft:random_ticking']).toBeDefined();

      // 应该有关于迁移的警告
      const migrationWarnings = result.warnings.filter(w =>
        w.includes('requires manual migration to custom_components')
      );
      expect(migrationWarnings.length).toBe(2);
    });

    test('should handle v1.19.50 complex block with events', () => {
      const data = JSON.parse(loadTestFile('v1_19_50', 'complex_block.json'));

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.50');

      expect(result.data.format_version).toBe('1.21.60');

      // 检查事件组件迁移警告
      const eventWarnings = result.warnings.filter(w =>
        w.includes('on_interact') && w.includes('manual migration')
      );
      expect(eventWarnings.length).toBeGreaterThan(0);
    });
  });

  describe('data integrity', () => {
    test('should not modify original data', () => {
      const original = {
        format_version: '1.19.40',
        'minecraft:block': {
          description: {
            identifier: 'test:block'
          },
          components: {
            'minecraft:block_light_emission': 1.0
          }
        }
      };
      const originalCopy = JSON.parse(JSON.stringify(original));

      BlockUpgrader.upgradeToLatest(original, '1.19.40');

      // 原始数据不应该被修改
      expect(original).toEqual(originalCopy);
    });

    test('should preserve permutations structure', () => {
      const data = JSON.parse(loadTestFile('v1_19_40', 'complex_block.json'));
      const originalPermCount = data['minecraft:block'].permutations.length;

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const perms = result.data['minecraft:block'].permutations;
      expect(perms.length).toBe(originalPermCount);
      expect(perms[0].condition).toBeDefined();
    });

    test('should preserve block states', () => {
      const data = JSON.parse(loadTestFile('v1_19_40', 'complex_block.json'));
      const originalStates = data['minecraft:block'].description.states;

      const result = BlockUpgrader.upgradeToLatest(data, '1.19.40');

      const states = result.data['minecraft:block'].description.states;
      expect(states).toEqual(originalStates);
    });
  });

  describe('performance', () => {
    test('should upgrade single block in less than 10ms', () => {
      const data = JSON.parse(loadTestFile('v1_19_40', 'complex_block.json'));

      const start = Date.now();
      BlockUpgrader.upgradeToLatest(data, '1.19.40');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });
  });
});
