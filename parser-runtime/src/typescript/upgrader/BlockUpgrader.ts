/**
 * Block 版本升级器
 *
 * 负责将旧版本的 Block JSON 升级到最新版本
 */

import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';
import type { BlockBehavior as BlockBehaviorV1_19_40 } from '@easecation/schema-types/types/behavior/blocks/v1_19_40/Blocks';
import type { BlockBehavior as BlockBehaviorV1_19_50 } from '@easecation/schema-types/types/behavior/blocks/v1_19_50/Blocks';

const logger = createLogger('BlockUpgrader');

export interface UpgradeResult<T> {
  data: T;
  upgradePath: string[];
  warnings: string[];
}

export class BlockUpgrader extends VersionUpgrader {
  /**
   * 升级器映射表（版本 → 升级函数）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => BlockUpgrader.upgrade_1_19_0_to_1_19_40(data, warnings)],
    ['1.19.40', (data, warnings) => BlockUpgrader.upgrade_1_19_40_to_1_19_50(data, warnings)],
    ['1.19.50', (data, warnings) => BlockUpgrader.upgrade_1_19_50_to_1_20_10(data, warnings)],
    ['1.20.10', (data, warnings) => BlockUpgrader.upgrade_1_20_10_to_1_20_41(data, warnings)],
    ['1.20.41', (data, warnings) => BlockUpgrader.upgrade_1_20_41_to_1_20_81(data, warnings)],
    ['1.20.81', (data, warnings) => BlockUpgrader.upgrade_1_20_81_to_1_21_50(data, warnings)],
    ['1.21.50', (data, warnings) => BlockUpgrader.upgrade_1_21_50_to_1_21_60(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * 采用链式升级策略：逐版本升级，不寻找最短路径
   *
   * @param data - 原始 Block JSON 对象
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
   * 主要变更：光照系统重构、事件系统引入、20+ 组件重命名
   *
   * 注意：函数签名使用强类型保证输入输出的类型安全，
   * 但内部实现使用 any 以支持动态组件操作
   */
  private static upgrade_1_19_40_to_1_19_50(
    data: BlockBehaviorV1_19_40,
    warnings: string[]
  ): BlockBehaviorV1_19_50 {
    // 使用深拷贝避免修改原始数据，内部使用 any 支持动态操作
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）

    // 更新版本号
    result.format_version = '1.19.50';

    // 获取 minecraft:block 定义
    const minecraftBlock = data['minecraft:block'];
    const identifier = minecraftBlock.description.identifier;
    const components = minecraftBlock.components as any || {};
    const resultComponents = result['minecraft:block'].components;

    // 1. 转换光照字段：block_light_emission (0.0-1.0) → light_emission (0-15)
    if (components['minecraft:block_light_emission'] !== undefined) {
      const oldValue = components['minecraft:block_light_emission'];
      const newValue = Math.round(oldValue * 15);
      resultComponents['minecraft:light_emission'] = newValue;
      delete resultComponents['minecraft:block_light_emission'];
      warnings.push(`[${identifier}] Converted light_emission: ${oldValue} → ${newValue}`);
    }

    // 2. 转换破坏时间：destroy_time → destructible_by_mining
    if (components['minecraft:destroy_time'] !== undefined) {
      const destroyTime = components['minecraft:destroy_time'];
      resultComponents['minecraft:destructible_by_mining'] = {
        seconds_to_destroy: destroyTime
      };
      delete resultComponents['minecraft:destroy_time'];
      warnings.push(`[${identifier}] Converted destroy_time to destructible_by_mining`);
    }

    // 3. 转换爆炸抗性：explosion_resistance → destructible_by_explosion
    if (components['minecraft:explosion_resistance'] !== undefined) {
      const resistance = components['minecraft:explosion_resistance'];
      resultComponents['minecraft:destructible_by_explosion'] = {
        explosion_resistance: resistance
      };
      delete resultComponents['minecraft:explosion_resistance'];
      warnings.push(`[${identifier}] Converted explosion_resistance to destructible_by_explosion`);
    }

    // 4. 移除已废弃的组件
    const deprecatedComponents = [
      'minecraft:block_light_filter',
      'minecraft:breakonpush',
      'minecraft:breathability',
      'minecraft:creative_category',
      'minecraft:entity_collision',
      'minecraft:immovable',
      'minecraft:onlypistonpush',
      'minecraft:pick_collision',
      'minecraft:preventsjumping'
    ];

    for (const comp of deprecatedComponents) {
      if (resultComponents[comp] !== undefined) {
        delete resultComponents[comp];
        warnings.push(`[${identifier}] Removed deprecated component: ${comp}`);
      }
    }

    // 5. 处理 permutations 中的组件转换
    if (result['minecraft:block'].permutations) {
      for (const perm of result['minecraft:block'].permutations) {
        const permComponents = perm.components || {};

        // 转换 permutations 中的光照字段
        if (permComponents['minecraft:block_light_emission'] !== undefined) {
          const oldValue = permComponents['minecraft:block_light_emission'];
          const newValue = Math.round(oldValue * 15);
          permComponents['minecraft:light_emission'] = newValue;
          delete permComponents['minecraft:block_light_emission'];
          warnings.push(`[${identifier}] [Permutation] Converted light_emission: ${oldValue} → ${newValue}`);
        }

        // 转换其他可能在 permutations 中的字段
        if (permComponents['minecraft:destroy_time'] !== undefined) {
          const destroyTime = permComponents['minecraft:destroy_time'];
          permComponents['minecraft:destructible_by_mining'] = {
            seconds_to_destroy: destroyTime
          };
          delete permComponents['minecraft:destroy_time'];
        }

        if (permComponents['minecraft:explosion_resistance'] !== undefined) {
          const resistance = permComponents['minecraft:explosion_resistance'];
          permComponents['minecraft:destructible_by_explosion'] = {
            explosion_resistance: resistance
          };
          delete permComponents['minecraft:explosion_resistance'];
        }

        // 移除废弃组件
        for (const comp of deprecatedComponents) {
          if (permComponents[comp] !== undefined) {
            delete permComponents[comp];
          }
        }
      }
    }

    // 返回结果（类型断言为目标版本）
    return result as BlockBehaviorV1_19_50;
  }

