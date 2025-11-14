/**
 * EntityConverter 单元测试
 */

import { EntityConverter } from '../src/typescript/converter/EntityConverter';
import type { StandardEntity } from '../src/typescript/index';
import * as fs from 'fs';
import * as path from 'path';

describe('EntityConverter', () => {
  /**
   * 辅助函数：创建测试元数据
   */
  function createMetadata() {
    return {
      sourceVersion: '1.21.60',
      upgradePath: ['1.21.60'],
      warnings: [],
      sourceFile: 'entities/test_entity.json'
    };
  }

  /**
   * 辅助函数：加载测试资源文件
   */
  function loadTestResource(filename: string): any {
    const filePath = path.join(__dirname, '../resources/entities/v1_21_60', filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }

  describe('convertToStandard - 基础功能', () => {
    test('should convert minimal entity correctly', () => {
      const entityData = loadTestResource('minimal_entity.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result.length).toBe(1);
      const entity = result[0];
      expect(entity.identifier).toBe('test:minimal_mob');
      expect(entity.metadata.sourceVersion).toBe('1.21.60');
    });

    test('should extract core fields correctly', () => {
      const entityData = {
        'minecraft:entity': {
          description: {
            identifier: 'test:core_mob',
            runtime_identifier: 'minecraft:zombie',
            is_spawnable: true,
            is_summonable: false,
            is_experimental: true,
            spawn_category: 'monster'
          },
          components: {}
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.identifier).toBe('test:core_mob');
      expect(entity.runtimeIdentifier).toBe('minecraft:zombie');
      expect(entity.isSpawnable).toBe(true);
      expect(entity.isSummonable).toBe(false);
      expect(entity.isExperimental).toBe(true);
      expect(entity.spawnCategory).toBe('monster');
    });

    test('should return empty array when minecraft:entity is missing', () => {
      const entityData = { format_version: '1.21.60' };
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result.length).toBe(0);
    });

    test('should return empty array when identifier is missing', () => {
      const entityData = {
        'minecraft:entity': {
          description: {},
          components: {}
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result.length).toBe(0);
    });
  });

  describe('convertToStandard - 显示名称', () => {
    test('should extract display name from minecraft:nameable.default_trigger', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:named_mob' },
          components: {
            'minecraft:nameable': {
              default_trigger: 'Custom Mob Name'
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].displayName).toBe('Custom Mob Name');
    });

    test('should extract display name from minecraft:nameable.always_show', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:named_mob' },
          components: {
            'minecraft:nameable': {
              always_show: 'Always Visible Name'
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].displayName).toBe('Always Visible Name');
    });

    test('should prioritize default_trigger over always_show', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:named_mob' },
          components: {
            'minecraft:nameable': {
              default_trigger: 'Priority Name',
              always_show: 'Secondary Name'
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].displayName).toBe('Priority Name');
    });
  });

  describe('convertToStandard - 生命属性', () => {
    test('should extract health attributes', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:healthy_mob' },
          components: {
            'minecraft:health': {
              value: 20,
              max: 20
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.maxHealth).toBe(20);
      expect(entity.defaultHealth).toBe(20);
    });

    test('should handle health as object with value property', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:mob' },
          components: {
            'minecraft:health': {
              value: { value: 15 },
              max: { value: 30 }
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.maxHealth).toBe(30);
      expect(entity.defaultHealth).toBe(15);
    });
  });

  describe('convertToStandard - 物理属性', () => {
    test('should extract collision box', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:sized_mob' },
          components: {
            'minecraft:collision_box': {
              width: 0.6,
              height: 1.8
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.collisionBox).toEqual({
        width: 0.6,
        height: 1.8
      });
    });

    test('should return undefined for collision box when width or height is missing', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:mob' },
          components: {
            'minecraft:collision_box': {
              width: 0.6
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].collisionBox).toBeUndefined();
    });

    test('should extract scale', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:scaled_mob' },
          components: {
            'minecraft:scale': {
              value: 1.5
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].scale).toBe(1.5);
    });

    test('should extract isPushable', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:pushable_mob' },
          components: {
            'minecraft:pushable': true
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].isPushable).toBe(true);
    });
  });

  describe('convertToStandard - 移动属性', () => {
    test('should extract movement speed', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:fast_mob' },
          components: {
            'minecraft:movement': {
              value: 0.35
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].movementSpeed).toBe(0.35);
    });

    test('should extract flying speed', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:flying_mob' },
          components: {
            'minecraft:flying_speed': {
              value: 0.2
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].flyingSpeed).toBe(0.2);
    });

    test('should extract canFly', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:flying_mob' },
          components: {
            'minecraft:can_fly': {}
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].canFly).toBe(true);
    });
  });

  describe('convertToStandard - 战斗属性', () => {
    test('should extract attack damage', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:attacker' },
          components: {
            'minecraft:attack_damage': {
              value: 5.0
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].attackDamage).toBe(5.0);
    });

    test('should extract attack range', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:attacker' },
          components: {
            'minecraft:attack': {
              range: 3.0
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].attackRange).toBe(3.0);
    });

    test('should extract knockback resistance', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:tough' },
          components: {
            'minecraft:knockback_resistance': {
              value: 0.8
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].knockbackResistance).toBe(0.8);
    });

    test('should extract follow range', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:tracker' },
          components: {
            'minecraft:follow_range': {
              value: 32.0
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].followRange).toBe(32.0);
    });
  });

  describe('convertToStandard - 族群', () => {
    test('should extract families as array', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:zombie' },
          components: {
            'minecraft:type_family': {
              family: ['mob', 'zombie', 'undead']
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].families).toEqual(['mob', 'zombie', 'undead']);
    });

    test('should extract family as single string', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:simple' },
          components: {
            'minecraft:type_family': {
              family: 'mob'
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].families).toEqual(['mob']);
    });

    test('should filter out non-string families', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:mixed' },
          components: {
            'minecraft:type_family': {
              family: ['mob', 123, 'zombie', null, 'undead']
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].families).toEqual(['mob', 'zombie', 'undead']);
    });
  });

  describe('convertToStandard - 交互属性', () => {
    test('should extract interaction flags', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:interactive' },
          components: {
            'minecraft:tameable': { probability: 0.33 },
            'minecraft:breedable': { require_tame: false },
            'minecraft:rideable': { seat_count: 1 },
            'minecraft:trade_table': { table: 'trading/farmer.json' }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.isTameable).toBe(true);
      expect(entity.isBreedable).toBe(true);
      expect(entity.isRideable).toBe(true);
      expect(entity.hasTradeTable).toBe(true);
    });

    test('should extract loot table', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:looter' },
          components: {
            'minecraft:loot': {
              table: 'loot_tables/entities/zombie.json'
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].lootTable).toBe('loot_tables/entities/zombie.json');
    });

    test('should extract experience reward as number', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:exp_mob' },
          components: {
            'minecraft:experience_reward': 10
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].experienceReward).toBe(10);
    });

    test('should extract experience reward from on_death', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:exp_mob' },
          components: {
            'minecraft:experience_reward': {
              on_death: 5
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].experienceReward).toBe(5);
    });

    test('should extract experience reward from on_death range (min)', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:exp_mob' },
          components: {
            'minecraft:experience_reward': {
              on_death: {
                min: 3,
                max: 7
              }
            }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      expect(result[0].experienceReward).toBe(3);
    });
  });

  describe('convertToStandard - 特殊能力', () => {
    test('should extract special ability flags', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:special' },
          components: {
            'minecraft:fire_immune': {},
            'minecraft:burns_in_daylight': {},
            'minecraft:breathable': { total_supply: 15 },
            'minecraft:explode': { fuse_length: 1.5, power: 3.0 }
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.fireImmune).toBe(true);
      expect(entity.burnsInDaylight).toBe(true);
      expect(entity.isBreathable).toBe(true);
      expect(entity.canExplode).toBe(true);
    });
  });

  describe('convertToStandard - 状态标志', () => {
    test('should extract state flags', () => {
      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:stateful' },
          components: {
            'minecraft:is_baby': {},
            'minecraft:is_tamed': {},
            'minecraft:is_saddled': {}
          }
        }
      };

      const result = EntityConverter.convertToStandard(entityData, createMetadata());
      const entity = result[0];

      expect(entity.isBaby).toBe(true);
      expect(entity.isTamed).toBe(true);
      expect(entity.isSaddled).toBe(true);
    });
  });

  describe('convertToStandard - 完整结构保留', () => {
    test('should preserve complete components', () => {
      const entityData = loadTestResource('complete_entity.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result[0].components).toBeDefined();
      expect(result[0].components!['minecraft:health']).toBeDefined();
      expect(result[0].components!['minecraft:movement']).toBeDefined();
    });

    test('should preserve component_groups', () => {
      const entityData = loadTestResource('entity_with_groups_events.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result[0].componentGroups).toBeDefined();
      expect(result[0].componentGroups!['test:adult_group']).toBeDefined();
      expect(result[0].componentGroups!['test:baby_group']).toBeDefined();
      expect(result[0].componentGroups!['test:angry_group']).toBeDefined();
    });

    test('should preserve events', () => {
      const entityData = loadTestResource('entity_with_groups_events.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result[0].events).toBeDefined();
      expect(result[0].events!['test:grow_up']).toBeDefined();
      expect(result[0].events!['test:become_angry']).toBeDefined();
      expect(result[0].events!['test:calm_down']).toBeDefined();
    });

    test('should handle entity without component_groups', () => {
      const entityData = loadTestResource('minimal_entity.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result[0].componentGroups).toBeUndefined();
    });

    test('should handle entity without events', () => {
      const entityData = loadTestResource('minimal_entity.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result[0].events).toBeUndefined();
    });
  });

  describe('convertToStandard - 元数据', () => {
    test('should build metadata correctly', () => {
      const metadata = {
        sourceVersion: '1.19.40',
        upgradePath: ['1.19.40', '1.19.50', '1.20.10', '1.21.60'],
        warnings: ['Warning 1', 'Warning 2'],
        sourceFile: 'entities/custom_entity.json'
      };

      const entityData = {
        'minecraft:entity': {
          description: { identifier: 'test:metadata_test' },
          components: {}
        }
      };

      const result = EntityConverter.convertToStandard(entityData, metadata);
      expect(result[0].metadata).toEqual(metadata);
    });
  });

  describe('convertToStandard - 集成测试', () => {
    test('should convert complete entity with all fields', () => {
      const entityData = loadTestResource('complete_entity.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      expect(result.length).toBe(1);
      const entity = result[0];

      // 核心字段
      expect(entity.identifier).toBe('test:complete_mob');
      expect(entity.runtimeIdentifier).toBe('minecraft:zombie');
      expect(entity.displayName).toBe('Complete Test Mob');

      // 生命属性
      expect(entity.maxHealth).toBe(20);
      expect(entity.defaultHealth).toBe(20);

      // 物理属性
      expect(entity.collisionBox).toEqual({ width: 0.6, height: 1.8 });
      expect(entity.scale).toBe(1.0);
      expect(entity.isPushable).toBe(true);

      // 移动属性
      expect(entity.movementSpeed).toBe(0.25);
      expect(entity.flyingSpeed).toBe(0.15);
      expect(entity.canFly).toBe(true);

      // 战斗属性
      expect(entity.attackDamage).toBe(3.0);
      expect(entity.attackRange).toBe(2.0);
      expect(entity.knockbackResistance).toBe(0.5);
      expect(entity.followRange).toBe(16.0);

      // 族群
      expect(entity.families).toEqual(['mob', 'monster', 'undead']);

      // 交互属性
      expect(entity.isTameable).toBe(true);
      expect(entity.isBreedable).toBe(true);
      expect(entity.isRideable).toBe(true);
      expect(entity.hasTradeTable).toBe(true);
      expect(entity.lootTable).toBe('loot_tables/entities/zombie.json');
      expect(entity.experienceReward).toBe(5);

      // 特殊能力
      expect(entity.fireImmune).toBe(true);
      expect(entity.burnsInDaylight).toBe(true);
      expect(entity.isBreathable).toBe(true);
      expect(entity.canExplode).toBe(true);

      // 生成属性
      expect(entity.isSpawnable).toBe(true);
      expect(entity.isSummonable).toBe(true);
      expect(entity.isExperimental).toBe(false);
      expect(entity.spawnCategory).toBe('monster');

      // 状态标志
      expect(entity.isBaby).toBe(true);
      expect(entity.isTamed).toBe(true);
      expect(entity.isSaddled).toBe(true);

      // 完整结构
      expect(entity.components).toBeDefined();
      expect(entity.componentGroups).toBeUndefined();
      expect(entity.events).toBeUndefined();
    });

    test('should convert entity with component_groups and events', () => {
      const entityData = loadTestResource('entity_with_groups_events.json');
      const result = EntityConverter.convertToStandard(entityData, createMetadata());

      const entity = result[0];
      expect(entity.identifier).toBe('test:transforming_mob');
      expect(entity.componentGroups).toBeDefined();
      expect(entity.events).toBeDefined();
      expect(Object.keys(entity.componentGroups!).length).toBe(3);
      expect(Object.keys(entity.events!).length).toBe(3);
    });
  });

  describe('performance', () => {
    test('should convert minimal entity in less than 10ms', () => {
      const entityData = loadTestResource('minimal_entity.json');

      const start = Date.now();
      EntityConverter.convertToStandard(entityData, createMetadata());
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });

    test('should convert complete entity in less than 15ms', () => {
      const entityData = loadTestResource('complete_entity.json');

      const start = Date.now();
      EntityConverter.convertToStandard(entityData, createMetadata());
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(15);
    });

    test('should convert entity with groups/events in less than 15ms', () => {
      const entityData = loadTestResource('entity_with_groups_events.json');

      const start = Date.now();
      EntityConverter.convertToStandard(entityData, createMetadata());
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(15);
    });
  });
});
