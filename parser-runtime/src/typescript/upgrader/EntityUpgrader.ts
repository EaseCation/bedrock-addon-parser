/**
 * Entity 版本升级器
 *
 * 负责将旧版本的 Entity JSON 升级到最新版本（1.21.60）
 * 主要处理组件重命名和嵌套结构（components、component_groups、events）
 */

import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';
import type { UpgradeResult } from './BlockUpgrader';
import type { EntityBehavior as EntityBehaviorV1_21_50 } from '@easecation/schema-types/types/behavior/entities/v1_21_50/Entities';
import type { EntityBehavior as EntityBehaviorV1_21_60 } from '@easecation/schema-types/types/behavior/entities/v1_21_60/Entities';

const logger = createLogger('EntityUpgrader');

export class EntityUpgrader extends VersionUpgrader {
  /**
   * 升级器映射表（版本 → 升级函数）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => EntityUpgrader.upgrade_1_19_0_to_1_19_40(data, warnings)],
    ['1.19.40', (data, warnings) => EntityUpgrader.upgrade_1_19_40_to_1_19_50(data, warnings)],
    ['1.19.50', (data, warnings) => EntityUpgrader.upgrade_1_19_50_to_1_20_10(data, warnings)],
    ['1.20.10', (data, warnings) => EntityUpgrader.upgrade_1_20_10_to_1_20_41(data, warnings)],
    ['1.20.41', (data, warnings) => EntityUpgrader.upgrade_1_20_41_to_1_20_81(data, warnings)],
    ['1.20.81', (data, warnings) => EntityUpgrader.upgrade_1_20_81_to_1_21_50(data, warnings)],
    ['1.21.50', (data, warnings) => EntityUpgrader.upgrade_1_21_50_to_1_21_60(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * 采用链式升级策略：逐版本升级，不寻找最短路径
   *
   * @param data - 原始 Entity JSON 对象
   * @param fromVersion - 起始版本
   * @returns 升级结果
   */
  public static upgradeToLatest(data: any, fromVersion: string): UpgradeResult<any> {
    const warnings: string[] = [];
    const upgradePath: string[] = [fromVersion];

    // 1. 验证起始版本
    if (!this.isSupportedVersion(fromVersion)) {
      throw new Error(
        `Unsupported version: ${fromVersion}. ` +
        `Supported versions: ${this.VERSION_SEQUENCE.join(', ')}`
      );
    }

    // 2. 如果已经是最新版本，直接返回
    if (fromVersion === this.LATEST_VERSION) {
      logger.info(`[Upgrade] Already at latest version: ${fromVersion}`);
      return {
        data,
        upgradePath,
        warnings
      };
    }

    // 3. 找到起始版本的索引
    const startIndex = this.getVersionIndex(fromVersion);

    // 4. 链式升级到最新版本
    let current = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    for (let i = startIndex; i < this.VERSION_SEQUENCE.length - 1; i++) {
      const currentVersion = this.VERSION_SEQUENCE[i]!;  // 非空断言：索引已验证
      const nextVersion = this.VERSION_SEQUENCE[i + 1]!;  // 非空断言：索引已验证

      const upgrader = this.upgraders.get(currentVersion);
      if (!upgrader) {
        // 如果某个版本没有升级器，说明该版本到下一版本无变化，直接跳过
        warnings.push(`[Upgrade] ${currentVersion} → ${nextVersion}: No changes (backward compatible)`);
        upgradePath.push(nextVersion);
        continue;
      }

      // 执行升级
      logger.debug(`[Upgrade] Upgrading ${currentVersion} → ${nextVersion}`);
      current = upgrader(current, warnings);
      upgradePath.push(nextVersion);
    }

    logger.info(`[Upgrade] Successfully upgraded from ${fromVersion} to ${this.LATEST_VERSION}`);
    logger.info(`[Upgrade] Path: ${upgradePath.join(' → ')}`);
    logger.info(`[Upgrade] Warnings: ${warnings.length} found`);

    return {
      data: current,
      upgradePath,
      warnings
    };
  }

  /**
   * v1.19.0 → v1.19.40 升级器
   * 主要变更：小幅增强
   */
  private static upgrade_1_19_0_to_1_19_40(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.19.40';
    warnings.push('[Upgrade] v1.19.0 → v1.19.40: Minor enhancements');
    return result;
  }

  /**
   * v1.19.40 → v1.19.50 升级器
   * 主要变更：小幅增强
   */
  private static upgrade_1_19_40_to_1_19_50(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.19.50';
    warnings.push('[Upgrade] v1.19.40 → v1.19.50: Minor enhancements');
    return result;
  }

