/**
 * BiomeUpgrader 单元测试
 *
 * 测试 Biome 版本升级功能，包括：
 * - 字典结构（v1.19.0-v1.21.70）的升级
 * - 字典 → 包装器结构的转换（v1.21.70 → v1.21.80）
 * - 包装器结构（v1.21.80-v1.21.120）的升级
 * - 多 biome 拆分
 * - 废弃组件移除
 */

import { BiomeUpgrader } from '../src/typescript/upgrader/BiomeUpgrader';

describe('BiomeUpgrader', () => {
  describe('upgradeToLatest - 包装器结构', () => {
    test('should return immediately if already at latest version (v1.21.120)', () => {
      const data = {
        format_version: '1.21.120',
        'minecraft:biome': {
          description: {
            identifier: 'minecraft:plains'
          },
          components: {
            'minecraft:climate': {
              temperature: 0.8,
              downfall: 0.4
            }
          }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.120');

      expect(result.upgradePath).toEqual(['1.21.120']);
      expect(result.warnings.length).toBe(0);
      expect(Array.isArray(result.data)).toBe(false);
      expect((result.data as any).format_version).toBe('1.21.120');
    });

    test('should preserve biome identifier', () => {
      const data = {
        format_version: '1.21.80',
        'minecraft:biome': {
          description: {
            identifier: 'minecraft:stony_peaks'
          },
          components: {}
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.80');

      expect(Array.isArray(result.data)).toBe(false);
      expect((result.data as any)['minecraft:biome'].description.identifier).toBe('minecraft:stony_peaks');
    });

    test('should not modify original data (immutability)', () => {
      const data = {
        format_version: '1.21.80',
        'minecraft:biome': {
          description: { identifier: 'test:biome' },
          components: { 'minecraft:climate': { temperature: 1.0 } }
        }
      };

      const originalJson = JSON.stringify(data);
      BiomeUpgrader.upgradeToLatest(data, '1.21.80');

      expect(JSON.stringify(data)).toBe(originalJson);
    });
  });

  describe('upgradeToLatest - 字典结构升级', () => {
    test('should upgrade dictionary structure (v1.19.0) and convert to wrapper', () => {
      const data = {
        plains: {
          format_version: '1.19.0',
          'minecraft:climate': {
            temperature: 0.8,
            downfall: 0.4
          }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.19.0');

      // 应该升级到 v1.21.120（最新版本）并转换为包装器
      expect(result.upgradePath).toContain('1.19.0');
      expect(result.upgradePath).toContain('1.21.70');  // 字典的最后版本
      expect(result.upgradePath).toContain('1.21.80');  // 第一个包装器版本
      expect(result.upgradePath).toContain('1.21.120'); // 最新包装器版本

      // 结果应该是数组（字典拆分）
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data).toHaveLength(1);
    });

    test('should handle multiple biomes in dictionary', () => {
      const data = {
        plains: {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.8 }
        },
        desert: {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 2.0 }
        },
        forest: {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.7 }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      // 应该拆分为 3 个独立的 biome
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data).toHaveLength(3);

      // 每个 biome 都应该有包装器结构
      const biomes = result.data as any[];
      expect(biomes[0]['minecraft:biome'].description.identifier).toBe('plains');
      expect(biomes[1]['minecraft:biome'].description.identifier).toBe('desert');
      expect(biomes[2]['minecraft:biome'].description.identifier).toBe('forest');
    });

    test('should not modify original dictionary data (immutability)', () => {
      const data = {
        plains: {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      const originalJson = JSON.stringify(data);
      BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      expect(JSON.stringify(data)).toBe(originalJson);
    });
  });

  describe('dictionary to wrapper migration (v1.21.70 → v1.21.80)', () => {
    test('should convert biome name from dictionary key to identifier', () => {
      const data = {
        'minecraft:plains': {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      expect(Array.isArray(result.data)).toBe(true);
      const biome = (result.data as any[])[0];
      expect(biome['minecraft:biome'].description.identifier).toBe('minecraft:plains');
    });

    test('should remove deprecated component: consolidated_features', () => {
      const data = {
        plains: {
          format_version: '1.21.70',
          'minecraft:consolidated_features': {
            features: ['minecraft:feature_1']
          },
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      expect(Array.isArray(result.data)).toBe(true);
      const biome = (result.data as any[])[0];
      const components = biome['minecraft:biome'].components;

      expect(components['minecraft:consolidated_features']).toBeUndefined();
      expect(result.warnings).toContainEqual(
        expect.stringContaining('Removed deprecated component: consolidated_features')
      );
    });

    test('should remove deprecated component: legacy_world_generation_rules', () => {
      const data = {
        plains: {
          format_version: '1.21.70',
          'minecraft:legacy_world_generation_rules': {},
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      const biome = (result.data as any[])[0];
      const components = biome['minecraft:biome'].components;

      expect(components['minecraft:legacy_world_generation_rules']).toBeUndefined();
      expect(result.warnings).toContainEqual(
        expect.stringContaining('Removed deprecated component: legacy_world_generation_rules')
      );
    });

    test('should remove minecraft:mountain_parameters.peaks_factor', () => {
      const data = {
        mountains: {
          format_version: '1.21.70',
          'minecraft:mountain_parameters': {
            peaks_factor: 1.5,
            steep_material_adjustment: {
              material: 'minecraft:stone'
            }
          }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      const biome = (result.data as any[])[0];
      const mountainParams = biome['minecraft:biome'].components['minecraft:mountain_parameters'];

      expect(mountainParams.peaks_factor).toBeUndefined();
      expect(mountainParams.steep_material_adjustment).toBeDefined();
      expect(result.warnings).toContainEqual(
        expect.stringContaining('Removed minecraft:mountain_parameters.peaks_factor')
      );
    });

    test('should migrate custom tags to minecraft:tags.tags[]', () => {
      const data = {
        custom_biome: {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 1.0 },
          custom_tag_1: {},
          custom_tag_2: {},
          another_tag: {}
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      const biome = (result.data as any[])[0];
      const tags = biome['minecraft:biome'].components['minecraft:tags'];

      expect(tags).toBeDefined();
      expect(tags.tags).toContain('custom_tag_1');
      expect(tags.tags).toContain('custom_tag_2');
      expect(tags.tags).toContain('another_tag');
      expect(result.warnings).toContainEqual(
        expect.stringContaining('Migrated 3 custom tags to minecraft:tags.tags[]')
      );
    });

    test('should merge custom tags with existing minecraft:tags', () => {
      const data = {
        biome: {
          format_version: '1.21.70',
          'minecraft:tags': {
            tags: ['existing_tag']
          },
          custom_tag: {}
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      const biome = (result.data as any[])[0];
      const tags = biome['minecraft:biome'].components['minecraft:tags'];

      expect(tags.tags).toContain('existing_tag');
      expect(tags.tags).toContain('custom_tag');
      expect(tags.tags).toHaveLength(2);
    });

    test('should preserve all standard components during migration', () => {
      const data = {
        plains: {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.8, downfall: 0.4 },
          'minecraft:overworld_generation_rules': {
            generate_for_climates: [['medium', 10]]
          },
          'minecraft:surface_parameters': {
            top_material: 'minecraft:grass_block',
            mid_material: 'minecraft:dirt'
          }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      const biome = (result.data as any[])[0];
      const components = biome['minecraft:biome'].components;

      expect(components['minecraft:climate']).toBeDefined();
      expect(components['minecraft:overworld_generation_rules']).toBeDefined();
      expect(components['minecraft:surface_parameters']).toBeDefined();
    });
  });

  describe('version chain upgrade (dictionary)', () => {
    test('should upgrade through entire version chain from v1.19.0', () => {
      const data = {
        plains: {
          format_version: '1.19.0',
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.19.0');

      expect(result.upgradePath).toEqual([
        '1.19.0',
        '1.19.40',
        '1.19.50',
        '1.20.10',
        '1.20.41',
        '1.20.81',
        '1.21.50',
        '1.21.60',
        '1.21.70',  // 字典结构的最后版本
        '1.21.80',  // 包装器结构开始
        '1.21.90',
        '1.21.100',
        '1.21.110',
        '1.21.120'  // 最新版本
      ]);

      // 最终应该是包装器结构
      expect(Array.isArray(result.data)).toBe(true);
      const biome = (result.data as any[])[0];
      expect(biome.format_version).toBe('1.21.120');
      expect(biome['minecraft:biome']).toBeDefined();
    });

    test('should maintain components across version chain', () => {
      const data = {
        test_biome: {
          format_version: '1.19.0',
          'minecraft:climate': {
            temperature: 1.5,
            downfall: 0.3
          },
          'minecraft:overworld_height': {
            noise_type: 'default'
          }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.19.0');

      const biome = (result.data as any[])[0];
      const components = biome['minecraft:biome'].components;

      // 组件应该保留
      expect(components['minecraft:climate']).toEqual({
        temperature: 1.5,
        downfall: 0.3
      });
      expect(components['minecraft:overworld_height']).toBeDefined();
    });
  });

  describe('version inference', () => {
    test('should infer version for unsupported intermediate version', () => {
      const data = {
        plains: {
          format_version: '1.20.50',
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.20.50', false);

      expect(result.upgradePath[0]).toBe('1.20.50');
      expect(result.warnings.length).toBeGreaterThan(0);
      expect(result.warnings[0]).toContain('推断');
    });

    test('should throw error in strict mode for unsupported version', () => {
      const data = {
        plains: {
          format_version: '1.18.0',
          'minecraft:climate': { temperature: 0.8 }
        }
      };

      expect(() => {
        BiomeUpgrader.upgradeToLatest(data, '1.18.0', true);
      }).toThrow();
    });
  });

  describe('edge cases', () => {
    test('should handle biome with minimal components', () => {
      const data = {
        minimal: {
          format_version: '1.21.70'
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      expect(Array.isArray(result.data)).toBe(true);
      const biome = (result.data as any[])[0];
      expect(biome['minecraft:biome'].description.identifier).toBe('minimal');
      expect(biome['minecraft:biome'].components).toBeDefined();
    });

    test('should handle empty dictionary', () => {
      const data = {};

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data).toHaveLength(0);
    });

    test('should handle biome with only custom tags', () => {
      const data = {
        custom: {
          format_version: '1.21.70',
          tag_1: {},
          tag_2: {}
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      const biome = (result.data as any[])[0];
      const tags = biome['minecraft:biome'].components['minecraft:tags'];

      expect(tags.tags).toContain('tag_1');
      expect(tags.tags).toContain('tag_2');
    });
  });

  describe('multiple biomes with complex components', () => {
    test('should correctly process multiple biomes with different components', () => {
      const data = {
        'minecraft:plains': {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.8 },
          'minecraft:surface_parameters': {
            top_material: 'minecraft:grass_block'
          }
        },
        'minecraft:desert': {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 2.0 },
          'minecraft:surface_parameters': {
            top_material: 'minecraft:sand'
          }
        },
        'custom:forest': {
          format_version: '1.21.70',
          'minecraft:climate': { temperature: 0.7 },
          custom_tree_tag: {}
        }
      };

      const result = BiomeUpgrader.upgradeToLatest(data, '1.21.70');

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data).toHaveLength(3);

      const biomes = result.data as any[];

      // Plains
      expect(biomes[0]['minecraft:biome'].description.identifier).toBe('minecraft:plains');
      expect(biomes[0]['minecraft:biome'].components['minecraft:climate'].temperature).toBe(0.8);

      // Desert
      expect(biomes[1]['minecraft:biome'].description.identifier).toBe('minecraft:desert');
      expect(biomes[1]['minecraft:biome'].components['minecraft:climate'].temperature).toBe(2.0);

      // Custom forest with tag
      expect(biomes[2]['minecraft:biome'].description.identifier).toBe('custom:forest');
      expect(biomes[2]['minecraft:biome'].components['minecraft:tags'].tags).toContain('custom_tree_tag');
    });
  });
});
