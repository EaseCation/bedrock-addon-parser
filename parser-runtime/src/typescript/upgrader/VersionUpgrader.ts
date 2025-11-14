/**
 * 版本升级器基类
 *
 * TODO: Phase 2 - 实现版本升级逻辑
 */

export class VersionUpgrader {
  /**
   * 支持的版本序列（按时间顺序）
   */
  protected static readonly VERSION_SEQUENCE = [
    '1.19.0',
    '1.19.40',
    '1.19.50',
    '1.20.10',
    '1.20.41',
    '1.20.81',
    '1.21.50',
    '1.21.60'
  ];

  protected static readonly LATEST_VERSION = '1.21.60';

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
}
