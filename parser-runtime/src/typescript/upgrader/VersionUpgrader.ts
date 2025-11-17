/**
 * 版本升级器基类
 *
 * 提供版本验证、推断和升级的基础功能
 */

import { findClosestSupportedVersion, type VersionInferenceResult } from '../utils/version';

export class VersionUpgrader {
  /**
   * 支持的版本序列（按时间顺序）
   * 注意：子类必须覆盖此属性以提供自己的版本序列
   */
  protected static readonly VERSION_SEQUENCE: readonly string[] = [];

  /**
   * 最新版本
   * 注意：子类必须覆盖此属性以提供自己的最新版本
   */
  protected static readonly LATEST_VERSION: string = '';

  /**
   * 验证版本是否支持
   */
  protected static isSupportedVersion(version: string): boolean {
    return this.VERSION_SEQUENCE.includes(version);
  }

  /**
   * 获取版本索引
   */
  protected static getVersionIndex(version: string): number {
    return this.VERSION_SEQUENCE.indexOf(version);
  }

  /**
   * 推断版本并生成警告信息
   *
   * @param version - 原始版本号
   * @param strictMode - 严格模式（默认 false）
   *   - true: 不支持的版本直接抛出异常
   *   - false: 尝试推断最接近的版本
   * @returns 推断后的版本和警告列表
   *
   * @throws {Error} 严格模式下，版本不支持时抛出异常
   */
  protected static inferVersion(
    version: string,
    strictMode: boolean = false
  ): { version: string; warnings: string[] } {
    const warnings: string[] = [];

    // 严格模式: 不支持的版本直接报错
    if (strictMode && !this.isSupportedVersion(version)) {
      throw new Error(
        `Unsupported version: ${version}. ` +
        `Supported versions: ${this.VERSION_SEQUENCE.join(', ')}`
      );
    }

    // 兜底模式: 推断最接近的版本
    const inference: VersionInferenceResult = findClosestSupportedVersion(version);

    // 如果不是精确匹配，生成警告信息
    if (inference.direction !== 'exact') {
      const directionText: Record<string, string> = {
        floor: `向下兼容模式 (可能缺少 ${version} 的新特性)`,
        ceil: `向上兼容模式 (可能误解析某些语法)`,
        fallback: `兜底模式 (版本差异较大，可能产生错误)`
      };

      const confidenceEmoji: Record<string, string> = {
        high: '✓',
        medium: '⚠️',
        low: '❌'
      };

      warnings.push(
        `${confidenceEmoji[inference.confidence]} 版本推断: ` +
        `${version} → ${inference.inferredVersion} ` +
        `(${directionText[inference.direction]})`
      );
    }

    return {
      version: inference.inferredVersion,
      warnings
    };
  }
}
