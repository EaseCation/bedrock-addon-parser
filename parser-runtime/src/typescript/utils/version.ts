/**
 * 版本工具函数
 */

/**
 * 版本序列（按时间顺序）
 */
export const VERSION_SEQUENCE = [
  '1.19.0',
  '1.19.40',
  '1.19.50',
  '1.20.10',
  '1.20.41',
  '1.20.81',
  '1.21.50',
  '1.21.60'
] as const;

export const LATEST_VERSION = '1.21.60';

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
