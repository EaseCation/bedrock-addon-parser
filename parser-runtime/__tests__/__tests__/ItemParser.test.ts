/**
 * ItemParser 单元测试
 */

import { ItemParser } from '../../../main/typescript/parser/ItemParser';
import * as fs from 'fs';
import * as path from 'path';

describe('ItemParser', () => {
  let parser: ItemParser;

  beforeEach(() => {
    parser = new ItemParser();
  });

  /**
   * 辅助函数：读取测试文件
   */
  function loadTestFile(version: string, filename: string): string {
    const filePath = path.join(
      __dirname,
      '../../resources/items',
      version,
      filename
    );
    return fs.readFileSync(filePath, 'utf-8');
  }

  describe('extractVersion', () => {
    test('should extract format_version from valid JSON', () => {
      const json = '{"format_version": "1.19.40"}';
      expect(parser.extractVersion(json)).toBe('1.19.40');
    });

    test('should return default version when format_version is missing', () => {
      const json = '{}';
      expect(parser.extractVersion(json)).toBe('1.10.0');
    });

    test('should return default version when JSON is invalid', () => {
      const json = 'invalid json';
      expect(parser.extractVersion(json)).toBe('1.10.0');
    });
  });

  describe('parseItem', () => {
    test('should parse simple v1.19.0 item', () => {
      const json = loadTestFile('v1_19_0', 'simple_item.json');
      const result = parser.parseItem(json, 'items/simple_item.json');

      expect(result.version).toBe('1.19.0');
      expect(result.identifier).toBe('mypack:simple_sword');
      expect(result.filePath).toBe('items/simple_item.json');
      expect(result.data['minecraft:item']).toBeDefined();
    });

    test('should parse complex v1.19.0 item with food component', () => {
      const json = loadTestFile('v1_19_0', 'complex_item.json');
      const result = parser.parseItem(json, 'items/complex_item.json');

      expect(result.version).toBe('1.19.0');
      expect(result.identifier).toBe('mypack:golden_apple');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:food']).toBeDefined();
      expect(components['minecraft:food'].nutrition).toBe(4);
      expect(components['minecraft:cooldown']).toBeDefined();
    });

    test('should parse v1.19.40 item with foil component', () => {
      const json = loadTestFile('v1_19_40', 'simple_item.json');
      const result = parser.parseItem(json, 'items/simple_item.json');

      expect(result.version).toBe('1.19.40');
      expect(result.identifier).toBe('mypack:enchanted_sword');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:foil']).toBe(true);
      expect(components['minecraft:max_damage']).toBe(1000);
    });

    test('should parse v1.20.10 item with menu_category', () => {
      const json = loadTestFile('v1_20_10', 'simple_item.json');
      const result = parser.parseItem(json, 'items/simple_item.json');

      expect(result.version).toBe('1.20.10');
      expect(result.identifier).toBe('mypack:diamond_pickaxe');

      const description = result.data['minecraft:item'].description;
      expect(description.menu_category).toBeDefined();
      expect(description.menu_category.category).toBe('equipment');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:digger']).toBeDefined();
    });

    test('should parse v1.20.81 item with new component format', () => {
      const json = loadTestFile('v1_20_81', 'simple_item.json');
      const result = parser.parseItem(json, 'items/simple_item.json');

      expect(result.version).toBe('1.20.81');
      expect(result.identifier).toBe('mypack:netherite_sword');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:glint']).toEqual({ value: true });
      expect(components['minecraft:durability']).toBeDefined();
      expect(components['minecraft:durability'].max_durability).toBe(2031);
      expect(components['minecraft:damage']).toEqual({ value: 8 });
      expect(components['minecraft:enchantable']).toBeDefined();
    });

    test('should parse v1.21.60 item with compostable component', () => {
      const json = loadTestFile('v1_21_60', 'simple_item.json');
      const result = parser.parseItem(json, 'items/simple_item.json');

      expect(result.version).toBe('1.21.60');
      expect(result.identifier).toBe('mypack:organic_food');

      const components = result.data['minecraft:item'].components;
      expect(components['minecraft:compostable']).toBeDefined();
      expect(components['minecraft:compostable'].compost_chance).toBe(0.65);
      expect(components['minecraft:food']).toBeDefined();
      expect(components['minecraft:rarity']).toEqual({ value: 'uncommon' });
    });

    test('should throw error when minecraft:item is missing', () => {
      const json = '{"format_version": "1.19.40"}';

      expect(() => {
        parser.parseItem(json, 'items/invalid.json');
      }).toThrow('Missing required field: minecraft:item');
    });

    test('should throw error when identifier is missing', () => {
      const json = `{
        "format_version": "1.19.40",
        "minecraft:item": {
          "description": {}
        }
      }`;

      expect(() => {
        parser.parseItem(json, 'items/invalid.json');
      }).toThrow('Missing required field: minecraft:item.description.identifier');
    });

    test('should throw error when JSON is invalid', () => {
      const json = 'invalid json';

      expect(() => {
        parser.parseItem(json, 'items/invalid.json');
      }).toThrow('Failed to parse item from items/invalid.json');
    });
  });

  describe('parseItems', () => {
    test('should parse multiple items successfully', () => {
      const files = [
        {
          path: 'items/simple_item.json',
          content: loadTestFile('v1_19_0', 'simple_item.json')
        },
        {
          path: 'items/complex_item.json',
          content: loadTestFile('v1_19_0', 'complex_item.json')
        },
        {
          path: 'items/netherite_sword.json',
          content: loadTestFile('v1_20_81', 'simple_item.json')
        }
      ];

      const results = parser.parseItems(files);

      expect(results.length).toBe(3);
      expect(results[0].identifier).toBe('mypack:simple_sword');
      expect(results[1].identifier).toBe('mypack:golden_apple');
      expect(results[2].identifier).toBe('mypack:netherite_sword');
    });

    test('should skip invalid files and continue parsing', () => {
      const files = [
        {
          path: 'items/simple_item.json',
          content: loadTestFile('v1_19_0', 'simple_item.json')
        },
        {
          path: 'items/invalid.json',
          content: 'invalid json'
        },
        {
          path: 'items/complex_item.json',
          content: loadTestFile('v1_19_0', 'complex_item.json')
        }
      ];

      const results = parser.parseItems(files);

      // 应该成功解析 2 个文件，跳过 1 个无效文件
      expect(results.length).toBe(2);
      expect(results[0].identifier).toBe('mypack:simple_sword');
      expect(results[1].identifier).toBe('mypack:golden_apple');
    });

    test('should return empty array when all files are invalid', () => {
      const files = [
        {
          path: 'items/invalid1.json',
          content: 'invalid json 1'
        },
        {
          path: 'items/invalid2.json',
          content: '{"format_version": "1.19.40"}'
        }
      ];

      const results = parser.parseItems(files);

      expect(results.length).toBe(0);
    });

    test('should handle empty file list', () => {
      const files: Array<{ path: string; content: string }> = [];
      const results = parser.parseItems(files);

      expect(results.length).toBe(0);
    });
  });

  describe('performance', () => {
    test('should parse single file in less than 10ms', () => {
      const json = loadTestFile('v1_20_81', 'simple_item.json');

      const start = Date.now();
      parser.parseItem(json, 'items/netherite_sword.json');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });

    test('should parse 10 files in less than 50ms', () => {
      const json = loadTestFile('v1_20_81', 'simple_item.json');
      const files = Array.from({ length: 10 }, (_, i) => ({
        path: `items/item_${i}.json`,
        content: json
      }));

      const start = Date.now();
      parser.parseItems(files);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(50);
    });
  });
});