  /**
   * v1.19.50 → v1.20.10 升级器
   * 主要变更：引入属性系统（BoolProperty, EnumProperty, FloatProperty, IntProperty）
   */
  private static upgrade_1_19_50_to_1_20_10(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.10';

    const entity = result['minecraft:entity'];
    if (entity && entity.description?.properties) {
      warnings.push(
        '[Upgrade] v1.19.50 → v1.20.10: Entity properties system introduced. ' +
        'Ensure client-side property sync is configured correctly.'
      );
    } else {
      warnings.push('[Upgrade] v1.19.50 → v1.20.10: Property system available (optional)');
    }

    return result;
  }

  /**
   * v1.20.10 → v1.20.41 升级器
   * 主要变更：小幅增强
   */
  private static upgrade_1_20_10_to_1_20_41(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.41';
    warnings.push('[Upgrade] v1.20.10 → v1.20.41: Minor enhancements');
    return result;
  }

  /**
   * v1.20.41 → v1.20.81 升级器
   * 主要变更：新增大量 AI 组件和过滤器（+15 组件）
   */
  private static upgrade_1_20_41_to_1_20_81(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.81';
    warnings.push('[Upgrade] v1.20.41 → v1.20.81: AI behavior enhancements (+15 new components available)');
    return result;
  }

  /**
   * v1.20.81 → v1.21.50 升级器
   * 主要变更：进一步增强 AI 和交互能力（+12 组件）
   */
  private static upgrade_1_20_81_to_1_21_50(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.21.50';
    warnings.push('[Upgrade] v1.20.81 → v1.21.50: AI and interaction enhancements (+12 new components available)');
    return result;
  }

  /**
   * v1.21.50 → v1.21.60 升级器
   * 主要变更：组件重命名（lookat → looked_at）、事件系统改进
   *
   * 注意：函数签名使用强类型保证输入输出的类型安全
   */
  private static upgrade_1_21_50_to_1_21_60(
    data: EntityBehaviorV1_21_50,
    warnings: string[]
  ): EntityBehaviorV1_21_60 {
    // 使用深拷贝避免修改原始数据，内部使用 any 支持动态操作
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）

    // 更新版本号
    result.format_version = '1.21.60';

    // 获取 minecraft:entity 定义
    const entity = result['minecraft:entity'];
    if (!entity) {
      warnings.push('[Upgrade] v1.21.50 → v1.21.60: No minecraft:entity found, skipping');
      return result as EntityBehaviorV1_21_60;
    }

    const identifier = entity.description?.identifier || 'unknown';

    /**
     * 辅助函数：升级组件对象
     * @param components - 组件对象
     * @param context - 上下文（用于警告信息）
     */
    const upgradeComponents = (components: any, context: string) => {
      if (!components || typeof components !== 'object') {
        return;
      }

      // 处理组件重命名: minecraft:behavior.lookat → minecraft:behavior.looked_at
      if (components['minecraft:behavior.lookat'] !== undefined) {
        components['minecraft:behavior.looked_at'] = components['minecraft:behavior.lookat'];
        delete components['minecraft:behavior.lookat'];
        warnings.push(`[${identifier}] [${context}] Renamed component: lookat → looked_at`);
      }
    };

    // 1. 升级主组件
    if (entity.components) {
      upgradeComponents(entity.components, 'components');
    }

    // 2. 升级组件组中的组件
    if (entity.component_groups && typeof entity.component_groups === 'object') {
      for (const groupName of Object.keys(entity.component_groups)) {
        const groupComponents = entity.component_groups[groupName];
        if (groupComponents && typeof groupComponents === 'object') {
          upgradeComponents(groupComponents, `component_groups.${groupName}`);
        }
      }
    }

    // 3. 检查事件中的废弃用法
    if (entity.events && typeof entity.events === 'object') {
      for (const eventName of Object.keys(entity.events)) {
        const eventDef = entity.events[eventName];
        if (eventDef && typeof eventDef === 'object') {
          // 检查废弃的 filters 语法
          if ((eventDef as any).filters !== undefined) {
            warnings.push(
              `[${identifier}] Event '${eventName}' uses deprecated 'filters' syntax. ` +
              `Consider migrating to filter expressions.`
            );
          }
        }
      }
    }

    warnings.push('[Upgrade] v1.21.50 → v1.21.60: Component rename and event system updates applied');

    // 返回结果（类型断言为目标版本）
    return result as EntityBehaviorV1_21_60;
  }
}
