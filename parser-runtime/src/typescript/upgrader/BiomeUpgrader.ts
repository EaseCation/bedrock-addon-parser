/**
 * Biome 版本升级器
 *
 * 负责将旧版本的 Biome JSON 升级到最新版本
 *
 * 版本结构演变：
 * - v1.19.0-v1.21.60：字典结构（Dictionary Structure）
 *   格式：{ [biomeName: string]: { format_version, ...components } }
 *   特点：一个文件可包含多个 biome，biome 名称作为字典 key
 *
 * - v1.21.80+：包装器结构（Wrapper Structure）
 *   格式：{ format_version, "minecraft:biome": { description: { identifier }, components: {...} } }
 *   特点：一个文件一个 biome，identifier 在 description 中明确指定
 */

// 导入所有版本的强类型
import type { Biomes as BiomesV1_19_0 } from '@easecation/schema-types/types/behavior/biomes/v1_19_0/Biomes';
import type { Biomes as BiomesV1_19_40 } from '@easecation/schema-types/types/behavior/biomes/v1_19_40/Biomes';
import type { Biomes as BiomesV1_19_50 } from '@easecation/schema-types/types/behavior/biomes/v1_19_50/Biomes';
import type { Biomes as BiomesV1_20_10 } from '@easecation/schema-types/types/behavior/biomes/v1_20_10/Biomes';
import type { Biomes as BiomesV1_20_41 } from '@easecation/schema-types/types/behavior/biomes/v1_20_41/Biomes';
import type { Biomes as BiomesV1_20_81 } from '@easecation/schema-types/types/behavior/biomes/v1_20_81/Biomes';
import type { Biomes as BiomesV1_21_50 } from '@easecation/schema-types/types/behavior/biomes/v1_21_50/Biomes';
import type { Biomes as BiomesV1_21_60 } from '@easecation/schema-types/types/behavior/biomes/v1_21_60/Biomes';
import type { Biomes as BiomesV1_21_70 } from '@easecation/schema-types/types/behavior/biomes/v1_21_70/Biomes';
import type { BiomeBehavior as BiomeBehaviorV1_21_80 } from '@easecation/schema-types/types/behavior/biomes/v1_21_80/Biomes';
import type { BiomeBehavior as BiomeBehaviorV1_21_90 } from '@easecation/schema-types/types/behavior/biomes/v1_21_90/Biomes';
import type { BiomeBehavior as BiomeBehaviorV1_21_100 } from '@easecation/schema-types/types/behavior/biomes/v1_21_100/Biomes';
import type { BiomeBehavior as BiomeBehaviorV1_21_110 } from '@easecation/schema-types/types/behavior/biomes/v1_21_110/Biomes';
import type { BiomeBehavior as BiomeBehaviorV1_21_120 } from '@easecation/schema-types/types/behavior/biomes/v1_21_120/Biomes';
import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';

const logger = createLogger('BiomeUpgrader');

/**
 * 升级结果接口
 * 注意：data 可以是单个对象或数组（字典结构拆分为多个 biome 时）
 */
export interface UpgradeResult<T> {
  data: T | T[];
  upgradePath: string[];
  warnings: string[];
}

export class BiomeUpgrader extends VersionUpgrader {
  /**
   * 支持的版本序列
   * v1.19.0-v1.21.70：字典结构（Dictionary Structure）
   * v1.21.80-v1.21.120：包装器结构（Wrapper Structure）
   */
  protected static override readonly VERSION_SEQUENCE = [
    '1.19.0',
    '1.19.40',
    '1.19.50',
    '1.20.10',
    '1.20.41',
    '1.20.81',
    '1.21.50',
    '1.21.60',
    '1.21.70',  // 字典结构的最后版本
    '1.21.80',  // 包装器结构的第一版本
    '1.21.90',
    '1.21.100',
    '1.21.110',
    '1.21.120'  // 包装器结构的最新版本
  ];

  /**
   * Biome 模块的最新版本（使用 v1.21.120 包装器结构）
   */
  protected static override readonly LATEST_VERSION = '1.21.120';

