/**
 * Entity 版本升级器
 *
 * 负责将旧版本的 Entity JSON 升级到最新版本（1.21.60）
 * 主要处理组件重命名和嵌套结构（components、component_groups、events）
 *
 * 注意：Entity 官方只维护两个 Schema 版本（v1.19.0 和 v1.21.60）
 */

import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';
import type { UpgradeResult } from './BlockUpgrader';
import type { EntityBehavior as EntityBehaviorV1_19_0 } from '@easecation/schema-types/types/behavior/entities/v1_19_0/Entities';
import type { EntityBehavior as EntityBehaviorV1_21_60 } from '@easecation/schema-types/types/behavior/entities/v1_21_60/Entities';

const logger = createLogger('EntityUpgrader');

export class EntityUpgrader extends VersionUpgrader {
  /**
   * Entity 模块支持的版本序列
   * 注意：Entity 官方只维护两个 Schema 版本（v1.19.0 和 v1.21.60）
   */
  protected static override readonly VERSION_SEQUENCE = [
    '1.19.0',
    '1.21.60'
  ] as const;

  /**
   * Entity 模块的最新版本（官方只维护到 v1.21.60）
   * 注意：Entity 官方 Schema 在 v1.21.60 之后没有更新，与 Block/Item 的 v1.21.120 不同
   */
  protected static override readonly LATEST_VERSION = '1.21.60';

  /**
   * 升级器映射表（版本 → 升级函数）
   * 注意：Entity 只有两个官方 Schema 版本（v1.19.0 和 v1.21.60）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => EntityUpgrader.upgrade_1_19_0_to_1_21_60(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * 采用链式升级策略：逐版本升级，不寻找最短路径
   *
   * @param data - 原始 Entity JSON 对象
   * @param fromVersion - 起始版本
   * @param strictMode - 严格模式（默认 false）
   *   - true: 不支持的版本直接抛出异常
   *   - false: 尝试推断最接近的版本
   * @returns 升级结果
   */
  public static upgradeToLatest(
    data: any,
    fromVersion: string,
    strictMode: boolean = false
  ): UpgradeResult<any> {
    const warnings: string[] = [];
    const upgradePath: string[] = [fromVersion];

    // 1. 版本推断（如果需要）
    const { version: effectiveVersion, warnings: inferWarnings } =
      this.inferVersion(fromVersion, strictMode);

    // 记录推断警告
    warnings.push(...inferWarnings);

    // 记录推断信息到升级路径
    if (effectiveVersion !== fromVersion) {
      upgradePath.push(`(推断为 ${effectiveVersion})`);
      logger.info(`[Upgrade] Version inferred: ${fromVersion} → ${effectiveVersion}`);
    }

    // 2. 如果已经是最新版本，直接返回
    if (effectiveVersion === this.LATEST_VERSION) {
      logger.info(`[Upgrade] Already at latest version: ${effectiveVersion}`);
      return {
        data,
        upgradePath,
        warnings
      };
    }

    // 3. 找到起始版本的索引
    const startIndex = this.getVersionIndex(effectiveVersion);

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

    logger.info(`[Upgrade] Successfully upgraded from ${effectiveVersion} to ${this.LATEST_VERSION}`);
    logger.info(`[Upgrade] Path: ${upgradePath.join(' → ')}`);
    logger.info(`[Upgrade] Warnings: ${warnings.length} found`);

    return {
      data: current,
      upgradePath,
      warnings
    };
  }

