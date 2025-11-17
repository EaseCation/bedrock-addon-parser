/**
 * Biome 标准化转换器
 *
 * 将升级后的 Biome JSON 转换为 StandardBiome 格式
 */

import type { BiomeBehavior as BiomeBehaviorV1_21_80 } from '@easecation/schema-types/types/behavior/biomes/v1_21_80/Biomes';
import { StandardConverter } from './StandardConverter';
import type { StandardBiome } from '../index';
import { createLogger } from '../utils/logger';

const logger = createLogger('BiomeConverter');

export class BiomeConverter extends StandardConverter {
  /**
   * 转换为标准化格式
   *
   * @param biomeData - 已升级到最新版本的 Biome JSON 对象（v1.21.80 格式）
   * @param metadata - 元数据（版本、升级路径、警告、文件路径）
   * @returns 标准化的 Biome 对象数组
   */
  public static convertToStandard(
    biomeData: BiomeBehaviorV1_21_80,
    metadata: {
      sourceVersion: string;
      upgradePath: string[];
      warnings: string[];
      sourceFile: string;
    }
  ): StandardBiome[] {
    const results: StandardBiome[] = [];

    // 获取 minecraft:biome 定义
    const minecraftBiome = biomeData['minecraft:biome'];
    if (!minecraftBiome) {
      logger.warn(`[BiomeConverter] No minecraft:biome found in ${metadata.sourceFile}`);
      return results;
    }

    const description = minecraftBiome.description || {};
    const components = minecraftBiome.components || {};

    // 提取标识符
    const identifier = description.identifier;
    if (!identifier) {
      logger.error(`[BiomeConverter] Missing identifier in ${metadata.sourceFile}`);
      return results;
    }

    // 构建 StandardBiome
    const standardBiome: StandardBiome = {
      identifier,

      // 气候属性（从 minecraft:climate 提取）
      temperature: this.extractTemperature(components['minecraft:climate']),
      downfall: this.extractDownfall(components['minecraft:climate']),
      snowAccumulation: this.extractSnowAccumulation(components['minecraft:climate']),

      // 世界生成规则
      overworldGenerationRules: this.normalizeOverworldGenerationRules(
        components['minecraft:overworld_generation_rules']
      ),
      netherGenerationRules: this.normalizeNetherGenerationRules(
        components['minecraft:multinoise_generation_rules']
      ),

      // 高度参数
      overworldHeight: this.normalizeOverworldHeight(components['minecraft:overworld_height']),
      mountainParameters: this.normalizeMountainParameters(components['minecraft:mountain_parameters']),

      // 地表材质
      surfaceBuilder: this.normalizeSurfaceBuilder((components as any)['minecraft:surface_builder'] || components['minecraft:surface_parameters']),
      surfaceMaterialAdjustments: this.normalizeSurfaceMaterialAdjustments(
        components['minecraft:surface_material_adjustments']
      ),

      // 标签
      tags: this.extractTags(components['minecraft:tags']),

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

    logger.debug(`[BiomeConverter] Converted biome: ${identifier}`);
    results.push(standardBiome);

    return results;
  }

  /**
   * 提取温度值
   */
  private static extractTemperature(climate: any): number | undefined {
    if (!climate || typeof climate !== 'object') return undefined;
    return this.extractFloat(climate.temperature);
  }

  /**
   * 提取降雨值
   */
  private static extractDownfall(climate: any): number | undefined {
    if (!climate || typeof climate !== 'object') return undefined;
    return this.extractFloat(climate.downfall);
  }

  /**
   * 提取积雪范围
   */
  private static extractSnowAccumulation(climate: any): [number, number] | undefined {
    if (!climate || typeof climate !== 'object') return undefined;
    const snowAccumulation = climate.snow_accumulation;

    if (!Array.isArray(snowAccumulation)) return undefined;
    if (snowAccumulation.length === 0) return undefined;
    if (snowAccumulation.length === 1) return [snowAccumulation[0]!, snowAccumulation[0]!];
    return [snowAccumulation[0]!, snowAccumulation[1]!];
  }

  /**
   * 归一化 Overworld 生成规则
   */
  private static normalizeOverworldGenerationRules(component: any): StandardBiome['overworldGenerationRules'] {
    if (!component || typeof component !== 'object') return undefined;

    return {
      generateForClimates: this.normalizeGenerateForClimates(component.generate_for_climates),
      hillsTransformation: this.extractString(component.hills_transformation),
      mutateTransformation: this.extractString(component.mutate_transformation),
      riverTransformation: this.extractString(component.river_transformation),
      shoreTransformation: this.extractString(component.shore_transformation)
    };
  }

  /**
   * 归一化气候生成配置
   */
  private static normalizeGenerateForClimates(raw: any): import('../index').ClimateGeneration[] | undefined {
    if (!Array.isArray(raw)) return undefined;

    return raw.map((item: any) => {
      if (typeof item === 'string') {
        return { climate: item as any, weight: undefined };
      }
      if (Array.isArray(item) && item.length > 0) {
        return {
          climate: item[0] as any,
          weight: item[1] as number | undefined
        };
      }
      return { climate: 'medium' as const, weight: undefined };
    });
  }

  /**
   * 归一化 Nether 生成规则
   */
  private static normalizeNetherGenerationRules(component: any): StandardBiome['netherGenerationRules'] {
    if (!component || typeof component !== 'object') return undefined;

    return {
      targetTemperature: this.extractFloat(component.target_temperature),
      targetHumidity: this.extractFloat(component.target_humidity),
      targetAltitude: this.extractFloat(component.target_altitude),
      targetWeirdness: this.extractFloat(component.target_weirdness),
      weight: this.extractFloat(component.weight)
    };
  }

  /**
   * 归一化 Overworld 高度
   */
  private static normalizeOverworldHeight(component: any): StandardBiome['overworldHeight'] {
    if (!component || typeof component !== 'object') return undefined;

    return {
      noiseType: this.extractString(component.noise_type),
      noiseParams: Array.isArray(component.noise_params) ? component.noise_params as [number] | [number, number] : undefined
    };
  }

  /**
   * 归一化山地参数
   */
  private static normalizeMountainParameters(component: any): StandardBiome['mountainParameters'] {
    if (!component || typeof component !== 'object') return undefined;

    return {
      peaksFactor: this.extractFloat(component.peaks_factor),
      steepMaterialAdjustment: this.normalizeSteepMaterialAdjustment(component.steep_material_adjustment),
      topSlide: this.normalizeTopSlide(component.top_slide)
    };
  }

  /**
   * 归一化陡峭材质调整
   */
  private static normalizeSteepMaterialAdjustment(raw: any): import('../index').SteepMaterialAdjustment | undefined {
    if (!raw || typeof raw !== 'object') return undefined;

    return {
      material: this.extractString(raw.material),
      northSlopes: this.extractBoolean(raw.north_slopes),
      southSlopes: this.extractBoolean(raw.south_slopes),
      eastSlopes: this.extractBoolean(raw.east_slopes),
      westSlopes: this.extractBoolean(raw.west_slopes)
    };
  }

  /**
   * 归一化顶部滑动
   */
  private static normalizeTopSlide(raw: any): import('../index').TopSlide | undefined {
    if (!raw || typeof raw !== 'object') return undefined;

    return {
      enabled: this.extractBoolean(raw.enabled)
    };
  }

  /**
   * 归一化地表构建器
   */
  private static normalizeSurfaceBuilder(component: any): StandardBiome['surfaceBuilder'] {
    if (!component || typeof component !== 'object') return undefined;

    // surface_builder 可能有 builder 子对象
    const builder = component.builder || component;

    return {
      type: this.extractString(builder.type),
      topMaterial: this.extractString(builder.top_material),
      midMaterial: this.extractString(builder.mid_material),
      seaFloorMaterial: this.extractString(builder.sea_floor_material),
      foundationMaterial: this.extractString(builder.foundation_material),
      seaMaterial: this.extractString(builder.sea_material),
      seaFloorDepth: this.extractInt(builder.sea_floor_depth)
    };
  }

  /**
   * 归一化地表材质调整
   */
  private static normalizeSurfaceMaterialAdjustments(
    component: any
  ): StandardBiome['surfaceMaterialAdjustments'] {
    if (!component || typeof component !== 'object') return undefined;

    const adjustments = component.adjustments;
    if (!Array.isArray(adjustments)) return undefined;

    return {
      adjustments: adjustments.map((adj: any) => ({
        heightRange: Array.isArray(adj.height_range) ? adj.height_range as [number, number] : undefined,
        noiseRange: Array.isArray(adj.noise_range) ? adj.noise_range as [number, number] : undefined,
        materials: typeof adj.materials === 'object' ? adj.materials : undefined
      }))
    };
  }

  /**
   * 提取标签数组
   */
  private static extractTags(component: any): string[] | undefined {
    if (!component || typeof component !== 'object') return undefined;

    const tags = component.tags;
    if (!Array.isArray(tags)) return undefined;

    return tags.filter(tag => typeof tag === 'string');
  }
}
