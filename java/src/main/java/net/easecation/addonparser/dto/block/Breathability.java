package net.easecation.addonparser.dto.block;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 可呼吸性 (Breathability)
 * 定义方块是否允许实体在其中呼吸（影响窒息判定）
 *
 * <p>用途：
 * <ul>
 *   <li>{@code SOLID}: 实心方块，实体头部在其中会窒息（如石头、泥土）</li>
 *   <li>{@code AIR}: 可呼吸方块，实体可以在其中正常呼吸（如空气、水）</li>
 * </ul>
 *
 * @since 0.2.0
 */
public enum Breathability {
    /**
     * 实心方块（会导致窒息）
     */
    @JsonProperty("solid") SOLID,

    /**
     * 可呼吸方块（如空气）
     */
    @JsonProperty("air") AIR
}
