/**
 * Item 版本升级器
 *
 * 负责将旧版本的 Item JSON 升级到最新版本
 */

import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';
import type { Item as ItemV1_19_0 } from '@easecation/schema-types/types/behavior/items/v1_19_0/Items';
import type { Item as ItemV1_19_40 } from '@easecation/schema-types/types/behavior/items/v1_19_40/Items';
import type { Item as ItemV1_19_50 } from '@easecation/schema-types/types/behavior/items/v1_19_50/Items';
import type { Item as ItemV1_20_10 } from '@easecation/schema-types/types/behavior/items/v1_20_10/Items';
import type { Item as ItemV1_20_41 } from '@easecation/schema-types/types/behavior/items/v1_20_41/Items';
import type { Item as ItemV1_20_81 } from '@easecation/schema-types/types/behavior/items/v1_20_81/Items';
import type { Item as ItemV1_21_0 } from '@easecation/schema-types/types/behavior/items/v1_21_0/Items';
import type { Item as ItemV1_21_30 } from '@easecation/schema-types/types/behavior/items/v1_21_30/Items';
import type { Item as ItemV1_21_40 } from '@easecation/schema-types/types/behavior/items/v1_21_40/Items';
import type { Item as ItemV1_21_50 } from '@easecation/schema-types/types/behavior/items/v1_21_50/Items';
import type { Item as ItemV1_21_60 } from '@easecation/schema-types/types/behavior/items/v1_21_60/Items';
import type { Item as ItemV1_21_70 } from '@easecation/schema-types/types/behavior/items/v1_21_70/Items';
import type { Item as ItemV1_21_80 } from '@easecation/schema-types/types/behavior/items/v1_21_80/Items';
import type { Item as ItemV1_21_90 } from '@easecation/schema-types/types/behavior/items/v1_21_90/Items';
import type { Item as ItemV1_21_100 } from '@easecation/schema-types/types/behavior/items/v1_21_100/Items';
import type { Item as ItemV1_21_110 } from '@easecation/schema-types/types/behavior/items/v1_21_110/Items';
import type { Item as ItemV1_21_120 } from '@easecation/schema-types/types/behavior/items/v1_21_120/Items';

const logger = createLogger('ItemUpgrader');

export interface UpgradeResult<T> {
  data: T;
  upgradePath: string[];
  warnings: string[];
}

export class ItemUpgrader extends VersionUpgrader {
  /**
   * Item 模块支持的版本序列（按时间顺序）
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
   * Item 模块的最新版本
   */
  protected static override readonly LATEST_VERSION = '1.21.120';