  /**
   * v1.19.0 → v1.21.60 升级器
   *
   * 主要变更：
   * 1. 引入属性系统（properties: BoolProperty, EnumProperty, FloatProperty, IntProperty）
   * 2. minecraft:health 支持范围格式（range_min, range_max）
   * 3. 新增大量 AI 组件和过滤器（~27+ 新组件）
   * 4. 组件重命名：minecraft:behavior.lookat → minecraft:behavior.looked_at
   * 5. 事件系统改进（filter expressions）
   * 6. 改进的 Item Descriptor 支持（tags, molang_tests）
   *
   * 注意：由于官方 Schema 只维护两个版本，此升级器处理跨越多个中间版本的兼容性。
   * 大部分 v1.19.0 的内容在 v1.21.60 中保持向后兼容。
   */
  private static upgrade_1_19_0_to_1_21_60(
    data: EntityBehaviorV1_19_0,
    warnings: string[]
  ): EntityBehaviorV1_21_60 {
    const oldEntity = data['minecraft:entity'];

    if (!oldEntity) {
      warnings.push('[Upgrade] v1.19.0 → v1.21.60: No minecraft:entity found, skipping');
      return {
        format_version: '1.21.60',
        'minecraft:entity': oldEntity as EntityBehaviorV1_21_60['minecraft:entity']
      };
    }

    const identifier = oldEntity.description?.identifier || 'unknown';

    /**
     * 组件升级辅助函数
     * 处理：
     * 1. 组件重命名（lookat → looked_at）
     * 2. 保留所有其他组件（向后兼容）
     */
    const upgradeComponents = (
      components: EntityBehaviorV1_19_0['minecraft:entity']['components'] | undefined,
      context: string
    ): EntityBehaviorV1_21_60['minecraft:entity']['components'] => {
      const result: EntityBehaviorV1_21_60['minecraft:entity']['components'] = {};

      if (!components || typeof components !== 'object') {
        return result;
      }

      const componentsAny = components as any;
      for (const key of Object.keys(components)) {
        if (key === 'minecraft:behavior.lookat') {
          // 重命名：lookat → looked_at
          const lookAtComponent = componentsAny[key];
          if (lookAtComponent !== undefined) {
            (result as any)['minecraft:behavior.looked_at'] = lookAtComponent;
            warnings.push(`[${identifier}] [${context}] Renamed component: lookat → looked_at`);
          }
        } else {
          // 保留其他组件（类型断言：无法枚举所有可能的组件）
          (result as any)[key] = componentsAny[key];
        }
      }

      return result;
    };

    // 1. 升级主组件（如果存在）
    const components = oldEntity.components
      ? upgradeComponents(oldEntity.components, 'components')
      : undefined;

    // 2. 升级组件组中的组件
    let componentGroups: EntityBehaviorV1_21_60['minecraft:entity']['component_groups'] | undefined;
    if (oldEntity.component_groups && typeof oldEntity.component_groups === 'object') {
      const newComponentGroups: EntityBehaviorV1_21_60['minecraft:entity']['component_groups'] = {};
      for (const groupName of Object.keys(oldEntity.component_groups)) {
        const groupComponents = oldEntity.component_groups[groupName];
        const transformed = upgradeComponents(groupComponents, `component_groups.${groupName}`);
        // 类型断言：Component 和 Component1 在运行时相同
        newComponentGroups[groupName] = transformed as any;
      }
      componentGroups = newComponentGroups;
    }

    // 3. 检查事件中的废弃用法
    if (oldEntity.events && typeof oldEntity.events === 'object') {
      for (const eventName of Object.keys(oldEntity.events)) {
        const eventDef = oldEntity.events[eventName];
        if (eventDef && typeof eventDef === 'object') {
          if ('filters' in eventDef) {
            warnings.push(
              `[${identifier}] Event '${eventName}' uses deprecated 'filters' syntax. ` +
              `Consider migrating to filter expressions.`
            );
          }
        }
      }
    }

    // 4. 检查是否使用了新特性
    if (oldEntity.description?.properties) {
      warnings.push(
        `[${identifier}] Entity properties system detected. ` +
        `Ensure client-side property sync is configured correctly.`
      );
    }

    warnings.push(
      '[Upgrade] v1.19.0 → v1.21.60: Major upgrade across multiple versions. ' +
      'AI components, properties system, and event improvements now available.'
    );

    // 5. 构造型返回（使用强类型）
    return {
      format_version: '1.21.60',
      'minecraft:entity': {
        description: oldEntity.description as EntityBehaviorV1_21_60['minecraft:entity']['description'],
        ...(components && { components }),
        ...(componentGroups && { component_groups: componentGroups }),
        ...(oldEntity.events && { events: oldEntity.events as EntityBehaviorV1_21_60['minecraft:entity']['events'] })
      }
    };
  }
}
