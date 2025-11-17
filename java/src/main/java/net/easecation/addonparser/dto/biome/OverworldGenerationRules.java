package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * Overworld 生成规则
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record OverworldGenerationRules(
    @JsonProperty("generate_for_climates") @Nullable List<ClimateGeneration> generateForClimates,
    @JsonProperty("hills_transformation") @Nullable String hillsTransformation,
    @JsonProperty("mutate_transformation") @Nullable String mutateTransformation,
    @JsonProperty("river_transformation") @Nullable String riverTransformation,
    @JsonProperty("shore_transformation") @Nullable String shoreTransformation
) {
    /**
     * 气候生成配置
     */
    public record ClimateGeneration(
        @JsonProperty("climate") String climate,
        @JsonProperty("weight") @Nullable Integer weight
    ) {}
}