  /**
   * v1.19.50 → v1.20.10 升级器
   * 主要变更：无变化（向后兼容）
   */
  private static upgrade_1_19_50_to_1_20_10(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.10';
    warnings.push('[Upgrade] v1.19.50 → v1.20.10: No changes (backward compatible)');
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
   * 主要变更：小幅增强
   */
  private static upgrade_1_20_41_to_1_20_81(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.81';
    warnings.push('[Upgrade] v1.20.41 → v1.20.81: Minor enhancements');
    return result;
  }

  /**
   * v1.20.81 → v1.21.50 升级器
   * 主要变更：事件系统大幅简化、CustomComponents 引入
   *
   * 注意：由于事件组件迁移到自定义组件需要编写 JavaScript 代码，
   * 自动升级器只能记录警告信息并保留原始事件组件。
   */
  private static upgrade_1_20_81_to_1_21_50(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）

    // 获取 minecraft:block 定义
    const minecraftBlock = result['minecraft:block'];
    if (!minecraftBlock) {
      result.format_version = '1.21.50';
      return result;
    }

    const description = minecraftBlock.description || {};
    const identifier = description.identifier || 'unknown';
    const components = minecraftBlock.components || {};

    // 检测旧的事件组件，记录警告
    const eventComponents = [
      'minecraft:add_mob_effect',
      'minecraft:damage',
      'minecraft:die',
      'minecraft:on_fall_on',
      'minecraft:on_interact',
      'minecraft:on_placed',
      'minecraft:on_player_destroyed',
      'minecraft:on_player_placing',
      'minecraft:on_step_off',
      'minecraft:on_step_on',
      'minecraft:play_effect',
      'minecraft:play_sound',
      'minecraft:queued_ticking',
      'minecraft:random_ticking'
    ];

    for (const eventComp of eventComponents) {
      if (components[eventComp] !== undefined) {
        warnings.push(
          `[${identifier}] Event component '${eventComp}' requires manual migration to custom_components. ` +
          `Please create a JavaScript custom component handler.`
        );
        // 保留原始组件（向下兼容）
        // delete components[eventComp];  // 不删除
      }
    }

    result.format_version = '1.21.50';
    return result;
  }

  /**
   * v1.21.50 → v1.21.60 升级器
   * 主要变更：小幅增强
   */
  private static upgrade_1_21_50_to_1_21_60(data: any, warnings: string[]): any {
    const result = JSON.parse(JSON.stringify(data));  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.21.60';
    warnings.push('[Upgrade] v1.21.50 → v1.21.60: Minor enhancements');
    return result;
  }
}
