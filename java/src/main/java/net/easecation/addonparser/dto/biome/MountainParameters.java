package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * 山地参数
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record MountainParameters(
    @JsonProperty("peaks_factor") @Nullable Float peaksFactor,
    @JsonProperty("steep_material_adjustment") @Nullable SteepMaterialAdjustment steepMaterialAdjustment,
    @JsonProperty("top_slide") @Nullable TopSlide topSlide
) {
    /**
     * 陡峭材质调整
     */
    public record SteepMaterialAdjustment(
        @JsonProperty("material") @Nullable String material,
        @JsonProperty("north_slopes") @Nullable Boolean northSlopes,
        @JsonProperty("south_slopes") @Nullable Boolean southSlopes,
        @JsonProperty("east_slopes") @Nullable Boolean eastSlopes,
        @JsonProperty("west_slopes") @Nullable Boolean westSlopes
    ) {}

    /**
     * 顶部滑动参数
     */
    public record TopSlide(
        @JsonProperty("enabled") @Nullable Boolean enabled
    ) {}
}
