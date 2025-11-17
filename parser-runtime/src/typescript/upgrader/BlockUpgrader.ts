/**
 * Block 版本升级器
 *
 * 负责将旧版本的 Block JSON 升级到最新版本
 */

import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';
import type { BlockBehavior as BlockBehaviorV1_19_0 } from '@easecation/schema-types/types/behavior/blocks/v1_19_0/Blocks';
import type { BlockBehavior as BlockBehaviorV1_19_40 } from '@easecation/schema-types/types/behavior/blocks/v1_19_40/Blocks';
import type { BlockBehavior as BlockBehaviorV1_19_50 } from '@easecation/schema-types/types/behavior/blocks/v1_19_50/Blocks';
import type { BlockBehavior as BlockBehaviorV1_20_10 } from '@easecation/schema-types/types/behavior/blocks/v1_20_10/Blocks';
import type { BlockBehavior as BlockBehaviorV1_20_41 } from '@easecation/schema-types/types/behavior/blocks/v1_20_41/Blocks';
import type { BlockBehavior as BlockBehaviorV1_20_81 } from '@easecation/schema-types/types/behavior/blocks/v1_20_81/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_0 } from '@easecation/schema-types/types/behavior/blocks/v1_21_0/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_30 } from '@easecation/schema-types/types/behavior/blocks/v1_21_30/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_40 } from '@easecation/schema-types/types/behavior/blocks/v1_21_40/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_50 } from '@easecation/schema-types/types/behavior/blocks/v1_21_50/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_60 } from '@easecation/schema-types/types/behavior/blocks/v1_21_60/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_70 } from '@easecation/schema-types/types/behavior/blocks/v1_21_70/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_80 } from '@easecation/schema-types/types/behavior/blocks/v1_21_80/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_90 } from '@easecation/schema-types/types/behavior/blocks/v1_21_90/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_100 } from '@easecation/schema-types/types/behavior/blocks/v1_21_100/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_110 } from '@easecation/schema-types/types/behavior/blocks/v1_21_110/Blocks';
import type { BlockBehavior as BlockBehaviorV1_21_120 } from '@easecation/schema-types/types/behavior/blocks/v1_21_120/Blocks';

const logger = createLogger('BlockUpgrader');

export interface UpgradeResult<T> {
  data: T;
  upgradePath: string[];
  warnings: string[];
}