  /**
   * 升级器映射表（版本 → 升级函数）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => this.upgrade_1_19_0_to_1_19_40(data, warnings)],
    ['1.19.40', (data, warnings) => this.upgrade_1_19_40_to_1_19_50(data, warnings)],
    ['1.19.50', (data, warnings) => this.upgrade_1_19_50_to_1_20_10(data, warnings)],
    ['1.20.10', (data, warnings) => this.upgrade_1_20_10_to_1_20_41(data, warnings)],
    ['1.20.41', (data, warnings) => this.upgrade_1_20_41_to_1_20_81(data, warnings)],
    ['1.20.81', (data, warnings) => this.upgrade_1_20_81_to_1_21_50(data, warnings)],
    ['1.21.50', (data, warnings) => this.upgrade_1_21_50_to_1_21_60(data, warnings)],
    ['1.21.60', (data, warnings) => this.upgrade_1_21_60_to_1_21_70(data, warnings)],
    ['1.21.70', (data, warnings) => this.upgrade_1_21_70_to_1_21_80(data, warnings)],
    ['1.21.80', (data, warnings) => this.upgrade_1_21_80_to_1_21_90(data, warnings)],
    ['1.21.90', (data, warnings) => this.upgrade_1_21_90_to_1_21_100(data, warnings)],
    ['1.21.100', (data, warnings) => this.upgrade_1_21_100_to_1_21_110(data, warnings)],
    ['1.21.110', (data, warnings) => this.upgrade_1_21_110_to_1_21_120(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * @param data - 原始 Biome JSON 对象
   * @param fromVersion - 起始版本
   * @param strictMode - 严格模式（默认 false）
   * @returns 升级结果（data 可能是单个对象或数组）
   */
  public static upgradeToLatest(
    data: BiomesV1_19_0 | BiomeBehaviorV1_21_120,
    fromVersion: string,
    strictMode: boolean = false
  ): UpgradeResult<BiomeBehaviorV1_21_120> {
    const warnings: string[] = [];
    const upgradePath: string[] = [fromVersion];

    // 1. 版本推断（如果需要）
    const { version: effectiveVersion, warnings: inferWarnings } = this.inferVersion(
      fromVersion,
      strictMode
    );

    // 记录推断警告
    warnings.push(...inferWarnings);

    // 记录推断信息到升级路径
    if (effectiveVersion !== fromVersion) {
      upgradePath.push(`(推断为 ${effectiveVersion})`);
      logger.info(`[Upgrade] Version inferred: ${fromVersion} → ${effectiveVersion}`);
    }

    // 2. 如果已经是最新版本，直接返回
    if (effectiveVersion === BiomeUpgrader.LATEST_VERSION) {
      logger.info(`[Upgrade] Already at latest version: ${effectiveVersion}`);
      return {
        data: data as BiomeBehaviorV1_21_120,
        upgradePath,
        warnings
      };
    }

    // 3. 深拷贝数据（immutability）
    let current: any = JSON.parse(JSON.stringify(data));

    // 4. 链式升级
    const startIndex = BiomeUpgrader.VERSION_SEQUENCE.indexOf(effectiveVersion);
    if (startIndex === -1) {
      throw new Error(`Unsupported version: ${effectiveVersion}`);
    }

    for (let i = startIndex; i < BiomeUpgrader.VERSION_SEQUENCE.length - 1; i++) {
      const currentVersion = BiomeUpgrader.VERSION_SEQUENCE[i];
      const nextVersion = BiomeUpgrader.VERSION_SEQUENCE[i + 1];

      if (!currentVersion || !nextVersion) {
        continue; // 类型安全检查
      }

      const upgrader = this.upgraders.get(currentVersion);
      if (!upgrader) {
        // 没有升级器，说明该版本到下一版本无变化（向下兼容）
        logger.info(`[Upgrade] No upgrader for ${currentVersion}, skipping to ${nextVersion}`);
        upgradePath.push(nextVersion);
        continue;
      }

      logger.info(`[Upgrade] ${currentVersion} → ${nextVersion}`);
      current = upgrader.call(this, current, warnings);
      upgradePath.push(nextVersion);
    }

    // 5. 确保输出版本正确
    if (Array.isArray(current)) {
      // 字典拆分为多个 biome
      for (const biome of current) {
        biome.format_version = BiomeUpgrader.LATEST_VERSION;
      }
    } else {
      // 单个 biome
      current.format_version = BiomeUpgrader.LATEST_VERSION;
    }

    return {
      data: current,
      upgradePath,
      warnings
    };
  }

  // ========== 字典结构版本间升级（v1.19.0-v1.21.60） ==========

