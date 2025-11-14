/**
 * Entity 标准化转换器
 *
 * 将升级后的 Entity JSON 转换为 StandardEntity 格式
 */

import { StandardConverter } from './StandardConverter';
import type { StandardEntity } from '../index';
import { createLogger } from '../utils/logger';

const logger = createLogger('EntityConverter');

export class EntityConverter extends StandardConverter {
  /**
   * 转换为标准化格式
   *
   * @param entityData - 已升级到最新版本的 Entity JSON 对象
   * @param metadata - 元数据（版本、升级路径、警告、文件路径）
   * @returns 标准化的 Entity 对象数组
   */
  public static convertToStandard(
    entityData: any,
    metadata: {
      sourceVersion: string;
      upgradePath: string[];
      warnings: string[];
      sourceFile: string;
    }
  ): StandardEntity[] {
    const results: StandardEntity[] = [];

    // 获取 minecraft:entity 定义
    const minecraftEntity = entityData['minecraft:entity'];
    if (!minecraftEntity) {
      logger.warn(`[EntityConverter] No minecraft:entity found in ${metadata.sourceFile}`);
      return results;
    }

    const description = minecraftEntity.description || {};
    const components = minecraftEntity.components || {};

    // 提取标识符（必需）
    const identifier = description.identifier;
    if (!identifier) {
      logger.error(`[EntityConverter] Missing identifier in ${metadata.sourceFile}`);
      return results;
    }

    // 构建 StandardEntity
    const standardEntity: StandardEntity = {
      // ========== 核心字段 ==========
      identifier,
      displayName: this.extractDisplayName(components),
      runtimeIdentifier: description.runtime_identifier,

      // ========== 生命属性 ==========
      maxHealth: this.extractFloat(components['minecraft:health']?.max),
      defaultHealth: this.extractFloat(components['minecraft:health']?.value),

      // ========== 物理属性 ==========
      collisionBox: this.extractCollisionBox(components['minecraft:collision_box']),
      scale: this.extractFloat(components['minecraft:scale']?.value),
      isPushable: components['minecraft:pushable'] !== undefined ? true : undefined,

      // ========== 移动属性 ==========
      movementSpeed: this.extractFloat(components['minecraft:movement']?.value),
      flyingSpeed: this.extractFloat(components['minecraft:flying_speed']?.value),
      canFly: components['minecraft:can_fly'] !== undefined ? true : undefined,

      // ========== 战斗属性 ==========
      attackDamage: this.extractFloat(components['minecraft:attack_damage']?.value),
      attackRange: this.extractFloat(components['minecraft:attack']?.range),
      knockbackResistance: this.extractFloat(components['minecraft:knockback_resistance']?.value),
      followRange: this.extractFloat(components['minecraft:follow_range']?.value),

      // ========== 族群 ==========
      families: this.extractFamilies(components['minecraft:type_family']),

      // ========== 交互属性 ==========
      isTameable: components['minecraft:tameable'] !== undefined ? true : undefined,
      isBreedable: components['minecraft:breedable'] !== undefined ? true : undefined,
      isRideable: components['minecraft:rideable'] !== undefined ? true : undefined,
      hasTradeTable: components['minecraft:trade_table'] !== undefined ? true : undefined,
      lootTable: this.extractString(components['minecraft:loot']?.table),
      experienceReward: this.extractExperienceReward(components['minecraft:experience_reward']),

      // ========== 特殊能力 ==========
      fireImmune: components['minecraft:fire_immune'] !== undefined ? true : undefined,
      burnsInDaylight: components['minecraft:burns_in_daylight'] !== undefined ? true : undefined,
      isBreathable: components['minecraft:breathable'] !== undefined ? true : undefined,
      canExplode: components['minecraft:explode'] !== undefined ? true : undefined,

      // ========== 生成属性 ==========
      isSpawnable: this.extractBoolean(description.is_spawnable),
      isSummonable: this.extractBoolean(description.is_summonable),
      isExperimental: this.extractBoolean(description.is_experimental),
      spawnCategory: this.extractString(description.spawn_category),

      // ========== 状态标志 ==========
      isBaby: components['minecraft:is_baby'] !== undefined ? true : undefined,
      isTamed: components['minecraft:is_tamed'] !== undefined ? true : undefined,
      isSaddled: components['minecraft:is_saddled'] !== undefined ? true : undefined,

      // ========== 完整组件（保留原始结构）==========
      components,
      componentGroups: minecraftEntity.component_groups || undefined,
      events: minecraftEntity.events || undefined,

      // ========== 元数据 ==========
      metadata: {
        sourceVersion: metadata.sourceVersion,
        upgradePath: metadata.upgradePath,
        warnings: metadata.warnings,
        sourceFile: metadata.sourceFile
      }
    };

    logger.debug(`[EntityConverter] Converted entity: ${identifier}`);
    results.push(standardEntity);

    return results;
  }

  /**
   * 提取显示名称
   * 来源：minecraft:nameable.default_trigger 或 minecraft:nameable.always_show
   */
  private static extractDisplayName(components: any): string | undefined {
    const nameable = components['minecraft:nameable'];
    if (!nameable) return undefined;

    // 尝试提取默认名称
    if (typeof nameable === 'string') return nameable;
    if (typeof nameable === 'object' && nameable !== null) {
      return this.extractString(nameable.default_trigger) ||
             this.extractString(nameable.always_show);
    }

    return undefined;
  }

  /**
   * 提取碰撞箱
   * 来源：minecraft:collision_box
   */
  private static extractCollisionBox(component: any): StandardEntity['collisionBox'] {
    if (!component || typeof component !== 'object') return undefined;

    const width = this.extractFloat(component.width);
    const height = this.extractFloat(component.height);

    if (width === undefined || height === undefined) return undefined;

    return { width, height };
  }

  /**
   * 提取族群列表
   * 来源：minecraft:type_family.family
   */
  private static extractFamilies(component: any): string[] | undefined {
    if (!component) return undefined;

    // family 可能是数组或单个字符串
    const family = component.family;
    if (Array.isArray(family)) {
      return family.filter(f => typeof f === 'string');
    }

    if (typeof family === 'string') {
      return [family];
    }

    return undefined;
  }

  /**
   * 提取经验值奖励
   * 来源：minecraft:experience_reward
   * 注意：可能是数字或复杂对象（on_death）
   */
  private static extractExperienceReward(component: any): number | undefined {
    if (component === undefined || component === null) return undefined;

    // 直接是数字
    if (typeof component === 'number') {
      return Math.floor(component);
    }

    // 对象形式（on_death）
    if (typeof component === 'object' && component.on_death !== undefined) {
      const onDeath = component.on_death;

      // on_death 可能是数字或范围对象
      if (typeof onDeath === 'number') {
        return Math.floor(onDeath);
      }

      // 范围对象（取最小值）
      if (typeof onDeath === 'object' && onDeath !== null) {
        const min = this.extractInt(onDeath.min);
        const max = this.extractInt(onDeath.max);

        if (min !== undefined) return min;
        if (max !== undefined) return max;
      }
    }

    return undefined;
  }
}
