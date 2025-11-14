/**
 * EntityParser 单元测试
 */

import { EntityParser } from '../../../main/typescript/parser/EntityParser';
import * as fs from 'fs';
import * as path from 'path';

describe('EntityParser', () => {
  let parser: EntityParser;

  beforeEach(() => {
    parser = new EntityParser();
  });

  /**
   * 辅助函数：读取测试文件
   */
  function loadTestFile(relativePath: string): string {
    const filePath = path.join(__dirname, '../../..', relativePath);
    return fs.readFileSync(filePath, 'utf-8');
  }

  /**
   * 辅助函数：读取 schema 测试文件
   */
  function loadSchemaTestFile(filename: string): string {
    const filePath = path.join(
      __dirname,
      '../../../../../schemas/minecraft-bedrock-json-schemas/test/files/correct/data_bp/entities',
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

  describe('parseEntity', () => {
    test('should parse dragon entity from schema test', () => {
      const json = loadSchemaTestFile('dragon.entity.bp.json');
      const result = parser.parseEntity(json, 'entities/dragon.entity.bp.json');

      expect(result.version).toBe('1.16.0');
      expect(result.identifier).toBe('blockception:dragon');
      expect(result.filePath).toBe('entities/dragon.entity.bp.json');
      expect(result.data['minecraft:entity']).toBeDefined();
    });

    test('should parse sheep entity from schema test', () => {
      const json = loadSchemaTestFile('sheep.entity.bp.json');
      const result = parser.parseEntity(json, 'entities/sheep.entity.bp.json');

      expect(result.version).toBe('1.16.0');
      expect(result.identifier).toBe('blockception:sheep');
      expect(result.filePath).toBe('entities/sheep.entity.bp.json');
      expect(result.data['minecraft:entity']).toBeDefined();
    });

    test('should parse entity with components', () => {
      const json = loadSchemaTestFile('dragon.entity.bp.json');
      const result = parser.parseEntity(json, 'entities/dragon.entity.bp.json');

      const entity = result.data['minecraft:entity'];
      expect(entity.components).toBeDefined();
      expect(entity.components['minecraft:health']).toBeDefined();
      expect(entity.components['minecraft:health'].value).toBe(10);
    });

    test('should parse entity with component_groups and events', () => {
      const json = loadSchemaTestFile('sheep.entity.bp.json');
      const result = parser.parseEntity(json, 'entities/sheep.entity.bp.json');

      const entity = result.data['minecraft:entity'];
      expect(entity.component_groups).toBeDefined();
      expect(entity.events).toBeDefined();
    });

    test('should use default version when format_version is missing', () => {
      const json = loadTestFile('test/resources/entities/invalid/no_version.json');
      const result = parser.parseEntity(json, 'entities/no_version.json');

      expect(result.version).toBe('1.16.100');
      expect(result.identifier).toBe('test:no_version_entity');
    });

    test('should throw error when minecraft:entity is missing', () => {
      const json = loadTestFile('test/resources/entities/invalid/missing_entity.json');

      expect(() => {
        parser.parseEntity(json, 'entities/missing_entity.json');
      }).toThrow('Missing required field: minecraft:entity');
    });

    test('should throw error when identifier is missing', () => {
      const json = loadTestFile('test/resources/entities/invalid/missing_identifier.json');

      expect(() => {
        parser.parseEntity(json, 'entities/missing_identifier.json');
      }).toThrow('Missing required field: minecraft:entity.description.identifier');
    });

    test('should throw error when JSON is invalid', () => {
      const json = 'invalid json';

      expect(() => {
        parser.parseEntity(json, 'entities/invalid.json');
      }).toThrow('Failed to parse entity from entities/invalid.json');
    });
  });

  describe('parseEntities', () => {
    test('should parse multiple entities successfully', () => {
      const files = [
        {
          path: 'entities/dragon.entity.bp.json',
          content: loadSchemaTestFile('dragon.entity.bp.json')
        },
        {
          path: 'entities/sheep.entity.bp.json',
          content: loadSchemaTestFile('sheep.entity.bp.json')
        }
      ];

      const results = parser.parseEntities(files);

      expect(results.length).toBe(2);
      expect(results[0].identifier).toBe('blockception:dragon');
      expect(results[1].identifier).toBe('blockception:sheep');
    });

    test('should skip invalid files and continue parsing', () => {
      const files = [
        {
          path: 'entities/dragon.entity.bp.json',
          content: loadSchemaTestFile('dragon.entity.bp.json')
        },
        {
          path: 'entities/invalid.json',
          content: 'invalid json'
        },
        {
          path: 'entities/sheep.entity.bp.json',
          content: loadSchemaTestFile('sheep.entity.bp.json')
        }
      ];

      const results = parser.parseEntities(files);

      // 应该成功解析 2 个文件，跳过 1 个无效文件
      expect(results.length).toBe(2);
      expect(results[0].identifier).toBe('blockception:dragon');
      expect(results[1].identifier).toBe('blockception:sheep');
    });

    test('should return empty array when all files are invalid', () => {
      const files = [
        {
          path: 'entities/invalid1.json',
          content: 'invalid json 1'
        },
        {
          path: 'entities/invalid2.json',
          content: loadTestFile('test/resources/entities/invalid/missing_entity.json')
        }
      ];

      const results = parser.parseEntities(files);

      expect(results.length).toBe(0);
    });

    test('should handle empty file list', () => {
      const files: Array<{ path: string; content: string }> = [];
      const results = parser.parseEntities(files);

      expect(results.length).toBe(0);
    });
  });

  describe('performance', () => {
    test('should parse single file in less than 10ms', () => {
      const json = loadSchemaTestFile('dragon.entity.bp.json');

      const start = Date.now();
      parser.parseEntity(json, 'entities/dragon.entity.bp.json');
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });

    test('should parse 10 files in less than 100ms', () => {
      const json = loadSchemaTestFile('dragon.entity.bp.json');
      const files = Array.from({ length: 10 }, (_, i) => ({
        path: `entities/entity_${i}.json`,
        content: json
      }));

      const start = Date.now();
      parser.parseEntities(files);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(100);
    });
  });
});
