/**
 * 版本工具函数
 */

/**
 * 版本序列（按时间顺序）
 * 注意：v1.21.120 是当前最新版本
 */
export const VERSION_SEQUENCE = [
  '1.19.0',
  '1.19.40',
  '1.19.50',
  '1.20.10',
  '1.20.41',
  '1.20.81',
  '1.21.0',
  '1.21.30',
  '1.21.40',
  '1.21.50',
  '1.21.60',
  '1.21.70',
  '1.21.80',
  '1.21.90',
  '1.21.100',
  '1.21.110',
  '1.21.120'
] as const;

export const LATEST_VERSION = '1.21.120'; // 当前最新版本

/**
 * 版本类型
 */
export type SupportedVersion = typeof VERSION_SEQUENCE[number];

/**
 * 验证版本是否支持
 */
export function isSupportedVersion(version: string): version is SupportedVersion {
  return VERSION_SEQUENCE.includes(version as SupportedVersion);
}

/**
 * 获取版本索引
 */
export function getVersionIndex(version: string): number {
  return VERSION_SEQUENCE.indexOf(version as SupportedVersion);
}

/**
 * 比较版本（a > b 返回 1，a < b 返回 -1，相等返回 0）
 */
export function compareVersions(a: string, b: string): number {
  const indexA = getVersionIndex(a);
  const indexB = getVersionIndex(b);

  if (indexA === -1 || indexB === -1) {
    throw new Error(`Unsupported version: ${indexA === -1 ? a : b}`);
  }

  return indexA - indexB;
}

/**
 * 获取下一个版本
 */
export function getNextVersion(version: string): string | null {
  const index = getVersionIndex(version);
  if (index === -1 || index >= VERSION_SEQUENCE.length - 1) {
    return null;
  }
  return VERSION_SEQUENCE[index + 1] || null;
}

// ========== 版本推断相关函数 ==========

/**
 * 版本推断结果
 */
export interface VersionInferenceResult {
  /** 推断的版本 */
  inferredVersion: string;
  /** 推断方向 */
  direction: 'exact' | 'floor' | 'ceil' | 'fallback';
  /** 信心度 */
  confidence: 'high' | 'medium' | 'low';
  /** 原始版本 */
  originalVersion: string;
}

/**
 * 解析版本号为数组
 * @param version - 版本字符串 (如 "1.20.50")
 * @returns 版本号数组 (如 [1, 20, 50])
 *
 * @example
 * parseVersion("1.20.50") → [1, 20, 50]
 * parseVersion("1.19") → [1, 19, 0]
 */
export function parseVersion(version: string): number[] {
  return version.split('.').map(v => parseInt(v, 10) || 0);
}

/**
 * 比较两个版本号（语义化版本比较）
 *
 * 与 compareVersions() 的区别：
 * - compareVersions(): 基于 VERSION_SEQUENCE 索引，仅支持已知版本
 * - compareSemanticVersion(): 基于语义化版本比较，支持任意版本号
 *
 * @param a - 版本号 A
 * @param b - 版本号 B
 * @returns 1 (a > b), -1 (a < b), 0 (a == b)
 *
 * @example
 * compareSemanticVersion("1.20.50", "1.20.41") → 1
 * compareSemanticVersion("1.19.0", "1.20.0") → -1
 * compareSemanticVersion("1.20.10", "1.20.10") → 0
 */
export function compareSemanticVersion(a: string, b: string): number {
  const partsA = parseVersion(a);
  const partsB = parseVersion(b);

  const maxLen = Math.max(partsA.length, partsB.length);
  for (let i = 0; i < maxLen; i++) {
    const numA = partsA[i] || 0;
    const numB = partsB[i] || 0;

    if (numA > numB) return 1;
    if (numA < numB) return -1;
  }

  return 0;
}

/**
 * 查找最接近的已支持版本
 *
 * 推断策略：
 * 1. 精确匹配 → 直接返回（高信心度）
 * 2. 向下兼容 (floor) → 优先选择较低版本（中等信心度）
 *    - 原因：旧版本可能缺少新特性，但不会误解析
 * 3. 向上兼容 (ceil) → 次优选择较高版本（低信心度）
 *    - 原因：新版本可能误解析旧语法
 * 4. 兜底 (fallback) → 使用最新版本（低信心度）
 *    - 原因：版本差异过大，仅作尝试
 *
 * @param version - 原始版本号
 * @returns 版本推断结果
 *
 * @example
 * // 精确匹配
 * findClosestSupportedVersion("1.20.10")
 * → { inferredVersion: "1.20.10", direction: "exact", confidence: "high", ... }
 *
 * // 向下兼容（优先）
 * findClosestSupportedVersion("1.20.50")
 * → { inferredVersion: "1.20.41", direction: "floor", confidence: "medium", ... }
 *
 * // 向上兼容
 * findClosestSupportedVersion("1.18.0")
 * → { inferredVersion: "1.19.0", direction: "ceil", confidence: "low", ... }
 *
 * // 兜底
 * findClosestSupportedVersion("2.0.0")
 * → { inferredVersion: "1.21.60", direction: "fallback", confidence: "low", ... }
 */
export function findClosestSupportedVersion(
  version: string
): VersionInferenceResult {
  // 1. 精确匹配
  if (isSupportedVersion(version)) {
    return {
      inferredVersion: version,
      direction: 'exact',
      confidence: 'high',
      originalVersion: version
    };
  }

  // 2. 查找最接近的版本
  let floorVersion: string | null = null;  // 向下兼容版本（比原版本低）
  let ceilVersion: string | null = null;   // 向上兼容版本（比原版本高）

  for (const supportedVersion of VERSION_SEQUENCE) {
    const cmp = compareSemanticVersion(version, supportedVersion);

    if (cmp > 0) {
      // version > supportedVersion
      floorVersion = supportedVersion;
    } else if (cmp < 0 && ceilVersion === null) {
      // version < supportedVersion
      ceilVersion = supportedVersion;
      break;  // 找到第一个更高的版本即可
    }
  }

  // 3. 优先选择 floor (向下兼容)
  if (floorVersion !== null) {
    return {
      inferredVersion: floorVersion,
      direction: 'floor',
      confidence: 'medium',
      originalVersion: version
    };
  }

  // 4. 次优选择 ceil (向上兼容)
  if (ceilVersion !== null) {
    return {
      inferredVersion: ceilVersion,
      direction: 'ceil',
      confidence: 'low',
      originalVersion: version
    };
  }

  // 5. 兜底: 使用最新版本
  return {
    inferredVersion: LATEST_VERSION,
    direction: 'fallback',
    confidence: 'low',
    originalVersion: version
  };
}
