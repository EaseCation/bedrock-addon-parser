/**
 * Item 标准化转换器
 *
 * 将升级后的 Item JSON 转换为 StandardItem 格式
 */

import { StandardConverter } from './StandardConverter';
import type { StandardItem } from '../index';
import { createLogger } from '../utils/logger';

const logger = createLogger('ItemConverter');

export class ItemConverter extends StandardConverter {
  /**
   * 转换为标准化格式
   *
   * @param itemData - 已升级到最新版本的 Item JSON 对象
   * @param metadata - 元数据（版本、升级路径、警告、文件路径）
   * @returns 标准化的 Item 对象数组
   */
  public static convertToStandard(
    itemData: any,
    metadata: {
      sourceVersion: string;
      upgradePath: string[];
      warnings: string[];
      sourceFile: string;
    }
  ): StandardItem[] {
    const results: StandardItem[] = [];

    // 获取 minecraft:item 定义
    const minecraftItem = itemData['minecraft:item'];
    if (!minecraftItem) {
      logger.warn(`[ItemConverter] No minecraft:item found in ${metadata.sourceFile}`);
      return results;
    }

    const description = minecraftItem.description || {};
    const components = minecraftItem.components || {};

    // 提取标识符
    const identifier = description.identifier;
    if (!identifier) {
      logger.error(`[ItemConverter] Missing identifier in ${metadata.sourceFile}`);
      return results;
    }

    // 构建 StandardItem
    const standardItem: StandardItem = {
      identifier,
      displayName: this.extractString(components['minecraft:display_name']),

      // 基础属性
      maxStackSize: this.extractMaxStackSize(components['minecraft:max_stack_size']),
      maxDurability: this.extractMaxDurability(components),
      nutrition: this.extractNutrition(components['minecraft:food']),
      saturationModifier: this.extractSaturationModifier(components['minecraft:food']),

      // 战斗属性
      damage: this.extractDamage(components['minecraft:damage']),
      protection: this.extractProtection(components['minecraft:wearable']),
      wearableSlot: this.extractWearableSlot(components['minecraft:wearable']),

      // 工具属性
      isDigger: this.extractIsDigger(components['minecraft:digger']),
      digger: this.normalizeDigger(components['minecraft:digger']),
      isEnchantable: this.extractIsEnchantable(components['minecraft:enchantable']),
      enchantableSlot: this.extractEnchantableSlot(components['minecraft:enchantable']),
      enchantableValue: this.extractEnchantableValue(components['minecraft:enchantable']),

      // 视觉属性
      icon: this.extractIcon(components['minecraft:icon']),
      hasGlint: this.extractHasGlint(components),
      rarity: this.extractRarity(components['minecraft:rarity']),
      useAnimation: this.extractUseAnimation(components['minecraft:use_animation']),
      dyeable: this.normalizeDyeable(components['minecraft:dyeable']),

      // 功能标志
      isFood: this.extractIsFood(components['minecraft:food']),
      isFuel: this.extractIsFuel(components['minecraft:fuel']),
      fuelDuration: this.extractFuelDuration(components['minecraft:fuel']),
      isProjectile: this.extractIsProjectile(components['minecraft:projectile']),
      isThrowable: this.extractIsThrowable(components['minecraft:throwable']),
      throwable: this.normalizeThrowable(components['minecraft:throwable']),
      allowOffHand: this.extractBoolean(components['minecraft:allow_off_hand']),
      handEquipped: this.extractBoolean(components['minecraft:hand_equipped']),
      canPlaceBlock: this.extractCanPlaceBlock(components['minecraft:block_placer']),
      canPlaceEntity: this.extractCanPlaceEntity(components['minecraft:entity_placer']),
      isRepairable: this.extractIsRepairable(components['minecraft:repairable']),
      repairable: this.normalizeRepairable(components['minecraft:repairable']),
      isCompostable: this.extractIsCompostable(components['minecraft:compostable']),
      compostChance: this.extractCompostChance(components['minecraft:compostable']),

      // 高级属性
      cooldownDuration: this.extractCooldownDuration(components['minecraft:cooldown']),
      cooldownCategory: this.extractCooldownCategory(components['minecraft:cooldown']),
      shooter: this.normalizeShooter(components['minecraft:shooter']),

      // 保留完整的 components
      components,

      // 元数据
      metadata: {
        sourceVersion: metadata.sourceVersion,
        upgradePath: metadata.upgradePath,
        warnings: metadata.warnings,
        sourceFile: metadata.sourceFile
      }
    };

    logger.debug(`[ItemConverter] Converted item: ${identifier}`);
    results.push(standardItem);

    return results;
  }

