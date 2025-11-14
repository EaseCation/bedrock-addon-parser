/**
 * BlockParser 单元测试
 */

import { BlockParser } from '../../../main/typescript/parser/BlockParser';
import * as fs from 'fs';
import * as path from 'path';

describe('BlockParser', () => {
  let parser: BlockParser;

  beforeEach(() => {
    parser = new BlockParser();
  });

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

  describe('extractVersion', () => {
    test('should extract format_version from valid JSON', () => {
      const json = '{"format_version": "1.19.40"}';
      expect(parser.extractVersion(json)).toBe('1.19.40');
    });

    test('should return default version when format_version is missing', () => {
      const json = '{}';
      expect(parser.extractVersion(json)).toBe('1.16.100');
    });

    test('should return default version when JSON is invalid', () => {
      const json = 'invalid json';
      expect(parser.extractVersion(json)).toBe('1.16.100');
    });
  });

  describe('parseBlock', () => {
    test('should parse simple v1.19.40 block', () => {
      const json = loadTestFile('v1_19_40', 'simple_block.json');
      const result = parser.parseBlock(json, 'blocks/simple_block.json');

      expect(result.version).toBe('1.19.40');
      expect(result.identifier).toBe('mypack:simple_stone');
      expect(result.filePath).toBe('blocks/simple_block.json');
      expect(result.data['minecraft:block']).toBeDefined();
    });

    test('should parse complex v1.19.40 block with permutations', () => {
      const json = loadTestFile('v1_19_40', 'complex_block.json');
      const result = parser.parseBlock(json, 'blocks/complex_block.json');

      expect(result.version).toBe('1.19.40');
      expect(result.identifier).toBe('mypack:glowing_block');
      expect(result.data['minecraft:block'].permutations).toBeDefined();
      expect(result.data['minecraft:block'].permutations.length).toBe(1);
    });

    test('should parse simple v1.19.50 block', () => {
      const json = loadTestFile('v1_19_50', 'simple_block.json');
      const result = parser.parseBlock(json, 'blocks/simple_block.json');

      expect(result.version).toBe('1.19.50');
      expect(result.identifier).toBe('mypack:simple_stone');
    });

    test('should parse complex v1.19.50 block with events', () => {
      const json = loadTestFile('v1_19_50', 'complex_block.json');
      const result = parser.parseBlock(json, 'blocks/complex_block.json');

      expect(result.version).toBe('1.19.50');
      expect(result.identifier).toBe('mypack:complex_lamp');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:collision_box']).toBeDefined();
      expect(components['minecraft:selection_box']).toBeDefined();
      expect(components['minecraft:on_interact']).toBeDefined();
    });

    test('should parse edge case block', () => {
      const json = loadTestFile('v1_19_50', 'edge_case.json');
      const result = parser.parseBlock(json, 'blocks/edge_case.json');

      expect(result.version).toBe('1.19.50');
      expect(result.identifier).toBe('mypack:edge_case');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:friction']).toEqual({ value: 0.8 });
      expect(components['minecraft:collision_box']).toBe(true);
    });

    test('should parse v1.21.60 block with custom components', () => {
      const json = loadTestFile('v1_21_60', 'complex_block.json');
      const result = parser.parseBlock(json, 'blocks/complex_block.json');

      expect(result.version).toBe('1.21.60');
      expect(result.identifier).toBe('mypack:advanced_lamp');

      const components = result.data['minecraft:block'].components;
      expect(components['minecraft:custom_components']).toBeDefined();
      expect(components['minecraft:custom_components'].length).toBe(2);
    });

    test('should parse minimal v1.21.60 block', () => {
      const json = loadTestFile('v1_21_60', 'edge_case.json');
      const result = parser.parseBlock(json, 'blocks/edge_case.json');

      expect(result.version).toBe('1.21.60');
      expect(result.identifier).toBe('mypack:minimal_block');

      const components = result.data['minecraft:block'].components;
      expect(Object.keys(components).length).toBe(0);
    });

    test('should throw error when minecraft:block is missing', () => {
      const json = '{"format_version": "1.19.40"}';

      expect(() => {
        parser.parseBlock(json, 'blocks/invalid.json');
      }).toThrow('Missing required field: minecraft:block');
    });

    test('should throw error when identifier is missing', () => {
      const json = `{
        "format_version": "1.19.40",
        "minecraft:block": {
          "description": {}
        }
      }`;

      expect(() => {
        parser.parseBlock(json, 'blocks/invalid.json');
      }).toThrow('Missing required field: minecraft:block.description.identifier');
    });

    test('should throw error when JSON is invalid', () => {
      const json = 'invalid json';

      expect(() => {
        parser.parseBlock(json, 'blocks/invalid.json');
      }).toThrow('Failed to parse block from blocks/invalid.json');
    });
  });

  describe('parseBlocks', () => {
    test('should parse multiple blocks successfully', () => {
      const files = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('v1_19_40', 'simple_block.json')
        },
        {
          path: 'blocks/complex_block.json',
          content: loadTestFile('v1_19_50', 'complex_block.json')
        },
        {
          path: 'blocks/advanced_block.json',
          content: loadTestFile('v1_21_60', 'simple_block.json')
        }
      ];

      const results = parser.parseBlocks(files);

      expect(results.length).toBe(3);
      expect(results[0].identifier).toBe('mypack:simple_stone');
      expect(results[1].identifier).toBe('mypack:complex_lamp');
      expect(results[2].identifier).toBe('mypack:simple_stone');
    });

    test('should skip invalid files and continue parsing', () => {
      const files = [
        {
          path: 'blocks/simple_block.json',
          content: loadTestFile('v1_19_40', 'simple_block.json')
        },
        {
          path: 'blocks/invalid.json',
          content: 'invalid json'
        },
        {
          path: 'blocks/complex_block.json',
          content: loadTestFile('v1_19_50', 'complex_block.json')
        }
      ];

      const results = parser.parseBlocks(files);

      // 应该成功解析 2 个文件，跳过 1 个无效文件
      expect(results.length).toBe(2);
      expect(results[0].identifier).toBe('mypack:simple_stone');
      expect(results[1].identifier).toBe('mypack:complex_lamp');
    });

    test('should return empty array when all files are invalid', () => {
      const files = [
        {
          path: 'blocks/invalid1.json',
          content: 'invalid json 1'
        },
        {
          path: 'blocks/invalid2.json',
          content: '{"format_version": "1.19.40"}'
        }
      ];

      const results = parser.parseBlocks(files);

      expect(results.length).toBe(0);
    });

    test('should handle empty file list', () => {
      const files: Array<{ path: string; content: string }> = [];
      const results = parser.parseBlocks(files);

      expect(results.length).toBe(0);
    });
  });

  describe('performance', () => {
    test('should parse single file in less than 10ms', () => {
      const json = loadTestFile('v1_19_50', 'complex_block.json');

      const start = Date.now();
      parser.parseBlock(json, 'blocks/complex_block.json');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });

    test('should parse 10 files in less than 50ms', () => {
      const json = loadTestFile('v1_19_50', 'complex_block.json');
      const files = Array.from({ length: 10 }, (_, i) => ({
        path: `blocks/block_${i}.json`,
        content: json
      }));

      const start = Date.now();
      parser.parseBlocks(files);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(50);
    });
  });
});