export class BlockUpgrader extends VersionUpgrader {
  /**
   * Block 模块支持的版本序列（按时间顺序）
   */
  protected static override readonly VERSION_SEQUENCE = [
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

  /**
   * Block 模块的最新版本
   */
  protected static override readonly LATEST_VERSION = '1.21.120';

  /**
   * 升级器映射表（版本 → 升级函数）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => BlockUpgrader.upgrade_1_19_0_to_1_19_40(data, warnings)],
    ['1.19.40', (data, warnings) => BlockUpgrader.upgrade_1_19_40_to_1_19_50(data, warnings)],
    ['1.19.50', (data, warnings) => BlockUpgrader.upgrade_1_19_50_to_1_20_10(data, warnings)],
    ['1.20.10', (data, warnings) => BlockUpgrader.upgrade_1_20_10_to_1_20_41(data, warnings)],
    ['1.20.41', (data, warnings) => BlockUpgrader.upgrade_1_20_41_to_1_20_81(data, warnings)],
    ['1.20.81', (data, warnings) => BlockUpgrader.upgrade_1_20_81_to_1_21_0(data, warnings)],
    ['1.21.0', (data, warnings) => BlockUpgrader.upgrade_1_21_0_to_1_21_30(data, warnings)],
    ['1.21.30', (data, warnings) => BlockUpgrader.upgrade_1_21_30_to_1_21_40(data, warnings)],
    ['1.21.40', (data, warnings) => BlockUpgrader.upgrade_1_21_40_to_1_21_50(data, warnings)],
    ['1.21.50', (data, warnings) => BlockUpgrader.upgrade_1_21_50_to_1_21_60(data, warnings)],
    ['1.21.60', (data, warnings) => BlockUpgrader.upgrade_1_21_60_to_1_21_70(data, warnings)],
    ['1.21.70', (data, warnings) => BlockUpgrader.upgrade_1_21_70_to_1_21_80(data, warnings)],
    ['1.21.80', (data, warnings) => BlockUpgrader.upgrade_1_21_80_to_1_21_90(data, warnings)],
    ['1.21.90', (data, warnings) => BlockUpgrader.upgrade_1_21_90_to_1_21_100(data, warnings)],
    ['1.21.100', (data, warnings) => BlockUpgrader.upgrade_1_21_100_to_1_21_110(data, warnings)],
    ['1.21.110', (data, warnings) => BlockUpgrader.upgrade_1_21_110_to_1_21_120(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * 采用链式升级策略：逐版本升级，不寻找最短路径
   *
   * @param data - 原始 Block JSON 对象
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
   * v1.19.0 → v1.19.40 升级器
   * 主要变更：小幅增强（向后兼容）
   */
  private static upgrade_1_19_0_to_1_19_40(
    data: BlockBehaviorV1_19_0,
    warnings: string[]
  ): BlockBehaviorV1_19_40 {
    warnings.push('[Upgrade] v1.19.0 → v1.19.40: Minor enhancements');

    return {
      format_version: '1.19.40',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_19_40['minecraft:block']
    };
  }

  /**
   * v1.19.40 → v1.19.50 升级器
   * 主要变更：光照系统重构、事件系统引入、20+ 组件重命名
   */
  private static upgrade_1_19_40_to_1_19_50(
    data: BlockBehaviorV1_19_40,
    warnings: string[]
  ): BlockBehaviorV1_19_50 {
    const oldBlock = data['minecraft:block'];
    const identifier = oldBlock.description.identifier;
    const oldComponents = oldBlock.components || {};

    const deprecatedComponents = new Set([
      'minecraft:block_light_filter',
      'minecraft:breakonpush',
      'minecraft:breathability',
      'minecraft:creative_category',
      'minecraft:entity_collision',
      'minecraft:immovable',
      'minecraft:onlypistonpush',
      'minecraft:pick_collision',
      'minecraft:preventsjumping'
    ]);

    /**
     * v1.19.40 → v1.19.50 组件转换辅助函数（强类型版本）
     */
    const transform_1_19_40_to_1_19_50_Components = (
      components: BlockBehaviorV1_19_40['minecraft:block']['components'] | undefined,
      context: string
    ): BlockBehaviorV1_19_50['minecraft:block']['components'] => {
      // 明确声明目标版本类型，让 TypeScript 自然检查每个赋值
      const result: BlockBehaviorV1_19_50['minecraft:block']['components'] = {};
      const processed = new Set<string>();

      // 如果 components 为空，返回空对象（components 是必需字段）
      if (!components) {
        return result;
      }

      // 1. 转换光照字段：block_light_emission (0.0-1.0) → light_emission (0-15)
      if (components?.['minecraft:block_light_emission'] !== undefined) {
        const oldValue = components['minecraft:block_light_emission'];
        const newValue = Math.round(oldValue * 15);
        // 强类型赋值：TypeScript 会检查 light_emission 的类型
        result['minecraft:light_emission'] = newValue;
        processed.add('minecraft:block_light_emission');
        warnings.push(`[${identifier}]${context} Converted light_emission: ${oldValue} → ${newValue}`);
      }

      // 2. 转换破坏时间：destroy_time → destructible_by_mining
      if (components?.['minecraft:destroy_time'] !== undefined) {
        const destroyTime = components['minecraft:destroy_time'];
        // 强类型赋值：TypeScript 会检查 destructible_by_mining 的类型
        result['minecraft:destructible_by_mining'] = {
          seconds_to_destroy: destroyTime
        };
        processed.add('minecraft:destroy_time');
        warnings.push(`[${identifier}]${context} Converted destroy_time to destructible_by_mining`);
      }

      // 3. 转换爆炸抗性：explosion_resistance → destructible_by_explosion
      if (components?.['minecraft:explosion_resistance'] !== undefined) {
        const resistance = components['minecraft:explosion_resistance'];
        // 强类型赋值：TypeScript 会检查 destructible_by_explosion 的类型
        result['minecraft:destructible_by_explosion'] = {
          explosion_resistance: resistance
        };
        processed.add('minecraft:explosion_resistance');
        warnings.push(`[${identifier}]${context} Converted explosion_resistance to destructible_by_explosion`);
      }

      // 4. 移除废弃组件并记录
      for (const comp of deprecatedComponents) {
        if (components?.[comp as keyof typeof components] !== undefined) {
          processed.add(comp);
          if (context === '') {
            warnings.push(`[${identifier}] Removed deprecated component: ${comp}`);
          }
        }
      }

      // 5. 复制未处理的组件
      // 注意：Component 类型定义不包含索引签名 [k: string]: unknown
      // 因为它是从 JSON Schema 自动生成的，只包含已知的官方组件。
      // 但我们需要保留用户自定义组件，因此必须使用类型断言。
      if (components) {
        for (const key of Object.keys(components)) {
          if (!processed.has(key)) {
            (result as any)[key] = (components as any)[key];
          }
        }
      }

      // 返回强类型结果
      return result;
    };

    // 转换主组件
    const newComponents = transform_1_19_40_to_1_19_50_Components(oldComponents, '');

    // 转换 permutations（明确声明目标版本类型）
    let newPermutations: BlockBehaviorV1_19_50['minecraft:block']['permutations'];
    if (oldBlock.permutations) {
      newPermutations = oldBlock.permutations.map((perm) => ({
        condition: perm.condition,
        components: transform_1_19_40_to_1_19_50_Components(perm.components, ' [Permutation]')
      }));
    }

    // 构造返回对象，明确字段顺序以匹配类型定义
    const result: BlockBehaviorV1_19_50 = {
      format_version: '1.19.50',
      'minecraft:block': {
        description: oldBlock.description,
        components: newComponents
      }
    };

    // 添加可选字段
    if (newPermutations) {
      result['minecraft:block'].permutations = newPermutations;
    }

    return result;
  }

  /**
   * v1.19.50 → v1.20.10 升级器
   * 主要变更：无变化（向后兼容）
   */
  private static upgrade_1_19_50_to_1_20_10(
    data: BlockBehaviorV1_19_50,
    warnings: string[]
  ): BlockBehaviorV1_20_10 {
    warnings.push('[Upgrade] v1.19.50 → v1.20.10: No changes (backward compatible)');

    return {
      format_version: '1.20.10',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_20_10['minecraft:block']
    };
  }

  /**
   * v1.20.10 → v1.20.41 升级器
   * 主要变更：小幅增强（向后兼容）
   */
  private static upgrade_1_20_10_to_1_20_41(
    data: BlockBehaviorV1_20_10,
    warnings: string[]
  ): BlockBehaviorV1_20_41 {
    warnings.push('[Upgrade] v1.20.10 → v1.20.41: Minor enhancements');

    return {
      format_version: '1.20.41',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_20_41['minecraft:block']
    };
  }

  /**
   * v1.20.41 → v1.20.81 升级器
   * 主要变更：小幅增强（向后兼容）
   */
  private static upgrade_1_20_41_to_1_20_81(
    data: BlockBehaviorV1_20_41,
    warnings: string[]
  ): BlockBehaviorV1_20_81 {
    warnings.push('[Upgrade] v1.20.41 → v1.20.81: Minor enhancements');

    return {
      format_version: '1.20.81',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_20_81['minecraft:block']
    };
  }

  /**
   * v1.20.81 → v1.21.50 升级器
   * 主要变更：事件系统大幅简化、CustomComponents 引入
   *
   * 注意：事件组件迁移到自定义组件需要编写 JavaScript 代码，
   * 自动升级器只记录警告并保留原始组件。
   */
  private static upgrade_1_20_81_to_1_21_50(
    data: BlockBehaviorV1_20_81,
    warnings: string[]
  ): BlockBehaviorV1_21_50 {
    const minecraftBlock = data['minecraft:block'];

    if (!minecraftBlock) {
      return {
        format_version: '1.21.50',
        'minecraft:block': minecraftBlock
      };
    }

    const identifier = minecraftBlock.description?.identifier || 'unknown';
    const components = minecraftBlock.components || {};

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
      }
    }

