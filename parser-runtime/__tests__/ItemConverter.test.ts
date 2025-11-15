/**
 * ItemConverter 单元测试
 */

import { ItemConverter } from '../src/typescript/converter/ItemConverter';
import type { StandardItem } from '../src/typescript/index';
import * as fs from 'fs';
import * as path from 'path';

describe('ItemConverter', () => {
  /**
   * 辅助函数：创建测试元数据
   */
  function createMetadata() {
    return {
      sourceVersion: '1.21.60',
      upgradePath: ['1.19.0', '1.19.40', '1.19.50', '1.20.10', '1.20.41', '1.20.81', '1.21.50', '1.21.60'],
      warnings: [],
      sourceFile: 'items/test_item.json'
    };
  }

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

  // ============================================================================
  // 分类 1：基础字段提取测试
  // ============================================================================

  describe('Basic field extraction', () => {
    test('should convert simple item correctly', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:simple_item'
          },
          components: {
            'minecraft:max_stack_size': { value: 64 },
            'minecraft:icon': 'simple_item'
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result.length).toBe(1);
      const item = result[0];
      expect(item.identifier).toBe('mypack:simple_item');
      expect(item.maxStackSize).toBe(64);
      expect(item.icon).toBe('simple_item');
      expect(item.metadata.sourceVersion).toBe('1.21.60');
    });

    test('should extract display name from minecraft:display_name', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:named_item'
          },
          components: {
            'minecraft:display_name': 'Custom Item Name'
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].displayName).toBe('Custom Item Name');
    });

    test('should handle display name as object with value', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:named_item'
          },
          components: {
            'minecraft:display_name': { value: 'Custom Item Name' }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].displayName).toBe('Custom Item Name');
    });

    test('should extract identifier correctly', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item_123'
          },
          components: {}
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].identifier).toBe('mypack:test_item_123');
    });

    test('should extract icon as string', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {
            'minecraft:icon': 'test_icon'
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].icon).toBe('test_icon');
    });

    test('should extract icon from object with texture', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {
            'minecraft:icon': {
              texture: 'test_texture'
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].icon).toBe('test_texture');
    });

    test('should extract icon from object with textures', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {
            'minecraft:icon': {
              textures: {
                default: 'default_texture',
                damaged: 'damaged_texture'
              }
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].icon).toBe('default_texture');
    });

    test('should preserve complete components object', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {
            'minecraft:max_stack_size': { value: 16 },
            'minecraft:custom_component': { custom_data: 'test' }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].components).toBeDefined();
      expect(result[0].components!['minecraft:max_stack_size']).toEqual({ value: 16 });
      expect(result[0].components!['minecraft:custom_component']).toEqual({ custom_data: 'test' });
    });
  });

  // ============================================================================
  // 分类 2：多态组件处理测试
  // ============================================================================

  describe('Polymorphic component handling', () => {
    test('should handle max_stack_size: number format (old version)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {
            'minecraft:max_stack_size': 64
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].maxStackSize).toBe(64);
    });

    test('should handle max_stack_size: {value: number} format (v1.20.81+)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {
            'minecraft:max_stack_size': { value: 16 }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].maxStackSize).toBe(16);
    });

    test('should handle max_damage (v1.20.10-)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:tool'
          },
          components: {
            'minecraft:max_damage': 1561
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].maxDurability).toBe(1561);
    });

    test('should handle durability.max_durability (v1.20.81+)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:tool'
          },
          components: {
            'minecraft:durability': {
              max_durability: 2031
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].maxDurability).toBe(2031);
    });

    test('should handle hand_equipped: boolean format (old version)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:tool'
          },
          components: {
            'minecraft:hand_equipped': true
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].handEquipped).toBe(true);
    });

    test('should handle hand_equipped: {value: boolean} format (v1.20.81+)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:tool'
          },
          components: {
            'minecraft:hand_equipped': { value: true }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].handEquipped).toBe(true);
    });

    test('should handle foil (v1.19.0-v1.20.10)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:enchanted_item'
          },
          components: {
            'minecraft:foil': true
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].hasGlint).toBe(true);
    });

    test('should handle glint (v1.20.81+)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:enchanted_item'
          },
          components: {
            'minecraft:glint': { value: true }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].hasGlint).toBe(true);
    });

    test('should handle allow_off_hand: boolean format', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:shield'
          },
          components: {
            'minecraft:allow_off_hand': true
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].allowOffHand).toBe(true);
    });

    test('should handle allow_off_hand: {value: boolean} format', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:shield'
          },
          components: {
            'minecraft:allow_off_hand': { value: false }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].allowOffHand).toBe(false);
    });
  });

  // ============================================================================
  // 分类 3：特定类型物品测试
  // ============================================================================

  describe('Specific item type extraction', () => {
    test('should extract food properties correctly', () => {
      const itemData = loadTestFile('v1_21_60', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isFood).toBe(true);
      expect(item.nutrition).toBe(6);
      expect(item.saturationModifier).toBe(0.8);
    });

    test('should extract weapon properties correctly', () => {
      const itemData = loadTestFile('v1_20_81', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.damage).toBe(8);
      expect(item.maxDurability).toBe(2031);
      expect(item.handEquipped).toBe(true);
    });

    test('should extract tool properties correctly', () => {
      const itemData = loadTestFile('v1_20_10', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isDigger).toBe(true);
      expect(item.maxDurability).toBe(1561);
    });

    test('should extract armor properties correctly', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:helmet'
          },
          components: {
            'minecraft:wearable': {
              slot: 'slot.armor.head',
              protection: 3
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.wearableSlot).toBe('slot.armor.head');
      expect(item.protection).toBe(3);
    });

    test('should extract enchantable properties correctly', () => {
      const itemData = loadTestFile('v1_20_81', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isEnchantable).toBe(true);
      expect(item.enchantableSlot).toBe('sword');
      expect(item.enchantableValue).toBe(15);
    });

    test('should extract fuel properties correctly', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:coal'
          },
          components: {
            'minecraft:fuel': {
              duration: 80.0
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isFuel).toBe(true);
      expect(item.fuelDuration).toBe(80.0);
    });
  });

  // ============================================================================
  // 分类 4：新版本组件测试
  // ============================================================================

  describe('New version components', () => {
    test('should extract rarity (v1.21.50+)', () => {
      const itemData = loadTestFile('v1_21_60', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].rarity).toBe('uncommon');
    });

    test('should extract use_animation (v1.20.81+)', () => {
      const itemData = loadTestFile('v1_21_60', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result[0].useAnimation).toBe('eat');
    });

    test('should extract compostable (v1.21.60+)', () => {
      const itemData = loadTestFile('v1_21_60', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isCompostable).toBe(true);
      expect(item.compostChance).toBe(0.65);
    });

    test('should extract cooldown properties', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:ender_pearl'
          },
          components: {
            'minecraft:cooldown': {
              category: 'ender_pearl',
              duration: 1.0
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.cooldownCategory).toBe('ender_pearl');
      expect(item.cooldownDuration).toBe(1.0);
    });
  });

  // ============================================================================
  // 分类 5：边界情况测试
  // ============================================================================

  describe('Edge cases', () => {
    test('should return empty array when minecraft:item is missing', () => {
      const itemData = {
        format_version: '1.21.60'
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result.length).toBe(0);
    });

    test('should return empty array when identifier is missing', () => {
      const itemData = {
        'minecraft:item': {
          description: {},
          components: {}
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result.length).toBe(0);
    });

    test('should handle missing components gracefully', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:minimal_item'
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      expect(result.length).toBe(1);
      const item = result[0];
      expect(item.identifier).toBe('mypack:minimal_item');
      expect(item.maxStackSize).toBeUndefined();
      expect(item.icon).toBeUndefined();
    });

    test('should build metadata correctly', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:test_item'
          },
          components: {}
        }
      };

      const metadata = {
        sourceVersion: '1.19.0',
        upgradePath: ['1.19.0', '1.19.40', '1.21.60'],
        warnings: ['Test warning 1', 'Test warning 2'],
        sourceFile: 'items/custom_item.json'
      };

      const result = ItemConverter.convertToStandard(itemData, metadata);

      const item = result[0];
      expect(item.metadata.sourceVersion).toBe('1.19.0');
      expect(item.metadata.upgradePath).toEqual(['1.19.0', '1.19.40', '1.21.60']);
      expect(item.metadata.warnings).toEqual(['Test warning 1', 'Test warning 2']);
      expect(item.metadata.sourceFile).toBe('items/custom_item.json');
    });

    test('should handle complex item with multiple properties', () => {
      const itemData = loadTestFile('v1_20_81', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:netherite_sword');
      expect(item.maxStackSize).toBe(1);
      expect(item.maxDurability).toBe(2031);
      expect(item.damage).toBe(8);
      expect(item.hasGlint).toBe(true);
      expect(item.handEquipped).toBe(true);
      expect(item.isEnchantable).toBe(true);
      expect(item.enchantableSlot).toBe('sword');
      expect(item.enchantableValue).toBe(15);
      expect(item.isRepairable).toBe(true);
      expect(item.icon).toBe('netherite_sword');
    });

    test('should handle all functional flags correctly', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:multifunctional_item'
          },
          components: {
            'minecraft:food': { nutrition: 4 },
            'minecraft:fuel': { duration: 100 },
            'minecraft:projectile': {},
            'minecraft:throwable': {},
            'minecraft:block_placer': { block: 'minecraft:dirt' },
            'minecraft:entity_placer': { entity: 'minecraft:cow' },
            'minecraft:repairable': {},
            'minecraft:compostable': { compost_chance: 0.5 }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isFood).toBe(true);
      expect(item.isFuel).toBe(true);
      expect(item.isProjectile).toBe(true);
      expect(item.isThrowable).toBe(true);
      expect(item.canPlaceBlock).toBe(true);
      expect(item.canPlaceEntity).toBe(true);
      expect(item.isRepairable).toBe(true);
      expect(item.isCompostable).toBe(true);
    });
  });

  // ============================================================================
  // 分类 6：性能测试
  // ============================================================================

  describe('Performance', () => {
    test('should convert single item in less than 10ms', () => {
      const itemData = loadTestFile('v1_20_81', 'simple_item.json');

      const start = Date.now();
      ItemConverter.convertToStandard(itemData, createMetadata());
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });

    test('should convert multiple items efficiently', () => {
      const itemData = loadTestFile('v1_20_81', 'simple_item.json');
      const count = 10;

      const start = Date.now();
      for (let i = 0; i < count; i++) {
        ItemConverter.convertToStandard(itemData, createMetadata());
      }
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(50);
      expect(duration / count).toBeLessThan(5);
    });
  });

  // ============================================================================
  // 集成测试：真实文件测试
  // ============================================================================

  describe('Real file integration tests', () => {
    test('should parse v1.19.0 complex item (food)', () => {
      const itemData = loadTestFile('v1_19_0', 'complex_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:golden_apple');
      expect(item.isFood).toBe(true);
      expect(item.nutrition).toBe(4);
    });

    test('should parse v1.19.40 item with foil', () => {
      const itemData = loadTestFile('v1_19_40', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:enchanted_sword');
      expect(item.hasGlint).toBe(true);
    });

    test('should parse v1.20.10 tool item', () => {
      const itemData = loadTestFile('v1_20_10', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:diamond_pickaxe');
      expect(item.isDigger).toBe(true);
      expect(item.maxDurability).toBe(1561);
    });

    test('should parse v1.20.81 weapon with new format', () => {
      const itemData = loadTestFile('v1_20_81', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:netherite_sword');
      expect(item.maxStackSize).toBe(1);
      expect(item.maxDurability).toBe(2031);
      expect(item.damage).toBe(8);
      expect(item.hasGlint).toBe(true);
    });

    test('should parse v1.21.60 organic food with compostable', () => {
      const itemData = loadTestFile('v1_21_60', 'simple_item.json');

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:organic_food');
      expect(item.isFood).toBe(true);
      expect(item.nutrition).toBe(6);
      expect(item.saturationModifier).toBe(0.8);
      expect(item.isCompostable).toBe(true);
      expect(item.compostChance).toBe(0.65);
      expect(item.rarity).toBe('uncommon');
      expect(item.useAnimation).toBe('eat');
    });
  });

  // ============================================================================
  // 分类 7：复杂组件归一化测试
  // ============================================================================

  describe('Complex component normalization', () => {
    // ----- Digger 组件测试 -----

    test('should normalize digger component with efficiency', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:diamond_pickaxe'
          },
          components: {
            'minecraft:digger': {
              use_efficiency: true,
              destroy_speeds: [
                {
                  block: 'minecraft:stone',
                  speed: 8.0
                },
                {
                  block: 'minecraft:dirt',
                  speed: 6.0
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isDigger).toBe(true);
      expect(item.digger).toBeDefined();
      expect(item.digger?.useEfficiency).toBe(true);
      expect(item.digger?.destroySpeeds).toHaveLength(2);
      expect(item.digger?.destroySpeeds[0]).toEqual({
        block: 'minecraft:stone',
        blockTags: null,
        speed: 8.0
      });
      expect(item.digger?.destroySpeeds[1]).toEqual({
        block: 'minecraft:dirt',
        blockTags: null,
        speed: 6.0
      });
    });

    test('should normalize digger with block tags', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:iron_pickaxe'
          },
          components: {
            'minecraft:digger': {
              use_efficiency: false,
              destroy_speeds: [
                {
                  block: { tags: 'stone' },
                  speed: 6.0
                },
                {
                  block: { tags: 'wood' },
                  speed: 4.0
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.digger?.useEfficiency).toBe(false);
      expect(item.digger?.destroySpeeds[0]).toEqual({
        block: null,
        blockTags: 'stone',
        speed: 6.0
      });
      expect(item.digger?.destroySpeeds[1]).toEqual({
        block: null,
        blockTags: 'wood',
        speed: 4.0
      });
    });

    test('should normalize digger with mixed block types', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:multi_tool'
          },
          components: {
            'minecraft:digger': {
              destroy_speeds: [
                {
                  block: 'minecraft:obsidian',
                  speed: 10.0
                },
                {
                  block: { tags: 'stone' },
                  speed: 8.0
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.digger?.destroySpeeds[0].block).toBe('minecraft:obsidian');
      expect(item.digger?.destroySpeeds[0].blockTags).toBeNull();
      expect(item.digger?.destroySpeeds[1].block).toBeNull();
      expect(item.digger?.destroySpeeds[1].blockTags).toBe('stone');
    });

    test('should handle digger without destroy_speeds', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:basic_tool'
          },
          components: {
            'minecraft:digger': {
              use_efficiency: true
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isDigger).toBe(true);
      expect(item.digger?.useEfficiency).toBe(true);
      expect(item.digger?.destroySpeeds).toEqual([]);
    });

    test('should return undefined for missing digger component', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:simple_item'
          },
          components: {}
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isDigger).toBeUndefined();
      expect(item.digger).toBeUndefined();
    });

    // ----- Dyeable 组件测试 -----

    test('should normalize dyeable with hex color', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:leather_helmet'
          },
          components: {
            'minecraft:dyeable': {
              default_color: '#A06540'
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.dyeable).toBeDefined();
      expect(item.dyeable?.defaultColor).toEqual({
        red: 160,
        green: 101,
        blue: 64
      });
    });

    test('should normalize dyeable with RGB array', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:custom_armor'
          },
          components: {
            'minecraft:dyeable': {
              default_color: [128, 64, 255]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.dyeable?.defaultColor).toEqual({
        red: 128,
        green: 64,
        blue: 255
      });
    });

    test('should normalize dyeable with empty array (no default color)', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:plain_leather'
          },
          components: {
            'minecraft:dyeable': {
              default_color: []
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.dyeable?.defaultColor).toBeNull();
    });

    test('should normalize dyeable without default_color', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:dyeable_item'
          },
          components: {
            'minecraft:dyeable': {}
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.dyeable?.defaultColor).toBeNull();
    });

    test('should return undefined for missing dyeable component', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:iron_helmet'
          },
          components: {}
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.dyeable).toBeUndefined();
    });

    // ----- 颜色解析边界测试 -----

    test('should parse various hex color formats', () => {
      const testCases = [
        { input: '#FFFFFF', expected: { red: 255, green: 255, blue: 255 } },
        { input: '#000000', expected: { red: 0, green: 0, blue: 0 } },
        { input: '#FF5733', expected: { red: 255, green: 87, blue: 51 } }
      ];

      for (const testCase of testCases) {
        const itemData = {
          'minecraft:item': {
            description: { identifier: 'test:item' },
            components: {
              'minecraft:dyeable': { default_color: testCase.input }
            }
          }
        };

        const result = ItemConverter.convertToStandard(itemData, createMetadata());
        expect(result[0].dyeable?.defaultColor).toEqual(testCase.expected);
      }
    });

    test('should handle complete tool with both digger and dyeable', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:colored_pickaxe'
          },
          components: {
            'minecraft:digger': {
              use_efficiency: true,
              destroy_speeds: [
                {
                  block: 'minecraft:stone',
                  speed: 8.0
                }
              ]
            },
            'minecraft:dyeable': {
              default_color: '#FF0000'
            },
            'minecraft:max_stack_size': { value: 1 },
            'minecraft:durability': { max_durability: 250 }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:colored_pickaxe');
      expect(item.isDigger).toBe(true);
      expect(item.digger?.useEfficiency).toBe(true);
      expect(item.digger?.destroySpeeds).toHaveLength(1);
      expect(item.dyeable?.defaultColor).toEqual({ red: 255, green: 0, blue: 0 });
      expect(item.maxStackSize).toBe(1);
      expect(item.maxDurability).toBe(250);
    });

    // ----- Repairable 组件测试 -----

    test('should normalize repairable with numeric repair amount', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:diamond_pickaxe'
          },
          components: {
            'minecraft:repairable': {
              repair_items: [
                {
                  items: ['minecraft:diamond'],
                  repair_amount: 100
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isRepairable).toBe(true);
      expect(item.repairable).toBeDefined();
      expect(item.repairable?.repairItems).toHaveLength(1);
      expect(item.repairable?.repairItems[0]).toEqual({
        items: ['minecraft:diamond'],
        repairAmount: 100
      });
    });

    test('should normalize repairable with string repair amount', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:iron_sword'
          },
          components: {
            'minecraft:repairable': {
              repair_items: [
                {
                  items: ['minecraft:iron_ingot'],
                  repair_amount: '50%'
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.repairable?.repairItems[0].repairAmount).toBe(50);
    });

    test('should normalize repairable with null repair amount', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:custom_tool'
          },
          components: {
            'minecraft:repairable': {
              repair_items: [
                {
                  items: ['minecraft:stick']
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.repairable?.repairItems[0].repairAmount).toBeNull();
    });

    test('should normalize repairable with multiple repair items', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:netherite_sword'
          },
          components: {
            'minecraft:repairable': {
              repair_items: [
                {
                  items: ['minecraft:netherite_ingot'],
                  repair_amount: 100
                },
                {
                  items: ['minecraft:netherite_scrap'],
                  repair_amount: 25
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.repairable?.repairItems).toHaveLength(2);
      expect(item.repairable?.repairItems[0].items).toEqual(['minecraft:netherite_ingot']);
      expect(item.repairable?.repairItems[1].repairAmount).toBe(25);
    });

    // ----- Throwable 组件测试 -----

    test('should normalize throwable component', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:snowball'
          },
          components: {
            'minecraft:throwable': {
              do_swing_animation: true,
              launch_power_scale: 1.5,
              max_draw_duration: 2.0,
              min_draw_duration: 0.0,
              max_launch_power: 1.0,
              scale_power_by_draw_duration: false
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.isThrowable).toBe(true);
      expect(item.throwable).toBeDefined();
      expect(item.throwable?.doSwingAnimation).toBe(true);
      expect(item.throwable?.launchPowerScale).toBe(1.5);
      expect(item.throwable?.maxDrawDuration).toBe(2.0);
      expect(item.throwable?.minDrawDuration).toBe(0.0);
      expect(item.throwable?.maxLaunchPower).toBe(1.0);
      expect(item.throwable?.scalePowerByDrawDuration).toBe(false);
    });

    test('should normalize throwable with minimal config', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:ender_pearl'
          },
          components: {
            'minecraft:throwable': {}
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.throwable?.doSwingAnimation).toBe(false);
      expect(item.throwable?.launchPowerScale).toBe(1.0);
      expect(item.throwable?.maxDrawDuration).toBeNull();
      expect(item.throwable?.scalePowerByDrawDuration).toBe(false);
    });

    // ----- Shooter 组件测试 -----

    test('should normalize shooter component with ammunition', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:bow'
          },
          components: {
            'minecraft:shooter': {
              ammunition: [
                {
                  item: 'minecraft:arrow',
                  use_offhand: true,
                  search_inventory: true,
                  use_in_creative: false
                }
              ],
              charge_on_draw: true,
              max_draw_duration: 1.0,
              scale_power_by_draw_duration: true
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.shooter).toBeDefined();
      expect(item.shooter?.ammunition).toHaveLength(1);
      expect(item.shooter?.ammunition[0]).toEqual({
        item: 'minecraft:arrow',
        useOffhand: true,
        searchInventory: true,
        useInCreative: false
      });
      expect(item.shooter?.chargeOnDraw).toBe(true);
      expect(item.shooter?.maxDrawDuration).toBe(1.0);
      expect(item.shooter?.scalePowerByDrawDuration).toBe(true);
    });

    test('should normalize shooter with multiple ammunition types', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:crossbow'
          },
          components: {
            'minecraft:shooter': {
              ammunition: [
                {
                  item: 'minecraft:arrow',
                  use_offhand: false,
                  search_inventory: true,
                  use_in_creative: false
                },
                {
                  item: 'minecraft:firework_rocket',
                  use_offhand: false,
                  search_inventory: true,
                  use_in_creative: false
                }
              ],
              charge_on_draw: false
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.shooter?.ammunition).toHaveLength(2);
      expect(item.shooter?.ammunition[0].item).toBe('minecraft:arrow');
      expect(item.shooter?.ammunition[1].item).toBe('minecraft:firework_rocket');
      expect(item.shooter?.chargeOnDraw).toBe(false);
    });

    test('should normalize shooter with minimal config', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:slingshot'
          },
          components: {
            'minecraft:shooter': {}
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.shooter?.ammunition).toEqual([]);
      expect(item.shooter?.chargeOnDraw).toBe(false);
      expect(item.shooter?.maxDrawDuration).toBeNull();
      expect(item.shooter?.scalePowerByDrawDuration).toBe(false);
    });

    // ----- 组合测试 -----

    test('should handle item with all Phase 2 components', () => {
      const itemData = {
        'minecraft:item': {
          description: {
            identifier: 'mypack:ultimate_weapon'
          },
          components: {
            'minecraft:repairable': {
              repair_items: [
                {
                  items: ['minecraft:diamond'],
                  repair_amount: 100
                }
              ]
            },
            'minecraft:throwable': {
              do_swing_animation: true,
              launch_power_scale: 1.5
            },
            'minecraft:shooter': {
              ammunition: [
                {
                  item: 'minecraft:arrow',
                  use_offhand: true,
                  search_inventory: true,
                  use_in_creative: false
                }
              ]
            }
          }
        }
      };

      const result = ItemConverter.convertToStandard(itemData, createMetadata());

      const item = result[0];
      expect(item.identifier).toBe('mypack:ultimate_weapon');
      expect(item.isRepairable).toBe(true);
      expect(item.repairable).toBeDefined();
      expect(item.isThrowable).toBe(true);
      expect(item.throwable).toBeDefined();
      expect(item.shooter).toBeDefined();
    });
  });
});