  // ============================================================================
  // 基础属性提取方法
  // ============================================================================

  /**
   * 提取最大堆叠数量
   * 处理 number | {value: number} 格式
   */
  private static extractMaxStackSize(component: any): number | undefined {
    if (component === undefined || component === null) return undefined;

    // 直接数字格式（旧版）
    if (typeof component === 'number') return component;

    // 对象格式（v1.20.81+）
    if (typeof component === 'object' && 'value' in component) {
      return typeof component.value === 'number' ? component.value : undefined;
    }

    return undefined;
  }

  /**
   * 提取最大耐久度
   * 处理版本差异：
   * - v1.20.10-: minecraft:max_damage
   * - v1.20.81+: minecraft:durability.max_durability
   */
  private static extractMaxDurability(components: any): number | undefined {
    if (!components) return undefined;

    // 新版格式（v1.20.81+）：minecraft:durability.max_durability
    const durability = components['minecraft:durability'];
    if (durability && typeof durability === 'object' && 'max_durability' in durability) {
      return typeof durability.max_durability === 'number' ? durability.max_durability : undefined;
    }

    // 旧版格式（v1.20.10-）：minecraft:max_damage
    const maxDamage = components['minecraft:max_damage'];
    if (typeof maxDamage === 'number') {
      return maxDamage;
    }

    return undefined;
  }

  /**
   * 提取食物营养值
   */
  private static extractNutrition(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.nutrition === 'number' ? component.nutrition : undefined;
  }

  /**
   * 提取饱和度修饰符
   */
  private static extractSaturationModifier(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.saturation_modifier === 'number' ? component.saturation_modifier : undefined;
  }

  // ============================================================================
  // 战斗属性提取方法
  // ============================================================================

  /**
   * 提取武器伤害值
   */
  private static extractDamage(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.value === 'number' ? component.value : undefined;
  }

  /**
   * 提取盔甲防护值
   */
  private static extractProtection(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.protection === 'number' ? component.protection : undefined;
  }

