/**
 * Block 标准化转换器
 *
 * 将升级后的 Block JSON 转换为 StandardBlock 格式
 */

import { StandardConverter } from './StandardConverter';
import type { StandardBlock } from '../index';
import { createLogger } from '../utils/logger';

const logger = createLogger('BlockConverter');

export class BlockConverter extends StandardConverter {
  /**
   * 转换为标准化格式
   *
   * @param blockData - 已升级到最新版本的 Block JSON 对象
   * @param metadata - 元数据（版本、升级路径、警告、文件路径）
   * @returns 标准化的 Block 对象数组
   */
  public static convertToStandard(
    blockData: any,
    metadata: {
      sourceVersion: string;
      upgradePath: string[];
      warnings: string[];
      sourceFile: string;
    }
  ): StandardBlock[] {
    const results: StandardBlock[] = [];

    // 获取 minecraft:block 定义
    const minecraftBlock = blockData['minecraft:block'];
    if (!minecraftBlock) {
      logger.warn(`[BlockConverter] No minecraft:block found in ${metadata.sourceFile}`);
      return results;
    }

    const description = minecraftBlock.description || {};
    const components = minecraftBlock.components || {};

    // 提取标识符
    const identifier = description.identifier;
    if (!identifier) {
      logger.error(`[BlockConverter] Missing identifier in ${metadata.sourceFile}`);
      return results;
    }

    // 构建 StandardBlock
    const standardBlock: StandardBlock = {
      identifier,
      displayName: this.extractString(components['minecraft:display_name']),

      // 物理属性
      hardness: this.extractHardness(components['minecraft:destructible_by_mining']) ?? undefined,
      friction: this.extractFloat(components['minecraft:friction']),
      lightEmission: this.extractLightEmission(components['minecraft:light_emission']) ?? undefined,
      lightDampening: this.extractInt(components['minecraft:light_dampening']),
      explosionResistance: this.extractExplosionResistance(components['minecraft:destructible_by_explosion']) ?? undefined,

      // 行为属性
      isWaterloggable: components['minecraft:waterloggable'] !== undefined ? true : undefined,
      isSolid: undefined,  // 需要推断逻辑
      canContainLiquid: undefined,  // 需要推断逻辑

      // 视觉属性
      geometry: this.extractGeometry(components['minecraft:geometry']) ?? undefined,
      materialInstances: this.normalizeMaterialInstances(components['minecraft:material_instances']) ?? undefined,
      collisionBox: this.extractBoundingBox(components['minecraft:collision_box']) ?? undefined,
      selectionBox: this.extractBoundingBox(components['minecraft:selection_box']) ?? undefined,

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

    logger.debug(`[BlockConverter] Converted block: ${identifier}`);
    results.push(standardBlock);

    return results;
  }

  /**
   * 提取硬度（从 destructible_by_mining）
   */
  private static extractHardness(component: any): number | null {
    if (!component) return null;
    if (typeof component === 'boolean') return null;
    if (typeof component === 'object' && component.seconds_to_destroy !== undefined) {
      return component.seconds_to_destroy;
    }
    return null;
  }

  /**
   * 提取爆炸抗性（从 destructible_by_explosion）
   */
  private static extractExplosionResistance(component: any): number | null {
    if (!component) return null;
    if (component === false) return null;  // 不可破坏
    if (typeof component === 'object' && component.explosion_resistance !== undefined) {
      return component.explosion_resistance;
    }
    return null;
  }

  /**
   * 提取光照发射值（统一为 0.0-1.0 范围）
   */
  private static extractLightEmission(component: any): number | null {
    if (component === undefined || component === null) return null;

    // light_emission 是 0-15 的整数
    const lightValue = typeof component === 'number' ? component : null;
    if (lightValue === null) return null;

    // 转换为 0.0-1.0 范围
    return lightValue / 15.0;
  }

  /**
   * 提取 geometry 信息
   */
  private static extractGeometry(component: any): string | null {
    if (!component) return null;
    if (typeof component === 'string') return component;
    if (typeof component === 'object' && component !== null) {
      return component.identifier || component.value || null;
    }
    return null;
  }

  /**
   * 提取 BoundingBox
   */
  private static extractBoundingBox(component: any): StandardBlock['collisionBox'] {
    if (!component || component === false) return undefined;

    // 布尔值 true → 默认碰撞箱
    if (component === true) {
      return {
        origin: [-8, 0, -8],
        size: [16, 16, 16]
      };
    }

    // 对象
    if (typeof component === 'object' && component !== null) {
      const origin = component.origin || [];
      const size = component.size || [];

      return {
        origin: [
          origin[0] ?? 0,
          origin[1] ?? 0,
          origin[2] ?? 0
        ],
        size: [
          size[0] ?? 16,
          size[1] ?? 16,
          size[2] ?? 16
        ]
      };
    }

    return undefined;
  }

  /**
   * 归一化材质实例
   * 将 string | object 多态类型统一转换为固定的对象结构
   *
   * 转换规则：
   * - 字符串 "stone" → { texture: "stone", ambientOcclusion: null, ... }
   * - 对象 {...} → 规范化所有字段，缺失字段设为 null
   *
   * @param raw 原始 material_instances 组件
   * @returns 归一化后的材质实例字典
   */
  private static normalizeMaterialInstances(
    raw: any
  ): Record<string, import('../index').MaterialInstance> | undefined {
    if (!raw || typeof raw !== 'object') {
      return undefined;
    }

    const result: Record<string, import('../index').MaterialInstance> = {};

    for (const [face, value] of Object.entries(raw)) {
      // 简单字符串格式 → 完整对象
      if (typeof value === 'string') {
        result[face] = {
          texture: value,
          ambientOcclusion: null,
          faceDimming: null,
          renderMethod: null
        };
      }
      // 对象格式 → 规范化所有字段
      else if (typeof value === 'object' && value !== null) {
        const obj = value as any;
        result[face] = {
          texture: obj.texture ?? null,
          ambientOcclusion: obj.ambient_occlusion ?? null,
          faceDimming: obj.face_dimming ?? null,
          renderMethod: obj.render_method ?? null
        };
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }
}
