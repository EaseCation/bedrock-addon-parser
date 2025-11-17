package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * 地表构建器
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record SurfaceBuilder(
    @JsonProperty("type") @Nullable String type,
    @JsonProperty("top_material") @Nullable String topMaterial,
    @JsonProperty("mid_material") @Nullable String midMaterial,
    @JsonProperty("sea_floor_material") @Nullable String seaFloorMaterial,
    @JsonProperty("foundation_material") @Nullable String foundationMaterial,
    @JsonProperty("sea_material") @Nullable String seaMaterial,
    @JsonProperty("sea_floor_depth") @Nullable Integer seaFloorDepth
) {}
