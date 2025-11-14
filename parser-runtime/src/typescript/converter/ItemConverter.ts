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
      isEnchantable: this.extractIsEnchantable(components['minecraft:enchantable']),
      enchantableSlot: this.extractEnchantableSlot(components['minecraft:enchantable']),
      enchantableValue: this.extractEnchantableValue(components['minecraft:enchantable']),

      // 视觉属性
      icon: this.extractIcon(components['minecraft:icon']),
      hasGlint: this.extractHasGlint(components),
      rarity: this.extractRarity(components['minecraft:rarity']),
      useAnimation: this.extractUseAnimation(components['minecraft:use_animation']),

      // 功能标志
      isFood: this.extractIsFood(components['minecraft:food']),
      isFuel: this.extractIsFuel(components['minecraft:fuel']),
      fuelDuration: this.extractFuelDuration(components['minecraft:fuel']),
      isProjectile: this.extractIsProjectile(components['minecraft:projectile']),
      isThrowable: this.extractIsThrowable(components['minecraft:throwable']),
      allowOffHand: this.extractBoolean(components['minecraft:allow_off_hand']),
      handEquipped: this.extractBoolean(components['minecraft:hand_equipped']),
      canPlaceBlock: this.extractCanPlaceBlock(components['minecraft:block_placer']),
      canPlaceEntity: this.extractCanPlaceEntity(components['minecraft:entity_placer']),
      isRepairable: this.extractIsRepairable(components['minecraft:repairable']),
      isCompostable: this.extractIsCompostable(components['minecraft:compostable']),
      compostChance: this.extractCompostChance(components['minecraft:compostable']),

      // 高级属性
      cooldownDuration: this.extractCooldownDuration(components['minecraft:cooldown']),
      cooldownCategory: this.extractCooldownCategory(components['minecraft:cooldown']),

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
   */
  private static extractRarity(component: any): string | undefined {
    if (!component || typeof component !== 'object') return undefined;
    return typeof component.value === 'string' ? component.value : undefined;
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
}
