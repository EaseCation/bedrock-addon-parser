package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;
import java.util.Map;

/**
 * 地表材质调整
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record SurfaceMaterialAdjustments(
    @JsonProperty("adjustments") @Nullable List<SurfaceMaterialAdjustment> adjustments
) {
    /**
     * 单个地表材质调整
     */
    public record SurfaceMaterialAdjustment(
        @JsonProperty("height_range") @Nullable List<Float> heightRange,
        @JsonProperty("noise_range") @Nullable List<Float> noiseRange,
        @JsonProperty("materials") @Nullable Map<String, String> materials
    ) {}
}
