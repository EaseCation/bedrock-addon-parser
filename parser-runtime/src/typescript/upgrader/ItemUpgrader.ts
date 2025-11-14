/**
 * Item 版本升级器
 *
 * 负责将旧版本的 Item JSON 升级到最新版本
 */

import { VersionUpgrader } from './VersionUpgrader';
import { createLogger } from '../utils/logger';
import type { Item as ItemV1_19_40 } from '@easecation/schema-types/types/behavior/items/v1_19_40/Items';
import type { Item as ItemV1_19_50 } from '@easecation/schema-types/types/behavior/items/v1_19_50/Items';
import type { Item as ItemV1_20_10 } from '@easecation/schema-types/types/behavior/items/v1_20_10/Items';
import type { Item as ItemV1_20_41 } from '@easecation/schema-types/types/behavior/items/v1_20_41/Items';
import type { Item as ItemV1_20_81 } from '@easecation/schema-types/types/behavior/items/v1_20_81/Items';
import type { Item as ItemV1_21_50 } from '@easecation/schema-types/types/behavior/items/v1_21_50/Items';
import type { Item as ItemV1_21_60 } from '@easecation/schema-types/types/behavior/items/v1_21_60/Items';

const logger = createLogger('ItemUpgrader');

export interface UpgradeResult<T> {
  data: T;
  upgradePath: string[];
  warnings: string[];
}

export class ItemUpgrader extends VersionUpgrader {
  /**
   * 升级器映射表（版本 → 升级函数）
   */
  private static readonly upgraders = new Map<string, (data: any, warnings: string[]) => any>([
    ['1.19.0', (data, warnings) => ItemUpgrader.upgrade_1_19_0_to_1_19_40(data, warnings)],
    ['1.19.40', (data, warnings) => ItemUpgrader.upgrade_1_19_40_to_1_19_50(data, warnings)],
    ['1.19.50', (data, warnings) => ItemUpgrader.upgrade_1_19_50_to_1_20_10(data, warnings)],
    ['1.20.10', (data, warnings) => ItemUpgrader.upgrade_1_20_10_to_1_20_41(data, warnings)],
    ['1.20.41', (data, warnings) => ItemUpgrader.upgrade_1_20_41_to_1_20_81(data, warnings)],
    ['1.20.81', (data, warnings) => ItemUpgrader.upgrade_1_20_81_to_1_21_50(data, warnings)],
    ['1.21.50', (data, warnings) => ItemUpgrader.upgrade_1_21_50_to_1_21_60(data, warnings)]
  ]);

  /**
   * 升级到最新版本
   *
   * 采用链式升级策略：逐版本升级，不寻找最短路径
   *
   * @param data - 原始 Item JSON 对象
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
   * 获取 Item 标识符的辅助函数
   */
  private static getItemIdentifier(data: any): string {
    return data['minecraft:item']?.description?.identifier || 'unknown';
  }

