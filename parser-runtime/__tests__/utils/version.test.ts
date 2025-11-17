/**
 * 版本工具函数单元测试
 */

import {
  VERSION_SEQUENCE,
  LATEST_VERSION,
  isSupportedVersion,
  getVersionIndex,
  compareVersions,
  getNextVersion,
  parseVersion,
  compareSemanticVersion,
  findClosestSupportedVersion,
  type VersionInferenceResult
} from '../../src/typescript/utils/version';

describe('Version Utilities', () => {
  describe('基础版本函数', () => {
    test('isSupportedVersion 应该正确验证支持的版本', () => {
      expect(isSupportedVersion('1.19.0')).toBe(true);
      expect(isSupportedVersion('1.21.120')).toBe(true);
      expect(isSupportedVersion('1.20.50')).toBe(false);
      expect(isSupportedVersion('2.0.0')).toBe(false);
    });

    test('getVersionIndex 应该返回正确的索引', () => {
      expect(getVersionIndex('1.19.0')).toBe(0);
      expect(getVersionIndex('1.21.120')).toBe(16); // VERSION_SEQUENCE 有 17 个元素，索引 0-16
      expect(getVersionIndex('1.20.50')).toBe(-1);
    });

    test('compareVersions 应该正确比较支持的版本', () => {
      expect(compareVersions('1.19.0', '1.19.40')).toBeLessThan(0);
      expect(compareVersions('1.21.120', '1.19.0')).toBeGreaterThan(0);
      expect(compareVersions('1.20.10', '1.20.10')).toBe(0);
    });

    test('compareVersions 应该对不支持的版本抛出错误', () => {
      expect(() => compareVersions('1.20.50', '1.19.0')).toThrow('Unsupported version: 1.20.50');
    });

    test('getNextVersion 应该返回下一个版本', () => {
      expect(getNextVersion('1.19.0')).toBe('1.19.40');
      expect(getNextVersion('1.21.50')).toBe('1.21.60');
      expect(getNextVersion('1.21.110')).toBe('1.21.120');
      expect(getNextVersion('1.21.120')).toBeNull(); // 最新版本
      expect(getNextVersion('invalid')).toBeNull();
    });
  });

  describe('parseVersion', () => {
    test('应该正确解析版本字符串', () => {
      expect(parseVersion('1.20.50')).toEqual([1, 20, 50]);
      expect(parseVersion('1.19.0')).toEqual([1, 19, 0]);
      expect(parseVersion('2.0')).toEqual([2, 0]);
    });

    test('应该处理无效数字', () => {
      expect(parseVersion('1.x.0')).toEqual([1, 0, 0]);
      expect(parseVersion('abc')).toEqual([0]);
    });
  });

  describe('compareSemanticVersion', () => {
    test('应该正确比较语义化版本（a > b）', () => {
      expect(compareSemanticVersion('1.20.50', '1.20.41')).toBe(1);
      expect(compareSemanticVersion('1.21.0', '1.20.81')).toBe(1);
      expect(compareSemanticVersion('2.0.0', '1.21.120')).toBe(1);
    });

    test('应该正确比较语义化版本（a < b）', () => {
      expect(compareSemanticVersion('1.19.0', '1.20.0')).toBe(-1);
      expect(compareSemanticVersion('1.20.10', '1.20.41')).toBe(-1);
      expect(compareSemanticVersion('1.18.0', '1.19.0')).toBe(-1);
    });

    test('应该正确比较语义化版本（a == b）', () => {
      expect(compareSemanticVersion('1.20.10', '1.20.10')).toBe(0);
      expect(compareSemanticVersion('1.21.120', '1.21.120')).toBe(0);
    });

    test('应该处理不同长度的版本号', () => {
      expect(compareSemanticVersion('1.20', '1.20.0')).toBe(0);
      expect(compareSemanticVersion('1.20', '1.20.1')).toBe(-1);
      expect(compareSemanticVersion('1.20.1', '1.20')).toBe(1);
    });
  });

  describe('findClosestSupportedVersion', () => {
    describe('精确匹配（exact）', () => {
      test('应该返回精确匹配的版本（高信心度）', () => {
        const result = findClosestSupportedVersion('1.20.10');
        expect(result.inferredVersion).toBe('1.20.10');
        expect(result.direction).toBe('exact');
        expect(result.confidence).toBe('high');
        expect(result.originalVersion).toBe('1.20.10');
      });

      test('所有支持的版本都应该精确匹配', () => {
        for (const version of VERSION_SEQUENCE) {
          const result = findClosestSupportedVersion(version);
          expect(result.direction).toBe('exact');
          expect(result.confidence).toBe('high');
          expect(result.inferredVersion).toBe(version);
        }
      });
    });

    describe('向下兼容（floor）', () => {
      test('应该选择最接近的低版本（中等信心度）', () => {
        // 1.20.50 介于 1.20.41 和 1.20.81 之间，优先选择 floor
        const result = findClosestSupportedVersion('1.20.50');
        expect(result.inferredVersion).toBe('1.20.41');
        expect(result.direction).toBe('floor');
        expect(result.confidence).toBe('medium');
        expect(result.originalVersion).toBe('1.20.50');
      });

      test('应该处理接近最新版本的中间版本', () => {
        // 1.21.55 介于 1.21.50 和 1.21.120 之间
        const result = findClosestSupportedVersion('1.21.55');
        expect(result.inferredVersion).toBe('1.21.50');
        expect(result.direction).toBe('floor');
        expect(result.confidence).toBe('medium');
      });

      test('应该处理超过最新版本的版本（兜底）', () => {
        // 1.22.0 > 1.21.120，使用 floor（最新版本）
        const result = findClosestSupportedVersion('1.22.0');
        expect(result.inferredVersion).toBe('1.21.120');
        expect(result.direction).toBe('floor');
        expect(result.confidence).toBe('medium');
      });
    });

    describe('向上兼容（ceil）', () => {
      test('应该选择最接近的高版本（低信心度）', () => {
        // 1.18.0 < 1.19.0，选择 ceil
        const result = findClosestSupportedVersion('1.18.0');
        expect(result.inferredVersion).toBe('1.19.0');
        expect(result.direction).toBe('ceil');
        expect(result.confidence).toBe('low');
        expect(result.originalVersion).toBe('1.18.0');
      });

      test('应该处理远低于最低版本的版本', () => {
        // 1.10.0 << 1.19.0
        const result = findClosestSupportedVersion('1.10.0');
        expect(result.inferredVersion).toBe('1.19.0');
        expect(result.direction).toBe('ceil');
        expect(result.confidence).toBe('low');
      });
    });

    describe('兜底模式（fallback）', () => {
      test('应该对极端版本使用最新版本兜底', () => {
        // 非常高的版本号，但超过了最新支持版本
        const result = findClosestSupportedVersion('2.0.0');
        expect(result.inferredVersion).toBe('1.21.120'); // 最新版本
        expect(result.direction).toBe('floor');
        expect(result.confidence).toBe('medium');
      });

      test('应该对极低版本使用最低版本（ceil）', () => {
        const result = findClosestSupportedVersion('1.0.0');
        expect(result.inferredVersion).toBe('1.19.0');
        expect(result.direction).toBe('ceil');
        expect(result.confidence).toBe('low');
      });
    });

    describe('边界情况', () => {
      test('应该处理紧邻支持版本的版本', () => {
        // 1.19.1 介于 1.19.0 和 1.19.40 之间
        const result = findClosestSupportedVersion('1.19.1');
        expect(result.inferredVersion).toBe('1.19.0');
        expect(result.direction).toBe('floor');
      });

      test('应该处理版本号缺少补丁版本的情况', () => {
        const result = findClosestSupportedVersion('1.20');
        expect(result.inferredVersion).toBe('1.19.50'); // 1.20 < 1.20.10，选择 floor
        expect(result.direction).toBe('floor');
      });

      test('应该处理版本号包含多个部分的情况', () => {
        const result = findClosestSupportedVersion('1.20.10.5');
        // 解析为 [1, 20, 10, 5]，大于 [1, 20, 10]
        expect(result.inferredVersion).toBe('1.20.10');
        expect(result.direction).toBe('floor');
      });
    });
  });

  describe('版本推断策略验证', () => {
    test('应该优先选择 floor 而不是 ceil', () => {
      // 对于介于两个版本之间的版本号，应该优先向下兼容
      const result = findClosestSupportedVersion('1.20.50');
      expect(result.direction).toBe('floor');
      expect(result.inferredVersion).toBe('1.20.41');
    });

    test('应该为精确匹配提供最高信心度', () => {
      const result = findClosestSupportedVersion('1.20.10');
      expect(result.confidence).toBe('high');
    });

    test('应该为 floor 提供中等信心度', () => {
      const result = findClosestSupportedVersion('1.20.50');
      expect(result.confidence).toBe('medium');
    });

    test('应该为 ceil 提供低信心度', () => {
      const result = findClosestSupportedVersion('1.18.0');
      expect(result.confidence).toBe('low');
    });
  });

  describe('集成测试用例', () => {
    test('官方样例中常见的中间版本应该被正确推断', () => {
      // 1.20.50 是官方样例中常见的版本，但我们不支持
      const result = findClosestSupportedVersion('1.20.50');
      expect(result.inferredVersion).toBe('1.20.41');
      expect(result.direction).toBe('floor');
      expect(result.confidence).toBe('medium');
    });

    test('应该生成正确的警告信息格式（模拟）', () => {
      const result = findClosestSupportedVersion('1.20.50');

      // 模拟 VersionUpgrader.inferVersion() 的警告生成逻辑
      const directionText: Record<string, string> = {
        floor: `向下兼容模式 (可能缺少 1.20.50 的新特性)`,
        ceil: `向上兼容模式 (可能误解析某些语法)`,
        fallback: `兜底模式 (版本差异较大，可能产生错误)`
      };

      const confidenceEmoji: Record<string, string> = {
        high: '✓',
        medium: '⚠️',
        low: '❌'
      };

      const expectedWarning =
        `${confidenceEmoji[result.confidence]} 版本推断: ` +
        `1.20.50 → ${result.inferredVersion} ` +
        `(${directionText[result.direction]})`;

      expect(expectedWarning).toBe('⚠️ 版本推断: 1.20.50 → 1.20.41 (向下兼容模式 (可能缺少 1.20.50 的新特性))');
    });
  });
});