  /**
   * 升级器映射表（版本 → 升级函数）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => ItemUpgrader.upgrade_1_19_0_to_1_19_40(data, warnings)],
    ['1.19.40', (data, warnings) => ItemUpgrader.upgrade_1_19_40_to_1_19_50(data, warnings)],
    ['1.19.50', (data, warnings) => ItemUpgrader.upgrade_1_19_50_to_1_20_10(data, warnings)],
    ['1.20.10', (data, warnings) => ItemUpgrader.upgrade_1_20_10_to_1_20_41(data, warnings)],
    ['1.20.41', (data, warnings) => ItemUpgrader.upgrade_1_20_41_to_1_20_81(data, warnings)],
    ['1.20.81', (data, warnings) => ItemUpgrader.upgrade_1_20_81_to_1_21_0(data, warnings)],
    ['1.21.0', (data, warnings) => ItemUpgrader.upgrade_1_21_0_to_1_21_30(data, warnings)],
    ['1.21.30', (data, warnings) => ItemUpgrader.upgrade_1_21_30_to_1_21_40(data, warnings)],
    ['1.21.40', (data, warnings) => ItemUpgrader.upgrade_1_21_40_to_1_21_50(data, warnings)],
    ['1.21.50', (data, warnings) => ItemUpgrader.upgrade_1_21_50_to_1_21_60(data, warnings)],
    ['1.21.60', (data, warnings) => ItemUpgrader.upgrade_1_21_60_to_1_21_70(data, warnings)],
    ['1.21.70', (data, warnings) => ItemUpgrader.upgrade_1_21_70_to_1_21_80(data, warnings)],
    ['1.21.80', (data, warnings) => ItemUpgrader.upgrade_1_21_80_to_1_21_90(data, warnings)],
    ['1.21.90', (data, warnings) => ItemUpgrader.upgrade_1_21_90_to_1_21_100(data, warnings)],
    ['1.21.100', (data, warnings) => ItemUpgrader.upgrade_1_21_100_to_1_21_110(data, warnings)],
    ['1.21.110', (data, warnings) => ItemUpgrader.upgrade_1_21_110_to_1_21_120(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * 采用链式升级策略：逐版本升级，不寻找最短路径
   *
   * @param data - 原始 Item JSON 对象
   * @param fromVersion - 起始版本
   * @param strictMode - 严格模式（默认 false）
   *   - true: 不支持的版本直接抛出异常
   *   - false: 尝试推断最接近的版本并解析
   * @returns 升级结果
   */
  public static upgradeToLatest(
    data: any,
    fromVersion: string,
    strictMode: boolean = false
  ): UpgradeResult<any> {
    const warnings: string[] = [];
    const upgradePath: string[] = [fromVersion];

    // 1. 版本推断 (如果需要)
    const { version: effectiveVersion, warnings: inferWarnings } =
      this.inferVersion(fromVersion, strictMode);

    warnings.push(...inferWarnings);

    // 如果版本被推断，记录到升级路径
    if (effectiveVersion !== fromVersion) {
      upgradePath.push(`(推断为 ${effectiveVersion})`);
      logger.warn(`[Upgrade] Version inferred: ${fromVersion} → ${effectiveVersion}`);
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

    // 3. 找到起始版本的索引（使用推断后的版本）
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
   * 主要变更：小幅增强（向后兼容）
   */
  private static upgrade_1_19_0_to_1_19_40(
    data: ItemV1_19_0,
    warnings: string[]
  ): ItemV1_19_40 {
    warnings.push('[Upgrade] v1.19.0 → v1.19.40: Minor enhancements');

    return {
      format_version: '1.19.40',
      'minecraft:item': data['minecraft:item'] as ItemV1_19_40['minecraft:item']
    };
  }

  /**
   * v1.19.40 → v1.19.50 升级器
   * 主要变更：向后兼容，无实质变化
   */
  private static upgrade_1_19_40_to_1_19_50(
    data: ItemV1_19_40,
    warnings: string[]
  ): ItemV1_19_50 {
    warnings.push('[Upgrade] v1.19.40 → v1.19.50: No changes (backward compatible)');

    return {
      format_version: '1.19.50',
      'minecraft:item': data['minecraft:item'] as ItemV1_19_50['minecraft:item']
    };
  }

  /**
   * v1.19.50 → v1.20.10 升级器
   * 主要变更：Description 结构调整
   * - category → menu_category
   */
  private static upgrade_1_19_50_to_1_20_10(
    data: ItemV1_19_50,
    warnings: string[]
  ): ItemV1_20_10 {
    const oldItem = data['minecraft:item'];

    if (!oldItem) {
      return {
        format_version: '1.20.10',
        'minecraft:item': oldItem
      };
    }

    const oldDescription = oldItem.description || {};
    const identifier = oldDescription.identifier || 'unknown';

    // 转换 description: category → menu_category
    let newDescription: ItemV1_20_10['minecraft:item']['description'] = oldDescription;
    if ('category' in oldDescription) {
      const desc = oldDescription as typeof oldDescription & { category?: string };
      if (desc.category !== undefined) {
        newDescription = {
          ...oldDescription,
          menu_category: {
            category: desc.category
          }
        } as ItemV1_20_10['minecraft:item']['description'];
        // 必须使用 as any: 删除已废弃的 category 字段（不在 v1.20.10 类型定义中）
        delete (newDescription as any).category;
        warnings.push(`[${identifier}] Migrated description.category to menu_category`);
      }
    }

    // Icon 组件在此版本无变化，保持原样
    return {
      format_version: '1.20.10',
      'minecraft:item': {
        description: newDescription,
        components: oldItem.components
      }
    };
  }

  /**
   * v1.20.10 → v1.20.41 升级器
   * 主要变更：小幅增强（向后兼容）
   */
  private static upgrade_1_20_10_to_1_20_41(
    data: ItemV1_20_10,
    warnings: string[]
  ): ItemV1_20_41 {
    warnings.push('[Upgrade] v1.20.10 → v1.20.41: Minor enhancements');

    return {
      format_version: '1.20.41',
      'minecraft:item': data['minecraft:item'] as ItemV1_20_41['minecraft:item']
    };
  }

  /**
   * v1.20.41 → v1.20.81 升级器（最复杂）
   * 主要变更：组件值结构大重构
   * - max_stack_size: number → { value: number }
   * - max_damage → durability.max_durability
   * - hand_equipped: boolean → { value: boolean }
   * - foil → glint (重命名)
   * - icon: 支持字符串简写 { texture: "x" } → "x"
   * - armor → wearable.protection
   * - 移除多个废弃组件
   */
  private static upgrade_1_20_41_to_1_20_81(
    data: ItemV1_20_41,
    warnings: string[]
  ): ItemV1_20_81 {
    const minecraftItem = data['minecraft:item'];
    if (!minecraftItem) {
      // 如果没有 minecraft:item，直接返回（仅更新 format_version）
      // 必须使用 as any: minecraftItem 为空时类型不兼容
      return {
        format_version: '1.20.81',
        'minecraft:item': minecraftItem as any
      };
    }

    const description = minecraftItem.description;
    const identifier = description?.identifier || 'unknown';
    const oldComponents = minecraftItem.components || {};

    // 准备新版本的 components 对象
    const newComponents: ItemV1_20_81['minecraft:item']['components'] = {};

    // 记录已处理的组件（用于后续复制未处理的组件）
    const processedKeys = new Set<string>();

    // 1. max_stack_size: number → { value: number }
    if (oldComponents['minecraft:max_stack_size'] !== undefined) {
      const value = oldComponents['minecraft:max_stack_size'];
      if (typeof value === 'number') {
        newComponents['minecraft:max_stack_size'] = { value: value };
        warnings.push(`[${identifier}] Converted max_stack_size to object format: { value: ${value} }`);
      } else {
        // 已经是对象格式，直接引用（入口已深拷贝）
        newComponents['minecraft:max_stack_size'] = value;
      }
      processedKeys.add('minecraft:max_stack_size');
    }

    // 2. max_damage → durability.max_durability
    if (oldComponents['minecraft:max_damage'] !== undefined) {
      const maxDamage = oldComponents['minecraft:max_damage'];

      // 检查新组件或旧组件中是否已有 durability
      const existingDurability = newComponents['minecraft:durability'] || oldComponents['minecraft:durability'];

      if (existingDurability) {
        // 合并 durability 组件（直接引用，入口已深拷贝）
        newComponents['minecraft:durability'] = {
          ...existingDurability,
          max_durability: maxDamage
        };
        // 如果从 oldComponents 中获取的，标记为已处理
        if (oldComponents['minecraft:durability']) {
          processedKeys.add('minecraft:durability');
        }
      } else {
        // 创建新的 durability 组件
        newComponents['minecraft:durability'] = {
          max_durability: maxDamage
        };
      }

      warnings.push(`[${identifier}] Migrated max_damage (${maxDamage}) to durability.max_durability`);
      processedKeys.add('minecraft:max_damage');
    }

    // 3. hand_equipped: boolean → { value: boolean }
    if (oldComponents['minecraft:hand_equipped'] !== undefined) {
      const value = oldComponents['minecraft:hand_equipped'];
      if (typeof value === 'boolean') {
        newComponents['minecraft:hand_equipped'] = { value: value };
        warnings.push(`[${identifier}] Converted hand_equipped to object format: { value: ${value} }`);
      } else {
        // 已经是对象格式，直接引用（入口已深拷贝）
        newComponents['minecraft:hand_equipped'] = value;
      }
      processedKeys.add('minecraft:hand_equipped');
    }

    // 4. foil → glint (重命名)
    if (oldComponents['minecraft:foil'] !== undefined) {
      const foilValue = oldComponents['minecraft:foil'];
      if (typeof foilValue === 'boolean') {
        // 必须使用 as any: minecraft:glint 在 v1.20.81 中是新组件，类型定义可能不完整
        (newComponents as any)['minecraft:glint'] = { value: foilValue };
      } else {
        // 必须使用 as any: 兜底处理，foilValue 可能已经是对象格式（向前兼容）
        (newComponents as any)['minecraft:glint'] = foilValue;
      }
      warnings.push(`[${identifier}] Renamed foil to glint`);
      processedKeys.add('minecraft:foil');
    }

    // 5. icon: 支持字符串简写（v1.20.81 新特性）
    if (oldComponents['minecraft:icon'] !== undefined) {
      const icon = oldComponents['minecraft:icon'];

      // 检测旧的对象格式：{ texture: "x" } （无 frame 和 legacy_id）
      if (typeof icon === 'object' && icon !== null && 'texture' in icon) {
        const iconObj = icon as { texture?: string; frame?: number | string; legacy_id?: string };

        // 只有纯 texture 才简化为字符串
        if (iconObj.texture && !iconObj.frame && !iconObj.legacy_id) {
          // v1.20.81 支持字符串简写
          newComponents['minecraft:icon'] = iconObj.texture;
          warnings.push(`[${identifier}] Simplified icon to string format: "${iconObj.texture}"`);
        } else {
          // 保留复杂的对象格式（有 frame 或 legacy_id）
          // 必须使用 as any: v1.20.41 的 Icon 接口与 v1.20.81 的 Icon 类型不兼容
          (newComponents as any)['minecraft:icon'] = icon;
        }
      } else {
        // 已经是字符串或其他格式，直接保留
        // 必须使用 as any: v1.20.41 和 v1.20.81 的 Icon 类型可能不完全兼容
        (newComponents as any)['minecraft:icon'] = icon;
      }

      processedKeys.add('minecraft:icon');
    }

    // 6. armor → wearable.protection
    if (oldComponents['minecraft:armor']) {
      const armor = oldComponents['minecraft:armor'];

      let protection: number | undefined;
      if (typeof armor === 'number') {
        protection = armor;
      } else if (typeof armor === 'object' && armor !== null && 'protection' in armor) {
        const armorObj = armor as { protection?: number };
        protection = armorObj.protection;
      }

      if (protection !== undefined) {
        // 合并 wearable（直接引用，入口已深拷贝）
        const existingWearable = newComponents['minecraft:wearable'] || {};
        newComponents['minecraft:wearable'] = {
          ...existingWearable,
          protection: protection
        };
      }

      warnings.push(`[${identifier}] Migrated armor to wearable.protection`);
      processedKeys.add('minecraft:armor');
    }

    // 7. 移除废弃组件
    const deprecatedComponents = [
      'minecraft:knockback_resistance',
      'minecraft:weapon',
      'minecraft:render_offsets',
      'minecraft:on_use',
      'minecraft:on_use_on',
      'minecraft:dye_powder',
      'minecraft:stacked_by_data',
      'minecraft:projectile'
    ];

    for (const comp of deprecatedComponents) {
      if (oldComponents[comp] !== undefined) {
        warnings.push(`[${identifier}] Removed deprecated component: ${comp}`);
        processedKeys.add(comp);
      }
    }

    // 8. 复制所有未处理的组件（保留其他组件）
    for (const key of Object.keys(oldComponents)) {
      if (!processedKeys.has(key)) {
        // 必须使用 as any: 保留用户自定义组件（类型定义无法覆盖所有可能的组件）
        (newComponents as any)[key] = oldComponents[key];
      }
    }

    // 9. 建议添加新组件（如果有耐久度但无附魔属性）
    if (newComponents['minecraft:durability'] && !newComponents['minecraft:enchantable']) {
      warnings.push(`[${identifier}] Consider adding minecraft:enchantable for tools/weapons`);
    }

    // 构造最终返回对象
    const result: ItemV1_20_81 = {
      format_version: '1.20.81',
      'minecraft:item': {
        description: description,
        components: newComponents
      }
    };

    return result;
  }

  /**
   * v1.20.81 → v1.21.0 升级器
   * 主要变更：
   * - 引入 custom_components 系统
   * - 废弃 events 系统（移除并警告）
   * - 移除 food.on_consume（废弃）
   * - 移除 shooter.launch_power_scale（废弃）
   * - 验证 food.saturation_modifier（推荐）
   * - 检查隐藏物品（is_hidden_in_commands）
   */
  private static upgrade_1_20_81_to_1_21_0(
    data: ItemV1_20_81,
    warnings: string[]
  ): ItemV1_21_0 {
    const minecraftItem = data['minecraft:item'];
    const identifier = minecraftItem.description.identifier;
    const oldComponents = minecraftItem.components || {};

    // 明确声明目标类型
    const newComponents: ItemV1_21_0['minecraft:item']['components'] = {};
    const processedKeys = new Set<string>();

    // 1. 检查并移除 minecraft:item.events 字段
    if ((minecraftItem as any).events !== undefined) {
      const events = (minecraftItem as any).events;
      warnings.push(
        `[${identifier}] ⚠️ BREAKING CHANGE: Events system removed in v1.21.0`
      );
      // 列出所有事件
      for (const eventName of Object.keys(events)) {
        warnings.push(
          `[${identifier}]   - Event '${eventName}' should be migrated to custom_components`
        );
      }
    }

    // 2. 迁移 use_duration → use_modifiers.use_duration（向后兼容处理）
    if (oldComponents['minecraft:use_duration'] !== undefined) {
      const useDuration = oldComponents['minecraft:use_duration'];
      const existingModifiers = oldComponents['minecraft:use_modifiers'];

      if (existingModifiers) {
        // 已有 use_modifiers，合并
        newComponents['minecraft:use_modifiers'] = {
          ...existingModifiers,
          use_duration: typeof useDuration === 'number' ? useDuration : useDuration.value
        };
        processedKeys.add('minecraft:use_modifiers');
      } else {
        // 创建新的 use_modifiers
        newComponents['minecraft:use_modifiers'] = {
          use_duration: typeof useDuration === 'number' ? useDuration : useDuration.value
        };
      }

      warnings.push(
        `[${identifier}] Migrated use_duration to use_modifiers.use_duration`
      );
      processedKeys.add('minecraft:use_duration');
    }

    // 3. 处理 food 组件（移除 on_consume，验证 saturation_modifier）
    if (oldComponents['minecraft:food'] !== undefined) {
      const food = oldComponents['minecraft:food'];
      const newFood: any = {};

      // 复制所有字段（除了 on_consume）
      for (const [key, value] of Object.entries(food)) {
        if (key !== 'on_consume') {
          newFood[key] = value;
        } else {
          warnings.push(
            `[${identifier}] Removed food.on_consume (deprecated, use custom_components)`
          );
        }
      }

      // 验证 saturation_modifier
      if (newFood.saturation_modifier === undefined) {
        warnings.push(
          `[${identifier}] Food component missing saturation_modifier (recommended in v1.21.0+)`
        );
      }

      newComponents['minecraft:food'] = newFood;
      processedKeys.add('minecraft:food');
    }

    // 4. 处理 shooter 组件（移除 launch_power_scale）
    if (oldComponents['minecraft:shooter'] !== undefined) {
      const shooter = oldComponents['minecraft:shooter'];
      const newShooter: any = {};

      // 复制所有字段（除了 launch_power_scale）
      for (const [key, value] of Object.entries(shooter)) {
        if (key !== 'launch_power_scale') {
          newShooter[key] = value;
        } else {
          warnings.push(
            `[${identifier}] Removed unsupported shooter.launch_power_scale (deprecated)`
          );
        }
      }

      newComponents['minecraft:shooter'] = newShooter;
      processedKeys.add('minecraft:shooter');
    }

    // 5. 检查隐藏物品（is_hidden_in_commands）
    if (
      minecraftItem.description.menu_category &&
      (minecraftItem.description.menu_category as any).category === 'none'
    ) {
      warnings.push(
        `[${identifier}] Item hidden from creative menu, consider adding is_hidden_in_commands component`
      );
    }

    // 6. 复制所有未处理的组件
    for (const key of Object.keys(oldComponents)) {
      if (!processedKeys.has(key)) {
        (newComponents as any)[key] = oldComponents[key];
      }
    }

    // 7. 构造型返回（不包含events字段）
    return {
      format_version: '1.21.0',
      'minecraft:item': {
        description: minecraftItem.description,
        components: newComponents
      }
    };
  }

  /**
   * v1.21.0 → v1.21.30 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_0_to_1_21_30(
    data: ItemV1_21_0,
    warnings: string[]
  ): ItemV1_21_30 {
    warnings.push('[Upgrade] v1.21.0 → v1.21.30: Backward compatible');

    return {
      format_version: '1.21.30',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_30['minecraft:item']
    };
  }

  /**
   * v1.21.30 → v1.21.40 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_30_to_1_21_40(
    data: ItemV1_21_30,
    warnings: string[]
  ): ItemV1_21_40 {
    warnings.push('[Upgrade] v1.21.30 → v1.21.40: Backward compatible');

    return {
      format_version: '1.21.40',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_40['minecraft:item']
    };
  }

  /**
   * v1.21.40 → v1.21.50 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_40_to_1_21_50(
    data: ItemV1_21_40,
    warnings: string[]
  ): ItemV1_21_50 {
    warnings.push('[Upgrade] v1.21.40 → v1.21.50: Backward compatible');

    return {
      format_version: '1.21.50',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_50['minecraft:item']
    };
  }

  /**
   * v1.21.50 → v1.21.60 升级器
   * 主要变更：新组件增强、向后兼容
   */
  private static upgrade_1_21_50_to_1_21_60(
    data: ItemV1_21_50,
    warnings: string[]
  ): ItemV1_21_60 {
    const minecraftItem = data['minecraft:item'];

    if (!minecraftItem) {
      return {
        format_version: '1.21.60',
        'minecraft:item': minecraftItem
      };
    }

    const description = minecraftItem.description || {};
    const identifier = description.identifier || 'unknown';
    const components = minecraftItem.components || {};

    // 检查新组件建议
    if (components['minecraft:food'] && !components['minecraft:compostable']) {
      warnings.push(
        `[${identifier}] Food items can now use minecraft:compostable component`
      );
    }

    if (components['minecraft:enchantable'] && !components['minecraft:rarity']) {
      warnings.push(
        `[${identifier}] Consider adding minecraft:rarity for enchantable items`
      );
    }

    if (components['minecraft:durability'] && !components['minecraft:durability_sensor']) {
      warnings.push(
        `[${identifier}] Tools can now use minecraft:durability_sensor for effects`
      );
    }

    // Icon 格式更新建议
    if (components['minecraft:icon']) {
      const icon = components['minecraft:icon'];
      if (typeof icon === 'string') {
        warnings.push(
          `[${identifier}] Icon can now support multiple textures using ` +
          `{ textures: { default: '${icon}', ... } } format`
        );
      }
    }

    warnings.push('[Upgrade] v1.21.50 → v1.21.60: New component enhancements available');

    return {
      format_version: '1.21.60',
      'minecraft:item': minecraftItem as ItemV1_21_60['minecraft:item']
    };
  }

  /**
   * v1.21.60 → v1.21.70 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_60_to_1_21_70(
    data: ItemV1_21_60,
    warnings: string[]
  ): ItemV1_21_70 {
    warnings.push('[Upgrade] v1.21.60 → v1.21.70: Backward compatible');

    return {
      format_version: '1.21.70',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_70['minecraft:item']
    };
  }

  /**
   * v1.21.70 → v1.21.80 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_70_to_1_21_80(
    data: ItemV1_21_70,
    warnings: string[]
  ): ItemV1_21_80 {
    warnings.push('[Upgrade] v1.21.70 → v1.21.80: Backward compatible');

    return {
      format_version: '1.21.80',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_80['minecraft:item']
    };
  }

  /**
   * v1.21.80 → v1.21.90 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_80_to_1_21_90(
    data: ItemV1_21_80,
    warnings: string[]
  ): ItemV1_21_90 {
    warnings.push('[Upgrade] v1.21.80 → v1.21.90: Backward compatible');

    return {
      format_version: '1.21.90',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_90['minecraft:item']
    };
  }

  /**
   * v1.21.90 → v1.21.100 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_90_to_1_21_100(
    data: ItemV1_21_90,
    warnings: string[]
  ): ItemV1_21_100 {
    warnings.push('[Upgrade] v1.21.90 → v1.21.100: Backward compatible');

    return {
      format_version: '1.21.100',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_100['minecraft:item']
    };
  }

  /**
   * v1.21.100 → v1.21.110 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_100_to_1_21_110(
    data: ItemV1_21_100,
    warnings: string[]
  ): ItemV1_21_110 {
    warnings.push('[Upgrade] v1.21.100 → v1.21.110: Backward compatible');

    return {
      format_version: '1.21.110',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_110['minecraft:item']
    };
  }

  /**
   * v1.21.110 → v1.21.120 升级器
   * 主要变更：向后兼容
   */
  private static upgrade_1_21_110_to_1_21_120(
    data: ItemV1_21_110,
    warnings: string[]
  ): ItemV1_21_120 {
    warnings.push('[Upgrade] v1.21.110 → v1.21.120: Backward compatible');

    return {
      format_version: '1.21.120',
      'minecraft:item': data['minecraft:item'] as ItemV1_21_120['minecraft:item']
    };
  }
}
