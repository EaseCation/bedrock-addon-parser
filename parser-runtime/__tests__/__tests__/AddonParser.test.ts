/**
 * AddonParser 端到端测试
 */

import { parseAddon, JsonFile } from '../../../main/typescript/index';
import * as fs from 'fs';
import * as path from 'path';

describe('AddonParser', () => {
  /**
   * 辅助函数：读取测试文件
   */
  function loadTestFile(type: string, version: string, filename: string): string {
    const filePath = path.join(
      __dirname,
      `../../resources/${type}`,
      version,
      filename
    );
    return fs.readFileSync(filePath, 'utf-8');
  }

  describe('基础功能', () => {
    test('should parse empty file list', () => {
      const files: JsonFile[] = [];
      const result = parseAddon(JSON.stringify(files));

      const parsed = JSON.parse(result);

      expect(parsed.blocks).toEqual([]);
      expect(parsed.items).toEqual([]);
      expect(parsed.entities).toEqual([]);
      expect(parsed.metadata).toBeDefined();
      expect(parsed.metadata.totalFiles).toBe(0);
    });

    test('should throw error on invalid JSON', () => {
      expect(() => {
        parseAddon('invalid json');
      }).toThrow();
    });

    test('should return valid JSON string', () => {
      const files: JsonFile[] = [];
      const result = parseAddon(JSON.stringify(files));

      expect(() => {
        JSON.parse(result);
      }).not.toThrow();
    });
  });

  describe('Block 端到端测试', () => {
    test('should parse simple v1.19.40 block and upgrade to v1.21.60', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(1);

      const block = parsed.blocks[0];
      expect(block.identifier).toBe('mypack:simple_stone');
      expect(block.hardness).toBe(3.0);
      expect(block.explosionResistance).toBe(15.0);
      expect(block.friction).toBe(0.6);

      // 验证元数据
      expect(block.metadata.sourceVersion).toBe('1.19.40');
      expect(block.metadata.upgradePath).toContain('1.21.60');
      expect(block.metadata.sourceFile).toBe('blocks/simple_block.json');
    });

    test('should parse complex v1.19.40 block with permutations', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/complex_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'complex_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(1);

      const block = parsed.blocks[0];
      expect(block.identifier).toBe('mypack:glowing_block');
      expect(block.hardness).toBe(2.0);
      expect(block.geometry).toBe('geometry.glowing_block');

      // 验证光照已经归一化（v1.19.40 的 0.0 已升级为 v1.19.50 的 0，然后归一化为 0.0）
      expect(block.lightEmission).toBe(0.0);

      // 验证升级警告
      expect(block.metadata.warnings.length).toBeGreaterThan(0);
      expect(block.metadata.warnings.some(w => w.includes('Converted light_emission'))).toBe(true);
    });

    test('should parse v1.19.50 block', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('blocks', 'v1_19_50', 'simple_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(1);

      const block = parsed.blocks[0];
      expect(block.identifier).toBe('mypack:simple_stone');
      expect(block.metadata.sourceVersion).toBe('1.19.50');
    });

    test('should parse v1.21.60 block (already latest version)', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('blocks', 'v1_21_60', 'simple_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(1);

      const block = parsed.blocks[0];
      expect(block.identifier).toBe('mypack:simple_stone');
      expect(block.metadata.sourceVersion).toBe('1.21.60');
      expect(block.metadata.upgradePath).toEqual(['1.21.60']); // 无升级
    });

    test('should parse multiple blocks from different versions', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/v1_19_40_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        },
        {
          path: 'blocks/v1_19_50_block.json',
          content: loadTestFile('blocks', 'v1_19_50', 'simple_block.json')
        },
        {
          path: 'blocks/v1_21_60_block.json',
          content: loadTestFile('blocks', 'v1_21_60', 'simple_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(3);
      expect(parsed.metadata.totalFiles).toBe(3);

      // 所有 Block 都应该成功解析
      expect(parsed.blocks.every(b => b.identifier === 'mypack:simple_stone')).toBe(true);
    });

    test('should handle parse errors gracefully', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/valid_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        },
        {
          path: 'blocks/invalid_block.json',
          content: 'invalid json'
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      // 有效的 Block 应该成功解析
      expect(parsed.blocks.length).toBe(1);
      expect(parsed.blocks[0].identifier).toBe('mypack:simple_stone');

      // 无效的文件应该生成警告
      expect(parsed.metadata.warnings.length).toBeGreaterThan(0);
      expect(parsed.metadata.warnings.some(w => w.includes('invalid_block.json'))).toBe(true);
    });
  });

  describe('Item 端到端测试', () => {
    test('should parse simple v1.19.0 item and upgrade to v1.21.60', () => {
      const files: JsonFile[] = [
        {
          path: 'items/simple_item.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.items.length).toBe(1);

      const item = parsed.items[0];
      expect(item.identifier).toBe('mypack:simple_sword');
      expect(item.maxDurability).toBeGreaterThan(0);

      // 验证元数据
      expect(item.metadata.sourceVersion).toBe('1.19.0');
      expect(item.metadata.upgradePath).toContain('1.21.60');
      expect(item.metadata.sourceFile).toBe('items/simple_item.json');
    });

    test('should parse complex v1.19.0 item with food component', () => {
      const files: JsonFile[] = [
        {
          path: 'items/complex_item.json',
          content: loadTestFile('items', 'v1_19_0', 'complex_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.items.length).toBe(1);

      const item = parsed.items[0];
      expect(item.identifier).toBe('mypack:golden_apple');
      expect(item.nutrition).toBe(4);
      expect(item.isFood).toBe(true);
      expect(item.metadata.warnings.length).toBeGreaterThan(0);
    });

    test('should parse v1.20.81 item with new component format', () => {
      const files: JsonFile[] = [
        {
          path: 'items/netherite_sword.json',
          content: loadTestFile('items', 'v1_20_81', 'simple_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.items.length).toBe(1);

      const item = parsed.items[0];
      expect(item.identifier).toBe('mypack:netherite_sword');
      expect(item.maxDurability).toBe(2031);
      expect(item.damage).toBe(8);
      expect(item.hasGlint).toBe(true);
      expect(item.metadata.sourceVersion).toBe('1.20.81');
    });

    test('should parse v1.21.60 item with compostable component', () => {
      const files: JsonFile[] = [
        {
          path: 'items/organic_food.json',
          content: loadTestFile('items', 'v1_21_60', 'simple_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.items.length).toBe(1);

      const item = parsed.items[0];
      expect(item.identifier).toBe('mypack:organic_food');
      expect(item.nutrition).toBe(6);
      expect(item.isFood).toBe(true);
      expect(item.isCompostable).toBe(true);
      expect(item.compostChance).toBe(0.65);
      expect(item.rarity).toBe('uncommon');
      expect(item.metadata.sourceVersion).toBe('1.21.60');
    });

    test('should parse multiple items from different versions', () => {
      const files: JsonFile[] = [
        {
          path: 'items/v1_19_0_item.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        },
        {
          path: 'items/v1_20_81_item.json',
          content: loadTestFile('items', 'v1_20_81', 'simple_item.json')
        },
        {
          path: 'items/v1_21_60_item.json',
          content: loadTestFile('items', 'v1_21_60', 'simple_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.items.length).toBe(3);
      expect(parsed.metadata.totalFiles).toBe(3);
    });

    test('should handle item parse errors gracefully', () => {
      const files: JsonFile[] = [
        {
          path: 'items/valid_item.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        },
        {
          path: 'items/invalid_item.json',
          content: 'invalid json'
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      // 有效的 Item 应该成功解析
      expect(parsed.items.length).toBe(1);
      expect(parsed.items[0].identifier).toBe('mypack:simple_sword');

      // 无效的文件应该生成警告
      expect(parsed.metadata.warnings.length).toBeGreaterThan(0);
      expect(parsed.metadata.warnings.some(w => w.includes('invalid_item.json'))).toBe(true);
    });
  });

  describe('Entity 端到端测试', () => {
    test('should parse simple v1.19.40 entity and upgrade to v1.21.60', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/simple_entity.json',
          content: loadTestFile('entities', 'v1_19_40', 'simple_entity.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(1);

      const entity = parsed.entities[0];
      expect(entity.identifier).toBe('test:simple_mob');
      expect(entity.maxHealth).toBe(20);

      // 验证元数据
      expect(entity.metadata.sourceVersion).toBe('1.19.40');
      expect(entity.metadata.upgradePath).toContain('1.21.60');
      expect(entity.metadata.sourceFile).toBe('entities/simple_entity.json');
    });

    test('should parse v1.19.50 entity with properties', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/entity_with_properties.json',
          content: loadTestFile('entities', 'v1_19_50', 'entity_with_properties.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(1);

      const entity = parsed.entities[0];
      expect(entity.identifier).toBe('test:property_mob');
      expect(entity.metadata.sourceVersion).toBe('1.19.50');
    });

    test('should parse v1.21.50 entity with deprecated lookat component', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/entity_with_lookat.json',
          content: loadTestFile('entities', 'v1_21_50', 'entity_with_lookat.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(1);

      const entity = parsed.entities[0];
      expect(entity.identifier).toBe('test:lookat_mob');
      expect(entity.metadata.sourceVersion).toBe('1.21.50');

      // 验证升级警告（lookat → looked_at）
      expect(entity.metadata.warnings.length).toBeGreaterThan(0);
      expect(entity.metadata.warnings.some(w => w.includes('lookat'))).toBe(true);
    });

    test('should parse v1.21.60 minimal entity', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/minimal_entity.json',
          content: loadTestFile('entities', 'v1_21_60', 'minimal_entity.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(1);

      const entity = parsed.entities[0];
      expect(entity.identifier).toBe('test:minimal_mob');
      expect(entity.metadata.sourceVersion).toBe('1.21.60');
      expect(entity.metadata.upgradePath).toEqual(['1.21.60']); // 无升级
    });

    test('should parse v1.21.60 complete entity with all components', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/complete_entity.json',
          content: loadTestFile('entities', 'v1_21_60', 'complete_entity.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(1);

      const entity = parsed.entities[0];
      expect(entity.identifier).toBe('test:complete_mob');
      expect(entity.displayName).toBe('Complete Test Mob');
      expect(entity.maxHealth).toBe(20);
      expect(entity.collisionBox).toBeDefined();
      expect(entity.collisionBox.width).toBe(0.6);
      expect(entity.collisionBox.height).toBe(1.8);
      expect(entity.movementSpeed).toBe(0.25);
      expect(entity.attackDamage).toBe(3.0);
      expect(entity.families).toContain('mob');
      expect(entity.families).toContain('monster');
      expect(entity.metadata.sourceVersion).toBe('1.21.60');
    });

    test('should parse v1.21.60 entity with component_groups and events', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/entity_with_groups_events.json',
          content: loadTestFile('entities', 'v1_21_60', 'entity_with_groups_events.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(1);

      const entity = parsed.entities[0];
      expect(entity.identifier).toBe('test:transforming_mob');

      // 验证 component_groups 被保留
      expect(entity.componentGroups).toBeDefined();
      expect(entity.componentGroups['test:adult_group']).toBeDefined();
      expect(entity.componentGroups['test:baby_group']).toBeDefined();

      // 验证 events 被保留
      expect(entity.events).toBeDefined();
      expect(entity.events['test:grow_up']).toBeDefined();
      expect(entity.events['test:become_angry']).toBeDefined();

      expect(entity.metadata.sourceVersion).toBe('1.21.60');
    });

    test('should parse multiple entities from different versions', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/v1_19_40_entity.json',
          content: loadTestFile('entities', 'v1_19_40', 'simple_entity.json')
        },
        {
          path: 'entities/v1_19_50_entity.json',
          content: loadTestFile('entities', 'v1_19_50', 'entity_with_properties.json')
        },
        {
          path: 'entities/v1_21_60_entity.json',
          content: loadTestFile('entities', 'v1_21_60', 'simple_entity.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(3);
      expect(parsed.metadata.totalFiles).toBe(3);

      // 验证所有 Entity 都成功解析
      expect(parsed.entities.every(e => e.identifier)).toBe(true);
    });

    test('should handle entity parse errors gracefully', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/valid_entity.json',
          content: loadTestFile('entities', 'v1_21_60', 'simple_entity.json')
        },
        {
          path: 'entities/invalid_entity.json',
          content: 'invalid json'
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      // 有效的 Entity 应该成功解析
      expect(parsed.entities.length).toBe(1);
      expect(parsed.entities[0].identifier).toBe('test:latest_mob');

      // 无效的文件应该生成警告
      expect(parsed.metadata.warnings.length).toBeGreaterThan(0);
      expect(parsed.metadata.warnings.some(w => w.includes('invalid_entity.json'))).toBe(true);
    });
  });

  describe('混合 Addon 测试 (Block + Item + Entity)', () => {
    test('should parse addon with both blocks and items', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        },
        {
          path: 'items/simple_item.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        },
        {
          path: 'blocks/complex_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'complex_block.json')
        },
        {
          path: 'items/complex_item.json',
          content: loadTestFile('items', 'v1_19_0', 'complex_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(2);
      expect(parsed.items.length).toBe(2);
      expect(parsed.metadata.totalFiles).toBe(4);

      // 验证 Block
      expect(parsed.blocks.some(b => b.identifier === 'mypack:simple_stone')).toBe(true);
      expect(parsed.blocks.some(b => b.identifier === 'mypack:glowing_block')).toBe(true);

      // 验证 Item
      expect(parsed.items.some(i => i.identifier === 'mypack:simple_sword')).toBe(true);
      expect(parsed.items.some(i => i.identifier === 'mypack:golden_apple')).toBe(true);
    });

    test('should parse addon with blocks, items, and entities', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        },
        {
          path: 'items/simple_item.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        },
        {
          path: 'entities/simple_entity.json',
          content: loadTestFile('entities', 'v1_19_40', 'simple_entity.json')
        },
        {
          path: 'entities/complete_entity.json',
          content: loadTestFile('entities', 'v1_21_60', 'complete_entity.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(1);
      expect(parsed.items.length).toBe(1);
      expect(parsed.entities.length).toBe(2);
      expect(parsed.metadata.totalFiles).toBe(4);

      // 验证 Block
      expect(parsed.blocks[0].identifier).toBe('mypack:simple_stone');

      // 验证 Item
      expect(parsed.items[0].identifier).toBe('mypack:simple_sword');

      // 验证 Entity
      expect(parsed.entities.some(e => e.identifier === 'test:simple_mob')).toBe(true);
      expect(parsed.entities.some(e => e.identifier === 'test:complete_mob')).toBe(true);
    });
  });

  describe('文件类型识别', () => {
    test('should detect block files', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/test.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        },
        {
          path: 'behavior_packs/test_pack/blocks/test.json',
          content: loadTestFile('blocks', 'v1_19_40', 'simple_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(2);
    });

    test('should detect item files', () => {
      const files: JsonFile[] = [
        {
          path: 'items/test.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        },
        {
          path: 'behavior_packs/test_pack/items/test.json',
          content: loadTestFile('items', 'v1_19_0', 'simple_item.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.items.length).toBe(2);
    });

    test('should detect entity files', () => {
      const files: JsonFile[] = [
        {
          path: 'entities/test.json',
          content: loadTestFile('entities', 'v1_21_60', 'simple_entity.json')
        },
        {
          path: 'behavior_packs/test_pack/entities/test.json',
          content: loadTestFile('entities', 'v1_21_60', 'simple_entity.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.entities.length).toBe(2);
    });

    test('should skip unknown file types', () => {
      const files: JsonFile[] = [
        {
          path: 'unknown/test.json',
          content: '{"test": "data"}'
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(0);
      expect(parsed.items.length).toBe(0);
      expect(parsed.entities.length).toBe(0);
      expect(parsed.metadata.warnings.some(w => w.includes('Unknown file type'))).toBe(true);
    });
  });

  describe('警告汇总', () => {
    test('should aggregate upgrade warnings from all blocks', () => {
      const files: JsonFile[] = [
        {
          path: 'blocks/complex_block1.json',
          content: loadTestFile('blocks', 'v1_19_40', 'complex_block.json')
        },
        {
          path: 'blocks/complex_block2.json',
          content: loadTestFile('blocks', 'v1_19_50', 'complex_block.json')
        }
      ];

      const result = parseAddon(JSON.stringify(files));
      const parsed = JSON.parse(result);

      expect(parsed.blocks.length).toBe(2);

      // 每个 Block 都应该有自己的警告
      expect(parsed.blocks[0].metadata.warnings.length).toBeGreaterThan(0);
      expect(parsed.blocks[1].metadata.warnings.length).toBeGreaterThan(0);

      // 顶层元数据应该汇总所有警告
      expect(parsed.metadata.warnings.length).toBeGreaterThan(0);
    });
  });

  describe('性能测试', () => {
    test('should parse 10 blocks in less than 100ms', () => {
      const content = loadTestFile('blocks', 'v1_19_40', 'simple_block.json');
      const files: JsonFile[] = Array.from({ length: 10 }, (_, i) => ({
        path: `blocks/block_${i}.json`,
        content
      }));

      const start = Date.now();
      const result = parseAddon(JSON.stringify(files));
      const duration = Date.now() - start;

      const parsed = JSON.parse(result);
      expect(parsed.blocks.length).toBe(10);
      expect(duration).toBeLessThan(100);
    });

    test('should parse 10 items in less than 100ms', () => {
      const content = loadTestFile('items', 'v1_20_81', 'simple_item.json');
      const files: JsonFile[] = Array.from({ length: 10 }, (_, i) => ({
        path: `items/item_${i}.json`,
        content
      }));

      const start = Date.now();
      const result = parseAddon(JSON.stringify(files));
      const duration = Date.now() - start;

      const parsed = JSON.parse(result);
      expect(parsed.items.length).toBe(10);
      expect(duration).toBeLessThan(100);
    });

    test('should parse 10 entities in less than 100ms', () => {
      const content = loadTestFile('entities', 'v1_21_60', 'simple_entity.json');
      const files: JsonFile[] = Array.from({ length: 10 }, (_, i) => ({
        path: `entities/entity_${i}.json`,
        content
      }));

      const start = Date.now();
      const result = parseAddon(JSON.stringify(files));
      const duration = Date.now() - start;

      const parsed = JSON.parse(result);
      expect(parsed.entities.length).toBe(10);
      expect(duration).toBeLessThan(100);
    });

    test('should parse 10 blocks + 10 items in less than 200ms', () => {
      const blockContent = loadTestFile('blocks', 'v1_19_40', 'simple_block.json');
      const itemContent = loadTestFile('items', 'v1_20_81', 'simple_item.json');

      const files: JsonFile[] = [
        ...Array.from({ length: 10 }, (_, i) => ({
          path: `blocks/block_${i}.json`,
          content: blockContent
        })),
        ...Array.from({ length: 10 }, (_, i) => ({
          path: `items/item_${i}.json`,
          content: itemContent
        }))
      ];

      const start = Date.now();
      const result = parseAddon(JSON.stringify(files));
      const duration = Date.now() - start;

      const parsed = JSON.parse(result);
      expect(parsed.blocks.length).toBe(10);
      expect(parsed.items.length).toBe(10);
      expect(parsed.metadata.totalFiles).toBe(20);
      expect(duration).toBeLessThan(200);
    });

    test('should parse 10 blocks + 10 items + 10 entities in less than 300ms', () => {
      const blockContent = loadTestFile('blocks', 'v1_19_40', 'simple_block.json');
      const itemContent = loadTestFile('items', 'v1_20_81', 'simple_item.json');
      const entityContent = loadTestFile('entities', 'v1_21_60', 'simple_entity.json');

      const files: JsonFile[] = [
        ...Array.from({ length: 10 }, (_, i) => ({
          path: `blocks/block_${i}.json`,
          content: blockContent
        })),
        ...Array.from({ length: 10 }, (_, i) => ({
          path: `items/item_${i}.json`,
          content: itemContent
        })),
        ...Array.from({ length: 10 }, (_, i) => ({
          path: `entities/entity_${i}.json`,
          content: entityContent
        }))
      ];

      const start = Date.now();
      const result = parseAddon(JSON.stringify(files));
      const duration = Date.now() - start;

      const parsed = JSON.parse(result);
      expect(parsed.blocks.length).toBe(10);
      expect(parsed.items.length).toBe(10);
      expect(parsed.entities.length).toBe(10);
      expect(parsed.metadata.totalFiles).toBe(30);
      expect(duration).toBeLessThan(300);
    });
  });
});
