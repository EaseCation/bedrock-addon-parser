/**
 * ItemUpgrader 单元测试
 */

import { ItemUpgrader } from '../src/typescript/upgrader/ItemUpgrader';
import * as fs from 'fs';
import * as path from 'path';

describe('ItemUpgrader', () => {
  /**
   * 辅助函数：读取测试文件
   */
  function loadTestFile(version: string, filename: string): any {
    const filePath = path.join(
      __dirname,
      '../resources/items',
      version,
      filename
    );
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }

  describe('upgradeToLatest', () => {
    test('should throw error for unsupported version', () => {
      const data = { format_version: '1.0.0', 'minecraft:item': {} };

      expect(() => {
        ItemUpgrader.upgradeToLatest(data, '1.0.0');
      }).toThrow('Unsupported version: 1.0.0');
    });

    test('should return data unchanged if already at latest version', () => {
      const data = loadTestFile('v1_21_60', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.21.60');

      expect(result.data).toEqual(data);
      expect(result.upgradePath).toEqual(['1.21.60']);
      expect(result.warnings.length).toBe(0);
    });

    test('should not modify original data', () => {
      const original = loadTestFile('v1_19_0', 'simple_item.json');
      const originalCopy = JSON.parse(JSON.stringify(original));

      ItemUpgrader.upgradeToLatest(original, '1.19.0');

      // 原始数据不应被修改
      expect(original).toEqual(originalCopy);
    });
  });

  describe('v1.19.0 → v1.19.40', () => {
    test('should upgrade version number only', () => {
      const data = loadTestFile('v1_19_0', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toContain('1.19.40');
      expect(result.warnings.some(w => w.includes('v1.19.0 → v1.19.40'))).toBe(true);
    });
  });

  describe('v1.19.40 → v1.19.50', () => {
    test('should upgrade with no changes (backward compatible)', () => {
      const data = loadTestFile('v1_19_40', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.40');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toContain('1.19.50');
      expect(result.warnings.some(w => w.includes('v1.19.40 → v1.19.50'))).toBe(true);
    });
  });

  describe('v1.19.50 → v1.20.10', () => {
    test('should migrate category to menu_category', () => {
      const data = {
        format_version: '1.19.50',
        'minecraft:item': {
          description: {
            identifier: 'test:item',
            category: 'equipment'
          },
          components: {}
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.50');

      const description = result.data['minecraft:item'].description;
      expect(description.category).toBeUndefined();
      expect(description.menu_category).toBeDefined();
      expect(description.menu_category.category).toBe('equipment');
      expect(result.warnings.some(w => w.includes('Migrated description.category to menu_category'))).toBe(true);
    });

    test('should simplify icon component', () => {
      const data = {
        format_version: '1.19.50',
        'minecraft:item': {
          description: {
            identifier: 'test:item'
          },
          components: {
            'minecraft:icon': {
              texture: 'test_icon'
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.50');

      const icon = result.data['minecraft:item'].components['minecraft:icon'];
      expect(icon).toBe('test_icon');
      expect(result.warnings.some(w => w.includes('Simplified icon component'))).toBe(true);
    });
  });

  describe('v1.20.10 → v1.20.41', () => {
    test('should upgrade with minor enhancements', () => {
      const data = loadTestFile('v1_20_10', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.10');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toContain('1.20.41');
    });
  });

  describe('v1.20.41 → v1.20.81 (Most Complex)', () => {
    test('should convert max_stack_size to object format', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:item'
          },
          components: {
            'minecraft:max_stack_size': 64
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const maxStackSize = result.data['minecraft:item'].components['minecraft:max_stack_size'];
      expect(maxStackSize).toEqual({ value: 64 });
      expect(result.warnings.some(w => w.includes('Converted max_stack_size to object format'))).toBe(true);
    });

    test('should migrate max_damage to durability', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:sword'
          },
          components: {
            'minecraft:max_damage': 1000
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:max_damage']).toBeUndefined();
      expect(components['minecraft:durability']).toBeDefined();
      expect(components['minecraft:durability'].max_durability).toBe(1000);
      expect(result.warnings.some(w => w.includes('Migrated max_damage'))).toBe(true);
    });

    test('should convert hand_equipped to object format', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:tool'
          },
          components: {
            'minecraft:hand_equipped': true
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const handEquipped = result.data['minecraft:item'].components['minecraft:hand_equipped'];
      expect(handEquipped).toEqual({ value: true });
      expect(result.warnings.some(w => w.includes('Converted hand_equipped to object format'))).toBe(true);
    });

    test('should rename foil to glint', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:enchanted'
          },
          components: {
            'minecraft:foil': true
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:foil']).toBeUndefined();
      expect(components['minecraft:glint']).toEqual({ value: true });
      expect(result.warnings.some(w => w.includes('Renamed foil to glint'))).toBe(true);
    });

    test('should migrate armor to wearable', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:armor'
          },
          components: {
            'minecraft:armor': {
              protection: 5
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:armor']).toBeUndefined();
      expect(components['minecraft:wearable']).toBeDefined();
      expect(components['minecraft:wearable'].protection).toBe(5);
      expect(result.warnings.some(w => w.includes('Migrated armor to wearable.protection'))).toBe(true);
    });

    test('should remove deprecated components', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:deprecated'
          },
          components: {
            'minecraft:weapon': { damage: 10 },
            'minecraft:knockback_resistance': 0.5,
            'minecraft:on_use': {},
            'minecraft:projectile': {}
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:weapon']).toBeUndefined();
      expect(components['minecraft:knockback_resistance']).toBeUndefined();
      expect(components['minecraft:on_use']).toBeUndefined();
      expect(components['minecraft:projectile']).toBeUndefined();
      expect(result.warnings.some(w => w.includes('Removed deprecated component'))).toBe(true);
    });

    test('should suggest enchantable for durability items', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:tool'
          },
          components: {
            'minecraft:max_damage': 500
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      expect(result.warnings.some(w => w.includes('Consider adding minecraft:enchantable'))).toBe(true);
    });

    test('should handle complex item from v1.20.10', () => {
      const data = loadTestFile('v1_20_10', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.10');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.data['minecraft:item']).toBeDefined();
      expect(result.warnings.length).toBeGreaterThan(0);
    });
  });

  describe('v1.20.81 → v1.21.50', () => {
    test('should warn about events removal', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:item': {
          description: {
            identifier: 'test:food'
          },
          components: {},
          events: {
            'on_consume': {
              add_mob_effect: {
                effect: 'regeneration',
                duration: 30
              }
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      expect(result.data['minecraft:item'].events).toBeUndefined();
      expect(result.warnings.some(w => w.includes('⚠️ BREAKING CHANGE: Events system removed'))).toBe(true);
      expect(result.warnings.some(w => w.includes('on_consume'))).toBe(true);
    });

    test('should migrate use_duration to use_modifiers', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:item': {
          description: {
            identifier: 'test:consumable'
          },
          components: {
            'minecraft:use_duration': 32
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:use_duration']).toBeUndefined();
      expect(components['minecraft:use_modifiers']).toBeDefined();
      expect(components['minecraft:use_modifiers'].use_duration).toBe(32);
      expect(result.warnings.some(w => w.includes('Migrated use_duration to use_modifiers'))).toBe(true);
    });

    test('should remove food.on_consume', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:item': {
          description: {
            identifier: 'test:food'
          },
          components: {
            'minecraft:food': {
              nutrition: 4,
              on_consume: {
                event: 'eat_effect'
              }
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      const food = result.data['minecraft:item'].components['minecraft:food'];
      expect(food.on_consume).toBeUndefined();
      expect(result.warnings.some(w => w.includes('Removed food.on_consume'))).toBe(true);
    });

    test('should warn about missing saturation_modifier', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:item': {
          description: {
            identifier: 'test:food'
          },
          components: {
            'minecraft:food': {
              nutrition: 6
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      expect(result.warnings.some(w => w.includes('Food component missing saturation_modifier'))).toBe(true);
    });

    test('should remove shooter.launch_power_scale', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:item': {
          description: {
            identifier: 'test:bow'
          },
          components: {
            'minecraft:shooter': {
              ammunition: [{ item: 'minecraft:arrow' }],
              launch_power_scale: 1.5
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      const shooter = result.data['minecraft:item'].components['minecraft:shooter'];
      expect(shooter.launch_power_scale).toBeUndefined();
      expect(result.warnings.some(w => w.includes('Removed unsupported shooter.launch_power_scale'))).toBe(true);
    });

    test('should warn about hidden items', () => {
      const data = {
        format_version: '1.20.81',
        'minecraft:item': {
          description: {
            identifier: 'test:hidden',
            menu_category: {
              category: 'none'
            }
          },
          components: {}
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      expect(result.warnings.some(w => w.includes('is_hidden_in_commands'))).toBe(true);
    });
  });

  describe('v1.21.50 → v1.21.60', () => {
    test('should suggest compostable for food items', () => {
      const data = {
        format_version: '1.21.50',
        'minecraft:item': {
          description: {
            identifier: 'test:food'
          },
          components: {
            'minecraft:food': {
              nutrition: 4,
              saturation_modifier: 0.6
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.21.50');

      expect(result.warnings.some(w => w.includes('Food items can now use minecraft:compostable'))).toBe(true);
    });

    test('should suggest rarity for enchantable items', () => {
      const data = {
        format_version: '1.21.50',
        'minecraft:item': {
          description: {
            identifier: 'test:sword'
          },
          components: {
            'minecraft:enchantable': {
              slot: 'sword',
              value: 10
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.21.50');

      expect(result.warnings.some(w => w.includes('Consider adding minecraft:rarity'))).toBe(true);
    });

    test('should suggest durability_sensor for tools', () => {
      const data = {
        format_version: '1.21.50',
        'minecraft:item': {
          description: {
            identifier: 'test:pickaxe'
          },
          components: {
            'minecraft:durability': {
              max_durability: 1000
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.21.50');

      expect(result.warnings.some(w => w.includes('durability_sensor'))).toBe(true);
    });

    test('should suggest multi-texture icon format', () => {
      const data = {
        format_version: '1.21.50',
        'minecraft:item': {
          description: {
            identifier: 'test:item'
          },
          components: {
            'minecraft:icon': 'simple_icon'
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.21.50');

      expect(result.warnings.some(w => w.includes('Icon can now support multiple textures'))).toBe(true);
    });
  });

  describe('Full upgrade path', () => {
    test('should upgrade from v1.19.0 to v1.21.60', () => {
      const data = loadTestFile('v1_19_0', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toEqual([
        '1.19.0',
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

    test('should upgrade complex food item from v1.19.0', () => {
      const data = loadTestFile('v1_19_0', 'complex_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.data['minecraft:item']).toBeDefined();
      expect(result.upgradePath.length).toBe(8); // 8 versions in the path
    });

    test('should upgrade from v1.20.81 to v1.21.60', () => {
      const data = loadTestFile('v1_20_81', 'simple_item.json');

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.81');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.upgradePath).toEqual(['1.20.81', '1.21.50', '1.21.60']);
    });
  });

  describe('Performance', () => {
    test('should upgrade single item in less than 5ms', () => {
      const data = loadTestFile('v1_20_81', 'simple_item.json');

      const start = Date.now();
      ItemUpgrader.upgradeToLatest(data, '1.20.81');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(5);
    });

    test('should upgrade 10 items in less than 50ms', () => {
      const data = loadTestFile('v1_19_0', 'simple_item.json');

      const start = Date.now();
      for (let i = 0; i < 10; i++) {
        ItemUpgrader.upgradeToLatest(data, '1.19.0');
      }
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(50);
    });
  });

  describe('Edge cases', () => {
    test('should handle item without components', () => {
      const data = {
        format_version: '1.19.0',
        'minecraft:item': {
          description: {
            identifier: 'test:empty'
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.data.format_version).toBe('1.21.60');
      expect(result.data['minecraft:item'].description.identifier).toBe('test:empty');
    });

    test('should handle item with existing durability component', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:tool'
          },
          components: {
            'minecraft:max_damage': 1000,
            'minecraft:durability': {
              damage_chance: {
                min: 60,
                max: 100
              }
            }
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const durability = result.data['minecraft:item'].components['minecraft:durability'];
      expect(durability.max_durability).toBe(1000);
      expect(durability.damage_chance).toBeDefined();
    });

    test('should handle armor as number', () => {
      const data = {
        format_version: '1.20.41',
        'minecraft:item': {
          description: {
            identifier: 'test:armor'
          },
          components: {
            'minecraft:armor': 10
          }
        }
      };

      const result = ItemUpgrader.upgradeToLatest(data, '1.20.41');

      const wearable = result.data['minecraft:item'].components['minecraft:wearable'];
      expect(wearable.protection).toBe(10);
    });
  });
});
