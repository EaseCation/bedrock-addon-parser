package net.easecation.addonparser.dto.biome;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * Nether 生成规则
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record NetherGenerationRules(
    @JsonProperty("target_temperature") @Nullable Float targetTemperature,
    @JsonProperty("target_humidity") @Nullable Float targetHumidity,
    @JsonProperty("target_altitude") @Nullable Float targetAltitude,
    @JsonProperty("target_weirdness") @Nullable Float targetWeirdness,
    @JsonProperty("weight") @Nullable Float weight
) {}
