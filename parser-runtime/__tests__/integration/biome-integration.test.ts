/**
 * Biome 集成测试
 *
 * 测试完整的 Biome 解析流程：Parse → Upgrade → Convert
 */

import { BiomeParser } from '../../src/typescript/parser/BiomeParser';
import { BiomeUpgrader } from '../../src/typescript/upgrader/BiomeUpgrader';
import { BiomeConverter } from '../../src/typescript/converter/BiomeConverter';
import { AddonParser } from '../../src/typescript/parser/AddonParser';
import * as fs from 'fs';
import * as path from 'path';

describe('Biome Integration Tests', () => {
  /**
   * 辅助函数：加载测试文件
   */
  function loadTestFile(filename: string): string {
    const filePath = path.join(__dirname, '..', 'resources', 'biomes', 'v1_21_60', filename);
    return fs.readFileSync(filePath, 'utf-8');
  }

  describe('Full Pipeline: Parse → Upgrade → Convert', () => {
    test('should complete full pipeline for stony_peaks biome', () => {
      const fileContent = loadTestFile('stony_peaks.biome.json');
      const filePath = 'biomes/stony_peaks.biome.json';

      // 1. Parse
      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);

      expect(parsed.identifier).toBe('minecraft:stony_peaks');
      expect(parsed.version).toBeDefined();

      // 2. Upgrade (使用非严格模式允许版本推断)
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version, false);

      // 测试文件版本可能不在支持列表中，但升级后应该有format_version
      expect(upgraded.data.format_version).toBeDefined();
      expect(upgraded.upgradePath.length).toBeGreaterThan(0);

      // 3. Convert
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      expect(standardBiomes.length).toBe(1);
      expect(standardBiomes[0]!.identifier).toBe('minecraft:stony_peaks');
      expect(standardBiomes[0]!.metadata.sourceFile).toBe(filePath);
    });

    test('should extract climate properties', () => {
      const fileContent = loadTestFile('stony_peaks.biome.json');
      const filePath = 'biomes/stony_peaks.biome.json';

      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      const biome = standardBiomes[0]!;
      expect(biome.temperature).toBeDefined();
      expect(biome.downfall).toBeDefined();
    });

    test('should extract tags', () => {
      const fileContent = loadTestFile('stony_peaks.biome.json');
      const filePath = 'biomes/stony_peaks.biome.json';

      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      const biome = standardBiomes[0]!;
      expect(biome.tags).toBeDefined();
      expect(Array.isArray(biome.tags)).toBe(true);
      expect(biome.tags!.length).toBeGreaterThan(0);
    });

    test('should extract surface builder', () => {
      const fileContent = loadTestFile('stony_peaks.biome.json');
      const filePath = 'biomes/stony_peaks.biome.json';

      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      const biome = standardBiomes[0]!;
      expect(biome.surfaceBuilder).toBeDefined();
      expect(biome.surfaceBuilder?.type).toBeDefined();
    });

    test('should extract mountain parameters', () => {
      const fileContent = loadTestFile('stony_peaks.biome.json');
      const filePath = 'biomes/stony_peaks.biome.json';

      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      const biome = standardBiomes[0]!;
      expect(biome.mountainParameters).toBeDefined();
      expect(biome.mountainParameters?.steepMaterialAdjustment).toBeDefined();
    });
  });

  describe('AddonParser Integration', () => {
    test('should parse biome through AddonParser', () => {
      const fileContent = loadTestFile('plains.biome.json');

      const addonParser = new AddonParser();
      const result = addonParser.parse([
        { path: 'biomes/plains.biome.json', content: fileContent }
      ]);

      expect(result.biomes.length).toBe(1);
      expect(result.biomes[0]!.identifier).toBe('minecraft:plains');
    });

    test('should parse multiple biomes through AddonParser', () => {
      const plainsContent = loadTestFile('plains.biome.json');
      const desertContent = loadTestFile('desert.biome.json');

      const addonParser = new AddonParser();
      const result = addonParser.parse([
        { path: 'biomes/plains.biome.json', content: plainsContent },
        { path: 'biomes/desert.biome.json', content: desertContent }
      ]);

      expect(result.biomes.length).toBe(2);
      const identifiers = result.biomes.map(b => b.identifier);
      expect(identifiers).toContain('minecraft:plains');
      expect(identifiers).toContain('minecraft:desert');
    });

    test('should handle mixed addon with blocks, items, entities, and biomes', () => {
      const biomeContent = loadTestFile('plains.biome.json');

      const addonParser = new AddonParser();
      const result = addonParser.parse([
        { path: 'biomes/plains.biome.json', content: biomeContent }
      ]);

      expect(result.blocks.length).toBe(0);
      expect(result.items.length).toBe(0);
      expect(result.entities.length).toBe(0);
      expect(result.biomes.length).toBe(1);
    });
  });

  describe('Metadata', () => {
    test('should include upgrade path in metadata', () => {
      const fileContent = loadTestFile('plains.biome.json');
      const filePath = 'biomes/plains.biome.json';

      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      const biome = standardBiomes[0]!;
      expect(biome.metadata.sourceVersion).toBeDefined();
      expect(biome.metadata.upgradePath).toEqual(upgraded.upgradePath);
      expect(biome.metadata.sourceFile).toBe(filePath);
    });

    test('should preserve components in metadata', () => {
      const fileContent = loadTestFile('stony_peaks.biome.json');
      const filePath = 'biomes/stony_peaks.biome.json';

      const parser = new BiomeParser();
      const parsed = parser.parseBiome(fileContent, filePath);
      const upgraded = BiomeUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standardBiomes = BiomeConverter.convertToStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: filePath
      });

      const biome = standardBiomes[0]!;
      expect(biome.components).toBeDefined();
      expect(Object.keys(biome.components!).length).toBeGreaterThan(0);
    });
  });

  describe('Error Handling', () => {
    test('should handle malformed JSON gracefully', () => {
      const addonParser = new AddonParser();
      const result = addonParser.parse([
        { path: 'biomes/invalid.biome.json', content: '{invalid json' }
      ]);

      expect(result.biomes.length).toBe(0);
      expect(result.metadata.warnings.length).toBeGreaterThan(0);
    });

    test('should handle missing identifier', () => {
      const invalidBiome = JSON.stringify({
        format_version: '1.21.120',
        'minecraft:biome': {
          description: {},
          components: {}
        }
      });

      const addonParser = new AddonParser();
      const result = addonParser.parse([
        { path: 'biomes/no-identifier.biome.json', content: invalidBiome }
      ]);

      expect(result.biomes.length).toBe(0);
      expect(result.metadata.warnings.length).toBeGreaterThan(0);
    });
  });
});
