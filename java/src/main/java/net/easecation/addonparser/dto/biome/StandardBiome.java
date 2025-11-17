package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;
import java.util.Map;

/**
 * 标准化 Biome DTO
 * <p>
 * 经过版本升级和标准化转换后的统一生物群系数据结构
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record StandardBiome(
    // 核心字段
    @JsonProperty("identifier") String identifier,

    // 气候属性
    @JsonProperty("temperature") @Nullable Float temperature,
    @JsonProperty("downfall") @Nullable Float downfall,
    @JsonProperty("snow_accumulation") @Nullable List<Float> snowAccumulation,

    // 世界生成规则
    @JsonProperty("overworld_generation_rules") @Nullable OverworldGenerationRules overworldGenerationRules,
    @JsonProperty("nether_generation_rules") @Nullable NetherGenerationRules netherGenerationRules,

    // 高度参数
    @JsonProperty("overworld_height") @Nullable OverworldHeight overworldHeight,
    @JsonProperty("mountain_parameters") @Nullable MountainParameters mountainParameters,

    // 地表材质
    @JsonProperty("surface_builder") @Nullable SurfaceBuilder surfaceBuilder,
    @JsonProperty("surface_material_adjustments") @Nullable SurfaceMaterialAdjustments surfaceMaterialAdjustments,

    // 标签
    @JsonProperty("tags") @Nullable List<String> tags,

    // 保留完整组件
    @JsonProperty("components") @Nullable Map<String, Object> components,

    // 元数据
    @JsonProperty("metadata") BiomeMetadata metadata
) {
    /**
     * Biome 元数据
     */
    public record BiomeMetadata(
        @JsonProperty("sourceVersion") String sourceVersion,
        @JsonProperty("upgradePath") List<String> upgradePath,
        @JsonProperty("warnings") List<String> warnings,
        @JsonProperty("sourceFile") String sourceFile
    ) {}
}
