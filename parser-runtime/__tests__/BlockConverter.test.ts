/**
 * BlockConverter 单元测试
 */

import { BlockConverter } from '../src/typescript/converter/BlockConverter';
import type { StandardBlock } from '../src/typescript/index';

describe('BlockConverter', () => {
  /**
   * 辅助函数：创建测试元数据
   */
  function createMetadata() {
    return {
      sourceVersion: '1.19.40',
      upgradePath: ['1.19.40', '1.19.50', '1.21.60'],
      warnings: [],
      sourceFile: 'blocks/test_block.json'
    };
  }

  describe('convertToStandard', () => {
    test('should convert simple block correctly', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:simple_block'
          },
          components: {
            'minecraft:friction': 0.6,
            'minecraft:light_dampening': 15
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result.length).toBe(1);
      const block = result[0];
      expect(block.identifier).toBe('mypack:simple_block');
      expect(block.friction).toBe(0.6);
      expect(block.lightDampening).toBe(15);
      expect(block.metadata.sourceVersion).toBe('1.19.40');
    });

    test('should extract hardness from destructible_by_mining', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:hard_block'
          },
          components: {
            'minecraft:destructible_by_mining': {
              seconds_to_destroy: 5.0
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].hardness).toBe(5.0);
    });

    test('should return undefined hardness when destructible_by_mining is boolean', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:test_block'
          },
          components: {
            'minecraft:destructible_by_mining': true
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].hardness).toBeUndefined();
    });

    test('should extract explosion resistance from destructible_by_explosion', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:tough_block'
          },
          components: {
            'minecraft:destructible_by_explosion': {
              explosion_resistance: 20.0
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].explosionResistance).toBe(20.0);
    });

    test('should return undefined explosion resistance when destructible_by_explosion is false', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:indestructible'
          },
          components: {
            'minecraft:destructible_by_explosion': false
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].explosionResistance).toBeUndefined();
    });

    test('should normalize light emission from 0-15 to 0.0-1.0', () => {
      const testCases = [
        { input: 0, expected: 0.0 },
        { input: 8, expected: 8 / 15 },
        { input: 15, expected: 1.0 }
      ];

      for (const testCase of testCases) {
        const blockData = {
          'minecraft:block': {
            description: {
              identifier: 'mypack:glowing_block'
            },
            components: {
              'minecraft:light_emission': testCase.input
            }
          }
        };

        const result = BlockConverter.convertToStandard(blockData, createMetadata());

        expect(result[0].lightEmission).toBeCloseTo(testCase.expected, 5);
      }
    });

    test('should extract geometry as string', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:custom_shape'
          },
          components: {
            'minecraft:geometry': 'geometry.custom_block'
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].geometry).toBe('geometry.custom_block');
    });

    test('should extract geometry from object with identifier', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:custom_shape'
          },
          components: {
            'minecraft:geometry': {
              identifier: 'geometry.custom_block'
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].geometry).toBe('geometry.custom_block');
    });

    test('should extract geometry from object with value', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:custom_shape'
          },
          components: {
            'minecraft:geometry': {
              value: 'geometry.custom_block'
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].geometry).toBe('geometry.custom_block');
    });

    test('should extract collision box when set to true', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:solid_block'
          },
          components: {
            'minecraft:collision_box': true
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].collisionBox).toEqual({
        origin: [-8, 0, -8],
        size: [16, 16, 16]
      });
    });

    test('should extract collision box from object', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:custom_collision'
          },
          components: {
            'minecraft:collision_box': {
              origin: [-4, 0, -4],
              size: [8, 8, 8]
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].collisionBox).toEqual({
        origin: [-4, 0, -4],
        size: [8, 8, 8]
      });
    });

    test('should use default values for incomplete collision box', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:partial_collision'
          },
          components: {
            'minecraft:collision_box': {
              origin: [-4],
              size: [8, 8]
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].collisionBox).toEqual({
        origin: [-4, 0, 0],
        size: [8, 8, 16]
      });
    });

    test('should return undefined for collision box when set to false', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:no_collision'
          },
          components: {
            'minecraft:collision_box': false
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].collisionBox).toBeUndefined();
    });

    test('should extract selection box similarly to collision box', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:custom_selection'
          },
          components: {
            'minecraft:selection_box': {
              origin: [-6, 0, -6],
              size: [12, 12, 12]
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].selectionBox).toEqual({
        origin: [-6, 0, -6],
        size: [12, 12, 12]
      });
    });

    test('should set isWaterloggable when minecraft:waterloggable exists', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:waterloggable_block'
          },
          components: {
            'minecraft:waterloggable': {}
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].isWaterloggable).toBe(true);
    });

    test('should preserve material instances', () => {
      const materialInstances = {
        '*': {
          texture: 'custom_block',
          render_method: 'opaque'
        }
      };

      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:textured_block'
          },
          components: {
            'minecraft:material_instances': materialInstances
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      // 验证归一化后的结构
      expect(result[0].materialInstances).toEqual({
        '*': {
          texture: 'custom_block',
          ambientOcclusion: null,
          faceDimming: null,
          renderMethod: 'opaque'
        }
      });
    });

    test('should preserve complete components object', () => {
      const components = {
        'minecraft:friction': 0.6,
        'minecraft:light_emission': 15,
        'minecraft:destructible_by_mining': {
          seconds_to_destroy: 3.0
        },
        'minecraft:custom_component': ['custom_behavior']
      };

      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:complete_block'
          },
          components
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].components).toEqual(components);
    });

    test('should build metadata correctly', () => {
      const metadata = {
        sourceVersion: '1.19.40',
        upgradePath: ['1.19.40', '1.19.50', '1.20.10', '1.21.60'],
        warnings: ['Warning 1', 'Warning 2'],
        sourceFile: 'blocks/custom_block.json'
      };

      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:test_block'
          },
          components: {}
        }
      };

      const result = BlockConverter.convertToStandard(blockData, metadata);

      expect(result[0].metadata).toEqual(metadata);
    });

    test('should return empty array when minecraft:block is missing', () => {
      const blockData = {
        format_version: '1.21.60'
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result.length).toBe(0);
    });

    test('should return empty array when identifier is missing', () => {
      const blockData = {
        'minecraft:block': {
          description: {},
          components: {}
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result.length).toBe(0);
    });

    test('should extract display name from minecraft:display_name', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:named_block'
          },
          components: {
            'minecraft:display_name': 'Custom Block Name'
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].displayName).toBe('Custom Block Name');
    });

    test('should handle display name as object with value', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:named_block'
          },
          components: {
            'minecraft:display_name': {
              value: 'Custom Block Name'
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      expect(result[0].displayName).toBe('Custom Block Name');
    });

    test('should handle complex block with multiple properties', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:complex_block'
          },
          components: {
            'minecraft:display_name': 'Complex Block',
            'minecraft:friction': 0.4,
            'minecraft:light_emission': 12,
            'minecraft:light_dampening': 10,
            'minecraft:destructible_by_mining': {
              seconds_to_destroy: 2.5
            },
            'minecraft:destructible_by_explosion': {
              explosion_resistance: 18.0
            },
            'minecraft:geometry': 'geometry.complex',
            'minecraft:collision_box': {
              origin: [-7, 0, -7],
              size: [14, 16, 14]
            },
            'minecraft:selection_box': {
              origin: [-7, 0, -7],
              size: [14, 16, 14]
            },
            'minecraft:waterloggable': {},
            'minecraft:material_instances': {
              '*': {
                texture: 'complex_block'
              }
            }
          }
        }
      };

      const result = BlockConverter.convertToStandard(blockData, createMetadata());

      const block = result[0];
      expect(block.identifier).toBe('mypack:complex_block');
      expect(block.displayName).toBe('Complex Block');
      expect(block.friction).toBe(0.4);
      expect(block.lightEmission).toBeCloseTo(12 / 15, 5);
      expect(block.lightDampening).toBe(10);
      expect(block.hardness).toBe(2.5);
      expect(block.explosionResistance).toBe(18.0);
      expect(block.geometry).toBe('geometry.complex');
      expect(block.isWaterloggable).toBe(true);
      expect(block.collisionBox).toBeDefined();
      expect(block.selectionBox).toBeDefined();
      expect(block.materialInstances).toBeDefined();
    });
  });

  describe('performance', () => {
    test('should convert single block in less than 10ms', () => {
      const blockData = {
        'minecraft:block': {
          description: {
            identifier: 'mypack:perf_test'
          },
          components: {
            'minecraft:friction': 0.6,
            'minecraft:light_emission': 15,
            'minecraft:destructible_by_mining': {
              seconds_to_destroy: 3.0
            },
            'minecraft:geometry': 'geometry.test'
          }
        }
      };

      const start = Date.now();
      BlockConverter.convertToStandard(blockData, createMetadata());
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(10);
    });
  });
});