  /**
   * v1.19.0 → v1.19.40
   * 变更：添加 minecraft:consolidated_features 组件
   */
  private static upgrade_1_19_0_to_1_19_40(
    data: BiomesV1_19_0,
    warnings: string[]
  ): BiomesV1_19_40 {
    const result: BiomesV1_19_40 = {};

    // 遍历字典中的每个 biome
    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.19.40'
      };
    }

    logger.info('[Upgrade] v1.19.0 → v1.19.40: Updated format_version, added consolidated_features support');
    return result;
  }

  /**
   * v1.19.40 → v1.19.50
   * 变更：无组件变更
   */
  private static upgrade_1_19_40_to_1_19_50(
    data: BiomesV1_19_40,
    warnings: string[]
  ): BiomesV1_19_50 {
    const result: BiomesV1_19_50 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.19.50'
      };
    }

    logger.info('[Upgrade] v1.19.40 → v1.19.50: No structural changes');
    return result;
  }

  /**
   * v1.19.50 → v1.20.10
   * 变更：无组件变更
   */
  private static upgrade_1_19_50_to_1_20_10(
    data: BiomesV1_19_50,
    warnings: string[]
  ): BiomesV1_20_10 {
    const result: BiomesV1_20_10 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.20.10'
      };
    }

    logger.info('[Upgrade] v1.19.50 → v1.20.10: No structural changes');
    return result;
  }

  /**
   * v1.20.10 → v1.20.41
   * 变更：无组件变更
   */
  private static upgrade_1_20_10_to_1_20_41(
    data: BiomesV1_20_10,
    warnings: string[]
  ): BiomesV1_20_41 {
    const result: BiomesV1_20_41 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.20.41'
      };
    }

    logger.info('[Upgrade] v1.20.10 → v1.20.41: No structural changes');
    return result;
  }

  /**
   * v1.20.41 → v1.20.81
   * 变更：无组件变更
   */
  private static upgrade_1_20_41_to_1_20_81(
    data: BiomesV1_20_41,
    warnings: string[]
  ): BiomesV1_20_81 {
    const result: BiomesV1_20_81 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.20.81'
      };
    }

    logger.info('[Upgrade] v1.20.41 → v1.20.81: No structural changes');
    return result;
  }

  /**
   * v1.20.81 → v1.21.50
   * 变更：无组件变更
   */
  private static upgrade_1_20_81_to_1_21_50(
    data: BiomesV1_20_81,
    warnings: string[]
  ): BiomesV1_21_50 {
    const result: BiomesV1_21_50 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.21.50'
      };
    }

    logger.info('[Upgrade] v1.20.81 → v1.21.50: No structural changes');
    return result;
  }

  /**
   * v1.21.50 → v1.21.60
   * 变更：无组件变更
   */
  private static upgrade_1_21_50_to_1_21_60(
    data: BiomesV1_21_50,
    warnings: string[]
  ): BiomesV1_21_60 {
    const result: BiomesV1_21_60 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.21.60'
      };
    }

    logger.info('[Upgrade] v1.21.50 → v1.21.60: No structural changes');
    return result;
  }

  /**
   * v1.21.60 → v1.21.70
   * 变更：无组件变更（字典结构的最后版本）
   */
  private static upgrade_1_21_60_to_1_21_70(
    data: BiomesV1_21_60,
    warnings: string[]
  ): BiomesV1_21_70 {
    const result: BiomesV1_21_70 = {};

    for (const [biomeName, biomeData] of Object.entries(data)) {
      result[biomeName] = {
        ...biomeData,
        format_version: '1.21.70'
      };
    }

    logger.info('[Upgrade] v1.21.60 → v1.21.70: No structural changes (last dictionary version)');
    return result;
  }

  // ========== 关键升级：字典结构 → 包装器结构 ==========

  /**
   * v1.21.70 → v1.21.80
   * 核心变更：从字典结构转换为包装器结构
   *
   * 字典结构（v1.21.70）：
   * {
   *   "plains": { format_version, ...components },
   *   "desert": { format_version, ...components }
   * }
   *
   * 包装器结构（v1.21.80）：
   * {
   *   format_version,
   *   "minecraft:biome": {
   *     description: { identifier: "plains" },
   *     components: { ... }
   *   }
   * }
   *
   * @returns 数组（一个字典文件拆分为多个 biome）
   */
  private static upgrade_1_21_70_to_1_21_80(
    data: BiomesV1_21_70,
    warnings: string[]
  ): BiomeBehaviorV1_21_80[] {
    const results: BiomeBehaviorV1_21_80[] = [];

    // 遍历字典中的每个 biome
    for (const [biomeName, biomeData] of Object.entries(data)) {
      const { format_version, ...allFields } = biomeData;

      // 分离标准组件和自定义标签
      const standardComponents: Record<string, any> = {};
      const customTags: string[] = [];

      for (const [key, value] of Object.entries(allFields)) {
        if (key.startsWith('minecraft:')) {
          // 标准组件处理
          switch (key) {
            case 'minecraft:consolidated_features':
              // v1.21.80 移除此组件
              warnings.push(
                `[${biomeName}] Removed deprecated component: consolidated_features (no longer supported in v1.21.80)`
              );
              break;

            case 'minecraft:legacy_world_generation_rules':
              // v1.21.80 移除此组件
              warnings.push(
                `[${biomeName}] Removed deprecated component: legacy_world_generation_rules (no longer supported in v1.21.80)`
              );
              break;

            case 'minecraft:mountain_parameters':
              // 移除 peaks_factor 字段
              if ((value as any)?.peaks_factor !== undefined) {
                const { peaks_factor, ...rest } = value as any;
                standardComponents[key] = rest;
                warnings.push(
                  `[${biomeName}] Removed minecraft:mountain_parameters.peaks_factor (no longer supported in v1.21.80)`
                );
              } else {
                standardComponents[key] = value;
              }
              break;

            default:
              // 其他标准组件直接保留
              standardComponents[key] = value;
          }
        } else {
          // 自定义标签（无命名空间的组件）
          customTags.push(key);
        }
      }

      // 处理自定义标签：迁移到 minecraft:tags.tags[]
      if (customTags.length > 0) {
        const existingTags = (standardComponents['minecraft:tags'] as any)?.tags || [];
        standardComponents['minecraft:tags'] = {
          tags: [...existingTags, ...customTags]
        };
        warnings.push(
          `[${biomeName}] Migrated ${customTags.length} custom tags to minecraft:tags.tags[] (tags: ${customTags.join(', ')})`
        );
      }

      // 构造包装器结构
      const wrappedBiome: BiomeBehaviorV1_21_80 = {
        format_version: '1.21.80',
        'minecraft:biome': {
          description: {
            identifier: biomeName // ⭐ 字典 key 变为 identifier
          },
          components: standardComponents as any // ⚠️ 使用 any 因为 components 类型非常复杂
        }
      };

      results.push(wrappedBiome);
      logger.info(`[Upgrade] Converted biome '${biomeName}' from dictionary to wrapper structure`);
    }

    warnings.push(`[Upgrade] v1.21.70 → v1.21.80: Converted ${results.length} biome(s) from dictionary to wrapper structure`);
    return results;
  }

  // ========== 包装器结构版本间升级（v1.21.80+） ==========

  /**
   * v1.21.80 → v1.21.90
   * 变更：移除部分表面生成组件，统一使用 surface_builder
   */
  private static upgrade_1_21_80_to_1_21_90(
    data: BiomeBehaviorV1_21_80 | BiomeBehaviorV1_21_80[],
    warnings: string[]
  ): BiomeBehaviorV1_21_90 | BiomeBehaviorV1_21_90[] {
    // 处理数组（字典结构拆分后的多个 biome）
    if (Array.isArray(data)) {
      return data.map(biome => this.upgrade_1_21_80_to_1_21_90(biome, warnings) as BiomeBehaviorV1_21_90);
    }

    // 处理单个 biome
    // 直接读取（不需要深拷贝，入口已处理）
    const oldComponents = data['minecraft:biome'].components;
    const newComponents: BiomeBehaviorV1_21_90['minecraft:biome']['components'] = {};

    // 移除废弃的表面生成组件
    const deprecatedSurfaceComponents = [
      'minecraft:capped_surface',
      'minecraft:frozen_ocean_surface',
      'minecraft:mesa_surface',
      'minecraft:swamp_surface',
      'minecraft:the_end_surface'
    ];

    for (const [key, value] of Object.entries(oldComponents)) {
      if (deprecatedSurfaceComponents.includes(key)) {
        warnings.push(
          `Removed deprecated component: ${key} (no longer supported in v1.21.90, use minecraft:surface_builder instead)`
        );
      } else {
        // 保留所有其他组件（直接引用，入口已深拷贝）
        (newComponents as any)[key] = value;
      }
    }

    // 构造型返回
    return {
      format_version: '1.21.90',
      'minecraft:biome': {
        description: data['minecraft:biome'].description,
        components: newComponents
      }
    };
  }

  /**
   * v1.21.90 → v1.21.100
   * 变更：新增 humidity, map_tints, partially_frozen 组件
   */
  private static upgrade_1_21_90_to_1_21_100(
    data: BiomeBehaviorV1_21_90 | BiomeBehaviorV1_21_90[],
    warnings: string[]
  ): BiomeBehaviorV1_21_100 | BiomeBehaviorV1_21_100[] {
    // 处理数组（字典结构拆分后的多个 biome）
    if (Array.isArray(data)) {
      return data.map(biome => this.upgrade_1_21_90_to_1_21_100(biome, warnings) as BiomeBehaviorV1_21_100);
    }

    // 处理单个 biome
    // 直接读取
    const oldComponents = data['minecraft:biome'].components;
    const newComponents: BiomeBehaviorV1_21_100['minecraft:biome']['components'] = {};

    // 复制所有组件（向后兼容，无变更）
    for (const [key, value] of Object.entries(oldComponents)) {
      (newComponents as any)[key] = value;
    }

    // 构造型返回
    return {
      format_version: '1.21.100',
      'minecraft:biome': {
        description: data['minecraft:biome'].description,
        components: newComponents
      }
    };
  }

  /**
   * v1.21.100 → v1.21.110
   * 变更：climate 组件移除降雪相关字段（ash, blue_spores, red_spores, white_ash）
   */
  private static upgrade_1_21_100_to_1_21_110(
    data: BiomeBehaviorV1_21_100 | BiomeBehaviorV1_21_100[],
    warnings: string[]
  ): BiomeBehaviorV1_21_110 | BiomeBehaviorV1_21_110[] {
    // 处理数组（字典结构拆分后的多个 biome）
    if (Array.isArray(data)) {
      return data.map(biome => this.upgrade_1_21_100_to_1_21_110(biome, warnings) as BiomeBehaviorV1_21_110);
    }

    // 处理单个 biome
    // 直接读取
    const oldComponents = data['minecraft:biome'].components;
    const newComponents: BiomeBehaviorV1_21_110['minecraft:biome']['components'] = {};

    // 处理 minecraft:climate 组件
    if (oldComponents['minecraft:climate']) {
      const oldClimate = oldComponents['minecraft:climate'] as any;
      const newClimate: any = {};

      // 只保留 downfall, snow_accumulation, temperature
      if (oldClimate.downfall !== undefined) {
        newClimate.downfall = oldClimate.downfall;
      }
      if (oldClimate.snow_accumulation !== undefined) {
        newClimate.snow_accumulation = oldClimate.snow_accumulation;
      }
      if (oldClimate.temperature !== undefined) {
        newClimate.temperature = oldClimate.temperature;
      }

      // 记录移除的字段
      const removedFields = ['ash', 'blue_spores', 'red_spores', 'white_ash'];
      for (const field of removedFields) {
        if (oldClimate[field] !== undefined) {
          warnings.push(
            `Removed minecraft:climate.${field} (no longer supported in v1.21.110)`
          );
        }
      }

      newComponents['minecraft:climate'] = newClimate;
    }

    // 复制所有其他组件
    for (const [key, value] of Object.entries(oldComponents)) {
      if (key !== 'minecraft:climate') {
        (newComponents as any)[key] = value;
      }
    }

    // 构造型返回
    return {
      format_version: '1.21.110',
      'minecraft:biome': {
        description: data['minecraft:biome'].description,
        components: newComponents
      }
    };
  }

  /**
   * v1.21.110 → v1.21.120
   * 变更：无组件变更（向后兼容）
   */
  private static upgrade_1_21_110_to_1_21_120(
    data: BiomeBehaviorV1_21_110 | BiomeBehaviorV1_21_110[],
    warnings: string[]
  ): BiomeBehaviorV1_21_120 | BiomeBehaviorV1_21_120[] {
    // 处理数组（字典结构拆分后的多个 biome）
    if (Array.isArray(data)) {
      return data.map(biome => this.upgrade_1_21_110_to_1_21_120(biome, warnings) as BiomeBehaviorV1_21_120);
    }

    // 处理单个 biome
    // 直接读取
    const oldComponents = data['minecraft:biome'].components;
    const newComponents: BiomeBehaviorV1_21_120['minecraft:biome']['components'] = {};

    // 复制所有组件（向后兼容，无变更）
    for (const [key, value] of Object.entries(oldComponents)) {
      (newComponents as any)[key] = value;
    }

    logger.info('[Upgrade] v1.21.110 → v1.21.120: No structural changes');

    // 构造型返回
    return {
      format_version: '1.21.120',
      'minecraft:biome': {
        description: data['minecraft:biome'].description,
        components: newComponents
      }
    };
  }
}