    return {
      format_version: '1.21.50',
      'minecraft:block': minecraftBlock as BlockBehaviorV1_21_50['minecraft:block']
    };
  }

  /**
   * v1.21.50 → v1.21.60 升级器
   * 主要变更：小幅增强（向后兼容）
   */
  private static upgrade_1_21_50_to_1_21_60(
    data: BlockBehaviorV1_21_50,
    warnings: string[]
  ): BlockBehaviorV1_21_60 {
    warnings.push('[Upgrade] v1.21.50 → v1.21.60: Minor enhancements');

    return {
      format_version: '1.21.60',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_60['minecraft:block']
    };
  }

  /**
   * v1.20.81 → v1.21.0 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_20_81_to_1_21_0(
    data: BlockBehaviorV1_20_81,
    warnings: string[]
  ): BlockBehaviorV1_21_0 {
    const minecraftBlock = data['minecraft:block'];
    const identifier = minecraftBlock.description.identifier;
    const components = minecraftBlock.components || {};

    // v1.21.0+ 引入了 custom_components 系统
    // 检测使用事件系统的组件，这些组件需要手动迁移到 custom_components
    const eventComponents = [
      'minecraft:on_interact',
      'minecraft:on_step_on',
      'minecraft:on_step_off',
      'minecraft:on_fall_on',
      'minecraft:on_placed',
      'minecraft:on_player_placing',
      'minecraft:on_player_destroyed',
      'minecraft:random_ticking',
      'minecraft:queued_ticking'
    ];

    for (const comp of eventComponents) {
      if (components[comp] !== undefined) {
        warnings.push(
          `[${identifier}] Component '${comp}' requires manual migration to custom_components (events system changed in v1.21.0+)`
        );
      }
    }

    warnings.push('[Upgrade] v1.20.81 → v1.21.0: Event components require migration to custom_components');

    return {
      format_version: '1.21.0',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_0['minecraft:block']
    };
  }

  /**
   * v1.21.0 → v1.21.30 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_0_to_1_21_30(
    data: BlockBehaviorV1_21_0,
    warnings: string[]
  ): BlockBehaviorV1_21_30 {
    warnings.push('[Upgrade] v1.21.0 → v1.21.30: Backward compatible');

    return {
      format_version: '1.21.30',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_30['minecraft:block']
    };
  }

  /**
   * v1.21.30 → v1.21.40 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_30_to_1_21_40(
    data: BlockBehaviorV1_21_30,
    warnings: string[]
  ): BlockBehaviorV1_21_40 {
    warnings.push('[Upgrade] v1.21.30 → v1.21.40: Backward compatible');

    return {
      format_version: '1.21.40',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_40['minecraft:block']
    };
  }

  /**
   * v1.21.40 → v1.21.50 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_40_to_1_21_50(
    data: BlockBehaviorV1_21_40,
    warnings: string[]
  ): BlockBehaviorV1_21_50 {
    warnings.push('[Upgrade] v1.21.40 → v1.21.50: Backward compatible');

    return {
      format_version: '1.21.50',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_50['minecraft:block']
    };
  }

  /**
   * v1.21.60 → v1.21.70 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_60_to_1_21_70(
    data: BlockBehaviorV1_21_60,
    warnings: string[]
  ): BlockBehaviorV1_21_70 {
    warnings.push('[Upgrade] v1.21.60 → v1.21.70: Backward compatible');

    return {
      format_version: '1.21.70',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_70['minecraft:block']
    };
  }

  /**
   * v1.21.70 → v1.21.80 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_70_to_1_21_80(
    data: BlockBehaviorV1_21_70,
    warnings: string[]
  ): BlockBehaviorV1_21_80 {
    warnings.push('[Upgrade] v1.21.70 → v1.21.80: Backward compatible');

    return {
      format_version: '1.21.80',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_80['minecraft:block']
    };
  }

  /**
   * v1.21.80 → v1.21.90 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_80_to_1_21_90(
    data: BlockBehaviorV1_21_80,
    warnings: string[]
  ): BlockBehaviorV1_21_90 {
    warnings.push('[Upgrade] v1.21.80 → v1.21.90: Backward compatible');

    return {
      format_version: '1.21.90',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_90['minecraft:block']
    };
  }

  /**
   * v1.21.90 → v1.21.100 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_90_to_1_21_100(
    data: BlockBehaviorV1_21_90,
    warnings: string[]
  ): BlockBehaviorV1_21_100 {
    warnings.push('[Upgrade] v1.21.90 → v1.21.100: Backward compatible');

    return {
      format_version: '1.21.100',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_100['minecraft:block']
    };
  }

  /**
   * v1.21.100 → v1.21.110 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_100_to_1_21_110(
    data: BlockBehaviorV1_21_100,
    warnings: string[]
  ): BlockBehaviorV1_21_110 {
    warnings.push('[Upgrade] v1.21.100 → v1.21.110: Backward compatible');

    return {
      format_version: '1.21.110',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_110['minecraft:block']
    };
  }

  /**
   * v1.21.110 → v1.21.120 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_110_to_1_21_120(
    data: BlockBehaviorV1_21_110,
    warnings: string[]
  ): BlockBehaviorV1_21_120 {
    warnings.push('[Upgrade] v1.21.110 → v1.21.120: Backward compatible');

    return {
      format_version: '1.21.120',
      'minecraft:block': data['minecraft:block'] as BlockBehaviorV1_21_120['minecraft:block']
    };
  }
}
