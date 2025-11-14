package net.easecation.addonparser.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;
import java.util.Map;

/**
 * 标准化的 Block 定义（最新版本格式）
 *
 * <p>所有旧版本 Block 都会升级到此格式
 *
 * @since 0.2.0
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record StandardBlock(
        // 核心字段
        @JsonProperty("identifier") String identifier,
        @JsonProperty("displayName") @Nullable String displayName,

        // 物理属性（扁平化）
        @JsonProperty("hardness") @Nullable Float hardness,
        @JsonProperty("friction") @Nullable Float friction,
        @JsonProperty("lightEmission") @Nullable Float lightEmission,  // 统一为 0.0-1.0
        @JsonProperty("lightDampening") @Nullable Integer lightDampening,
        @JsonProperty("explosionResistance") @Nullable Float explosionResistance,

        // 行为属性
        @JsonProperty("isWaterloggable") @Nullable Boolean isWaterloggable,
        @JsonProperty("isSolid") @Nullable Boolean isSolid,
        @JsonProperty("canContainLiquid") @Nullable Boolean canContainLiquid,

        // 视觉属性
        @JsonProperty("geometry") @Nullable String geometry,
        @JsonProperty("materialInstances") @Nullable Map<String, Object> materialInstances,
        @JsonProperty("collisionBox") @Nullable BoundingBox collisionBox,
        @JsonProperty("selectionBox") @Nullable BoundingBox selectionBox,

        // 高级组件（保留原始结构）
        @JsonProperty("components") @Nullable Map<String, Object> components,

        // 元数据
        @JsonProperty("metadata") BlockMetadata metadata
) {
    public record BoundingBox(
            @JsonProperty("origin") List<Float> origin,  // [x, y, z]
            @JsonProperty("size") List<Float> size       // [width, height, depth]
    ) {
    }

    public record BlockMetadata(
            @JsonProperty("sourceVersion") String sourceVersion,       // "1.19.40"
            @JsonProperty("upgradePath") List<String> upgradePath,     // ["1.19.40", "1.20.10", "1.21.60"]
            @JsonProperty("warnings") List<String> warnings,            // 转换警告
            @JsonProperty("sourceFile") String sourceFile              // "blocks/custom_block.json"
    ) {
    }
}