  /**
   * v1.19.0 → v1.19.40 升级器
   * 主要变更：小幅增强
   */
  private static upgrade_1_19_0_to_1_19_40(data: any, warnings: string[]): ItemV1_19_40 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.19.40';
    warnings.push('[Upgrade] v1.19.0 → v1.19.40: Minor enhancements');
    return result as ItemV1_19_40;
  }

  /**
   * v1.19.40 → v1.19.50 升级器
   * 主要变更：向后兼容，无实质变化
   */
  private static upgrade_1_19_40_to_1_19_50(
    data: ItemV1_19_40,
    warnings: string[]
  ): ItemV1_19_50 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.19.50';
    warnings.push('[Upgrade] v1.19.40 → v1.19.50: No changes (backward compatible)');
    return result as ItemV1_19_50;
  }

  /**
   * v1.19.50 → v1.20.10 升级器
   * 主要变更：Description 结构调整
   * - category → menu_category
   * - icon 组件简化
   */
  private static upgrade_1_19_50_to_1_20_10(
    data: ItemV1_19_50,
    warnings: string[]
  ): ItemV1_20_10 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.10';

    const minecraftItem = result['minecraft:item'];
    if (!minecraftItem) {
      return result as ItemV1_20_10;
    }

    const description = minecraftItem.description || {};
    const identifier = description.identifier || 'unknown';
    const components = minecraftItem.components || {};

    // 1. 转换 category → menu_category
    if (description.category !== undefined) {
      description.menu_category = {
        category: description.category
      };
      delete description.category;
      warnings.push(`[${identifier}] Migrated description.category to menu_category`);
    }

    // 2. 简化 icon 组件（如果是简单的 {texture: "name"} 格式）
    if (components['minecraft:icon']) {
      const icon = components['minecraft:icon'];
      if (typeof icon === 'object' && icon.texture && !icon.frame && !icon.legacy_id) {
        components['minecraft:icon'] = icon.texture;
        warnings.push(`[${identifier}] Simplified icon component to string format`);
      }
    }

    return result as ItemV1_20_10;
  }

  /**
   * v1.20.10 → v1.20.41 升级器
   * 主要变更：小幅增强
   */
  private static upgrade_1_20_10_to_1_20_41(
    data: ItemV1_20_10,
    warnings: string[]
  ): ItemV1_20_41 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.41';
    warnings.push('[Upgrade] v1.20.10 → v1.20.41: Minor enhancements');
    return result as ItemV1_20_41;
  }

  /**
   * v1.20.41 → v1.20.81 升级器（最复杂）
   * 主要变更：组件值结构大重构
   * - max_stack_size: number → { value: number }
   * - max_damage → durability.max_durability
   * - hand_equipped: boolean → { value: boolean }
   * - foil → glint (重命名)
   * - armor → wearable.protection
   * - 移除多个废弃组件
   */
  private static upgrade_1_20_41_to_1_20_81(
    data: ItemV1_20_41,
    warnings: string[]
  ): ItemV1_20_81 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.20.81';

    const minecraftItem = result['minecraft:item'];
    if (!minecraftItem) {
      return result as ItemV1_20_81;
    }

    const description = minecraftItem.description || {};
    const identifier = description.identifier || 'unknown';
    const components = minecraftItem.components || {};

    // 1. max_stack_size: number → { value: number }
    if (typeof components['minecraft:max_stack_size'] === 'number') {
      const oldValue = components['minecraft:max_stack_size'];
      components['minecraft:max_stack_size'] = { value: oldValue };
      warnings.push(`[${identifier}] Converted max_stack_size to object format: { value: ${oldValue} }`);
    }

    // 2. max_damage → durability.max_durability
    if (components['minecraft:max_damage'] !== undefined) {
      const maxDamage = components['minecraft:max_damage'];

      if (components['minecraft:durability']) {
        // 如果已有 durability 组件，更新它
        components['minecraft:durability'].max_durability = maxDamage;
      } else {
        // 创建新的 durability 组件
        components['minecraft:durability'] = {
          max_durability: maxDamage
        };
      }

      delete components['minecraft:max_damage'];
      warnings.push(`[${identifier}] Migrated max_damage (${maxDamage}) to durability.max_durability`);
    }

    // 3. hand_equipped: boolean → { value: boolean }
    if (typeof components['minecraft:hand_equipped'] === 'boolean') {
      const oldValue = components['minecraft:hand_equipped'];
      components['minecraft:hand_equipped'] = { value: oldValue };
      warnings.push(`[${identifier}] Converted hand_equipped to object format: { value: ${oldValue} }`);
    }

    // 4. foil → glint (重命名)
    if (components['minecraft:foil'] !== undefined) {
      const foilValue = components['minecraft:foil'];

      if (typeof foilValue === 'boolean') {
        components['minecraft:glint'] = { value: foilValue };
      } else {
        components['minecraft:glint'] = foilValue;
      }

      delete components['minecraft:foil'];
      warnings.push(`[${identifier}] Renamed foil to glint`);
    }

    // 5. armor → wearable.protection
    if (components['minecraft:armor']) {
      const armor = components['minecraft:armor'];

      if (!components['minecraft:wearable']) {
        components['minecraft:wearable'] = {};
      }

      if (typeof armor === 'number') {
        components['minecraft:wearable'].protection = armor;
      } else if (armor.protection !== undefined) {
        components['minecraft:wearable'].protection = armor.protection;
      }

      delete components['minecraft:armor'];
      warnings.push(`[${identifier}] Migrated armor to wearable.protection`);
    }

    // 6. 移除废弃组件
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
      if (components[comp] !== undefined) {
        delete components[comp];
        warnings.push(`[${identifier}] Removed deprecated component: ${comp}`);
      }
    }

    // 7. 建议添加新组件（如果有耐久度但无附魔属性）
    if (components['minecraft:durability'] && !components['minecraft:enchantable']) {
      warnings.push(`[${identifier}] Consider adding minecraft:enchantable for tools/weapons`);
    }

    return result as ItemV1_20_81;
  }

  /**
   * v1.20.81 → v1.21.50 升级器（第二复杂）
   * 主要变更：Events 系统移除
   * - 移除 events 字段（破坏性变更）
   * - use_duration → use_modifiers
   * - 清理 food.on_consume
   */
  private static upgrade_1_20_81_to_1_21_50(
    data: ItemV1_20_81,
    warnings: string[]
  ): ItemV1_21_50 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.21.50';

    const minecraftItem = result['minecraft:item'];
    if (!minecraftItem) {
      return result as ItemV1_21_50;
    }

    const description = minecraftItem.description || {};
    const identifier = description.identifier || 'unknown';
    const components = minecraftItem.components || {};

    // 1. 检测并警告 Events 移除（破坏性变更）
    if (minecraftItem.events !== undefined) {
      const eventNames = Object.keys(minecraftItem.events);

      warnings.push(
        `[${identifier}] ⚠️ BREAKING CHANGE: Events system removed in v1.21.50. ` +
        `Affected events: ${eventNames.join(', ')}. ` +
        `You must migrate to custom_components (JavaScript) or server-side logic.`
      );

      // 移除 events（新版本不支持）
      delete minecraftItem.events;
    }

    // 2. use_duration → use_modifiers
    if (components['minecraft:use_duration'] !== undefined) {
      const duration = components['minecraft:use_duration'];

      components['minecraft:use_modifiers'] = {
        use_duration: duration
      };

      delete components['minecraft:use_duration'];
      warnings.push(`[${identifier}] Migrated use_duration to use_modifiers.use_duration`);
    }

    // 3. 检查 food 组件并清理 on_consume
    if (components['minecraft:food']) {
      const food = components['minecraft:food'];

      // 移除旧的 on_consume（已在 events 中）
      if (food.on_consume !== undefined) {
        delete food.on_consume;
        warnings.push(`[${identifier}] Removed food.on_consume (use events or custom_components)`);
      }

      // 检查是否缺少新字段
      if (food.nutrition !== undefined && food.saturation_modifier === undefined) {
        warnings.push(
          `[${identifier}] Food component missing saturation_modifier. ` +
          `Consider adding it for better balance.`
        );
      }
    }

    // 4. shooter 组件简化检查
    if (components['minecraft:shooter']) {
      const shooter = components['minecraft:shooter'];

      // v1.21.50 移除了某些字段
      if (shooter.launch_power_scale !== undefined) {
        delete shooter.launch_power_scale;
        warnings.push(`[${identifier}] Removed unsupported shooter.launch_power_scale`);
      }
    }

    // 5. 描述格式验证
    if (description.menu_category) {
      const menuCat = description.menu_category;

      // 检查 is_hidden_in_commands 是否需要
      if (menuCat.category === 'none' && !menuCat.is_hidden_in_commands) {
        warnings.push(
          `[${identifier}] Items with category 'none' should consider ` +
          `setting is_hidden_in_commands: true`
        );
      }
    }

    return result as ItemV1_21_50;
  }

  /**
   * v1.21.50 → v1.21.60 升级器
   * 主要变更：新组件增强
   * - compostable (食物可堆肥)
   * - rarity (稀有度)
   * - durability_sensor (耐久度传感器)
   * - bundle_interaction (捆绑包交互)
   * - custom_components (自定义组件正式支持)
   */
  private static upgrade_1_21_50_to_1_21_60(
    data: ItemV1_21_50,
    warnings: string[]
  ): ItemV1_21_60 {
    const result = JSON.parse(JSON.stringify(data)) as any;  // 深拷贝（兼容 GraalVM）
    result.format_version = '1.21.60';

    const minecraftItem = result['minecraft:item'];
    if (!minecraftItem) {
      return result as ItemV1_21_60;
    }

    const description = minecraftItem.description || {};
    const identifier = description.identifier || 'unknown';
    const components = minecraftItem.components || {};

    // 1. 检查食物是否应该是可堆肥的
    if (components['minecraft:food'] && !components['minecraft:compostable']) {
      warnings.push(
        `[${identifier}] Food items can now use minecraft:compostable component`
      );
    }

    // 2. 检查是否应该添加 rarity
    if (components['minecraft:enchantable'] && !components['minecraft:rarity']) {
      warnings.push(
        `[${identifier}] Consider adding minecraft:rarity for enchantable items`
      );
    }

    // 3. 检查工具是否应该添加 durability_sensor
    if (components['minecraft:durability'] && !components['minecraft:durability_sensor']) {
      warnings.push(
        `[${identifier}] Tools can now use minecraft:durability_sensor for effects`
      );
    }

    // 4. Icon 格式更新检查
    if (components['minecraft:icon']) {
      const icon = components['minecraft:icon'];

      // 如果是旧格式字符串，建议迁移到新格式
      if (typeof icon === 'string') {
        warnings.push(
          `[${identifier}] Icon can now support multiple textures using ` +
          `{ textures: { default: '${icon}', ... } } format`
        );
      }
    }

    warnings.push('[Upgrade] v1.21.50 → v1.21.60: New component enhancements available');

    return result as ItemV1_21_60;
  }
}