  /**
   * 提取可穿戴装备槽位
   */
  private static extractWearableSlot(component: any): string | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.slot === 'string' ? component.slot : undefined;
  }

  // ============================================================================
  // 工具属性提取方法
  // ============================================================================

  /**
   * 检查是否为挖掘工具
   */
  private static extractIsDigger(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否可附魔
   */
  private static extractIsEnchantable(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 提取附魔槽位类型
   */
  private static extractEnchantableSlot(component: any): string | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.slot === 'string' ? component.slot : undefined;
  }

  /**
   * 提取附魔值（旧版兼容）
   */
  private static extractEnchantableValue(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.value === 'number' ? component.value : undefined;
  }

  // ============================================================================
  // 视觉属性提取方法
  // ============================================================================

  /**
   * 提取图标纹理名称
   * 处理 string | {textures: {...}} 格式
   */
  private static extractIcon(component: any): string | undefined {
    if (typeof component === 'string') return component;

    // 对象格式（旧版）
    if (typeof component === 'object' && component !== null) {
      if (typeof component.texture === 'string') return component.texture;
      if (typeof component.textures === 'object') {
        // 提取 textures 中的第一个纹理名称
        const firstTexture = Object.values(component.textures)[0];
        if (typeof firstTexture === 'string') return firstTexture;
      }
    }

    return undefined;
  }

  /**
   * 检查是否有附魔光效
   * 处理版本差异：
   * - v1.19.0-v1.20.10: minecraft:foil
   * - v1.20.81+: minecraft:glint
   */
  private static extractHasGlint(components: any): boolean | undefined {
    if (!components) return undefined;

    // 新版格式（v1.20.81+）：minecraft:glint
    const glint = components['minecraft:glint'];
    if (glint !== undefined) {
      return this.extractBoolean(glint);
    }

    // 旧版格式（v1.19.0-v1.20.10）：minecraft:foil
    const foil = components['minecraft:foil'];
    if (foil !== undefined) {
      return this.extractBoolean(foil);
    }

    return undefined;
  }

  /**
   * 提取稀有度
   * 支持两种格式：
   * - 直接字符串：'common' | 'uncommon' | 'rare' | 'epic'
   * - 对象格式：{ value: 'common' | 'uncommon' | 'rare' | 'epic' }
   */
  private static extractRarity(component: any): string | undefined {
    // 直接字符串格式（新版本）
    if (typeof component === 'string') {
      return component;
    }

    // 对象格式（旧版本）
    if (typeof component === 'object' && component?.value) {
      return typeof component.value === 'string' ? component.value : undefined;
    }

    return undefined;
  }

  /**
   * 提取使用动画
   */
  private static extractUseAnimation(component: any): string | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.value === 'string' ? component.value : undefined;
  }

  // ============================================================================
  // 功能标志提取方法
  // ============================================================================

  /**
   * 检查是否为食物
   */
  private static extractIsFood(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否为燃料
   */
  private static extractIsFuel(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 提取燃料持续时间
   */
  private static extractFuelDuration(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.duration === 'number' ? component.duration : undefined;
  }

  /**
   * 检查是否为投射物
   */
  private static extractIsProjectile(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否可投掷
   */
  private static extractIsThrowable(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否可放置方块
   */
  private static extractCanPlaceBlock(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否可放置实体
   */
  private static extractCanPlaceEntity(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否可修复
   */
  private static extractIsRepairable(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 检查是否可堆肥
   */
  private static extractIsCompostable(component: any): boolean | undefined {
    return component !== undefined ? true : undefined;
  }

  /**
   * 提取堆肥概率
   */
  private static extractCompostChance(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.compost_chance === 'number' ? component.compost_chance : undefined;
  }

  // ============================================================================
  // 高级属性提取方法
  // ============================================================================

  /**
   * 提取冷却时间
   */
  private static extractCooldownDuration(component: any): number | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.duration === 'number' ? component.duration : undefined;
  }

  /**
   * 提取冷却类型/分组
   */
  private static extractCooldownCategory(component: any): string | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.category === 'string' ? component.category : undefined;
  }

  // ============================================================================
  // 复杂组件归一化方法
  // ============================================================================

  /**
   * 归一化 Digger 组件
   * 将 minecraft:digger 转换为 Digger 结构
   *
   * 处理多态类型：block 字段可能是 string | {tags: string}
   *
   * @param component 原始 digger 组件
   * @returns 归一化后的 Digger
   */
  private static normalizeDigger(component: any): import('../index').Digger | undefined {
    if (!component || typeof component !== 'object') return undefined;

    const destroySpeeds = Array.isArray(component.destroy_speeds)
      ? component.destroy_speeds.map((ds: any) => this.normalizeDestroySpeed(ds))
      : [];

    return {
      useEfficiency: component.use_efficiency ?? false,
      destroySpeeds
    };
  }

  /**
   * 归一化单个 DestroySpeed
   * 处理 block: string | {tags: string} 多态类型
   *
   * @param ds 原始 destroy_speed 对象
   * @returns 归一化后的 DestroySpeed
   */
  private static normalizeDestroySpeed(ds: any): import('../index').DestroySpeed {
    if (!ds || typeof ds !== 'object') {
      return {
        block: null,
        blockTags: null,
        speed: 1.0
      };
    }

    let block: string | null = null;
    let blockTags: string | null = null;

    // 处理 block 字段的多态性
    if (typeof ds.block === 'string') {
      block = ds.block;
    } else if (typeof ds.block === 'object' && ds.block?.tags) {
      blockTags = typeof ds.block.tags === 'string' ? ds.block.tags : null;
    }

    return {
      block,
      blockTags,
      speed: typeof ds.speed === 'number' ? ds.speed : 1.0
    };
  }

  /**
   * 归一化 Dyeable 组件
   * 将 minecraft:dyeable 转换为 Dyeable 结构
   *
   * 处理 default_color 的多态类型：string | number[] | []
   *
   * @param component 原始 dyeable 组件
   * @returns 归一化后的 Dyeable
   */
  private static normalizeDyeable(component: any): import('../index').Dyeable | undefined {
    if (!component || typeof component !== 'object') return undefined;

    const defaultColor = this.parseColor(component.default_color);

    return {
      defaultColor
    };
  }

  /**
   * 解析颜色值
   * 支持多种格式：
   * - 十六进制字符串：'#FF5733' → RGB(255, 87, 51)
   * - RGB 数组：[255, 87, 51] → RGB(255, 87, 51)
   * - 空数组：[] → null
   *
   * @param color 原始颜色值
   * @returns 归一化后的 MapColor 或 null
   */
  private static parseColor(color: any): import('../index').MapColor | null {
    if (!color) return null;

    // 字符串格式：'#FF5733'
    if (typeof color === 'string') {
      const hex = color.replace('#', '');
      if (hex.length === 6) {
        return {
          red: parseInt(hex.substring(0, 2), 16),
          green: parseInt(hex.substring(2, 4), 16),
          blue: parseInt(hex.substring(4, 6), 16)
        };
      }
    }

    // 数组格式：[R, G, B]
    if (Array.isArray(color)) {
      // 空数组表示无默认颜色
      if (color.length === 0) return null;

      // RGB 数组
      if (color.length === 3 &&
          typeof color[0] === 'number' &&
          typeof color[1] === 'number' &&
          typeof color[2] === 'number') {
        return {
          red: color[0],
          green: color[1],
          blue: color[2]
        };
      }
    }

    return null;
  }

  /**
   * 归一化 Repairable 组件
   * 将 minecraft:repairable 转换为 Repairable 结构
   *
   * 处理 repair_amount 的多态类型：number | string
   *
   * @param component 原始 repairable 组件
   * @returns 归一化后的 Repairable
   */
  private static normalizeRepairable(component: any): import('../index').Repairable | undefined {
    if (!component || typeof component !== 'object') return undefined;

    const repairItems = Array.isArray(component.repair_items)
      ? component.repair_items.map((item: any) => this.normalizeRepairItem(item))
      : [];

    return {
      repairItems
    };
  }

  /**
   * 归一化单个 RepairItem
   * 处理 repair_amount: number | string 多态类型
   *
   * @param item 原始 repair_item 对象
   * @returns 归一化后的 RepairItem
   */
  private static normalizeRepairItem(item: any): import('../index').RepairItem {
    if (!item || typeof item !== 'object') {
      return {
        items: [],
        repairAmount: null
      };
    }

    const items = Array.isArray(item.items) ? item.items.filter((i: any) => typeof i === 'string') : [];

    let repairAmount: number | null = null;
    if (item.repair_amount !== undefined && item.repair_amount !== null) {
      if (typeof item.repair_amount === 'number') {
        repairAmount = item.repair_amount;
      } else if (typeof item.repair_amount === 'string') {
        // 尝试解析字符串为数字（如 "100" 或 "100%"）
        const parsed = parseFloat(item.repair_amount.replace('%', ''));
        if (!isNaN(parsed)) {
          repairAmount = parsed;
        }
      }
    }

    return {
      items,
      repairAmount
    };
  }

  /**
   * 归一化 Throwable 组件
   * 将 minecraft:throwable 转换为 Throwable 结构
   *
   * @param component 原始 throwable 组件
   * @returns 归一化后的 Throwable
   */
  private static normalizeThrowable(component: any): import('../index').Throwable | undefined {
    if (!component || typeof component !== 'object') return undefined;

    return {
      doSwingAnimation: component.do_swing_animation ?? false,
      launchPowerScale: typeof component.launch_power_scale === 'number'
        ? component.launch_power_scale
        : 1.0,
      maxDrawDuration: typeof component.max_draw_duration === 'number'
        ? component.max_draw_duration
        : null,
      minDrawDuration: typeof component.min_draw_duration === 'number'
        ? component.min_draw_duration
        : null,
      maxLaunchPower: typeof component.max_launch_power === 'number'
        ? component.max_launch_power
        : null,
      scalePowerByDrawDuration: component.scale_power_by_draw_duration ?? false
    };
  }

  /**
   * 归一化 Shooter 组件
   * 将 minecraft:shooter 转换为 Shooter 结构
   *
   * @param component 原始 shooter 组件
   * @returns 归一化后的 Shooter
   */
  private static normalizeShooter(component: any): import('../index').Shooter | undefined {
    if (!component || typeof component !== 'object') return undefined;

    const ammunition = Array.isArray(component.ammunition)
      ? component.ammunition.map((ammo: any) => this.normalizeAmmunition(ammo))
      : [];

    return {
      ammunition,
      chargeOnDraw: component.charge_on_draw ?? false,
      maxDrawDuration: typeof component.max_draw_duration === 'number'
        ? component.max_draw_duration
        : null,
      scalePowerByDrawDuration: component.scale_power_by_draw_duration ?? false
    };
  }

  /**
   * 归一化单个 Ammunition
   *
   * @param ammo 原始 ammunition 对象
   * @returns 归一化后的 Ammunition
   */
  private static normalizeAmmunition(ammo: any): import('../index').Ammunition {
    if (!ammo || typeof ammo !== 'object') {
      return {
        item: '',
        useOffhand: false,
        searchInventory: false,
        useInCreative: false
      };
    }

    return {
      item: typeof ammo.item === 'string' ? ammo.item : '',
      useOffhand: ammo.use_offhand ?? false,
      searchInventory: ammo.search_inventory ?? false,
      useInCreative: ammo.use_in_creative ?? false
    };
  }
}
