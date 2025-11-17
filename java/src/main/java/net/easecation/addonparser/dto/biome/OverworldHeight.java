package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * Overworld 高度参数
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record OverworldHeight(
    @JsonProperty("noise_type") @Nullable String noiseType,
    @JsonProperty("noise_params") @Nullable List<Float> noiseParams
) {}
