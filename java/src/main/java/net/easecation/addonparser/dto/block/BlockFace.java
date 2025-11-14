package net.easecation.addonparser.dto.block;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 方块面方向 (Block Face)
 * 用于定义方块的六个面以及特殊方向
 *
 * @since 0.2.0
 */
public enum BlockFace {
    /**
     * 上方（+Y）
     */
    @JsonProperty("up") UP,

    /**
     * 下方（-Y）
     */
    @JsonProperty("down") DOWN,

    /**
     * 北方（-Z）
     */
    @JsonProperty("north") NORTH,

    /**
     * 南方（+Z）
     */
    @JsonProperty("south") SOUTH,

    /**
     * 东方（+X）
     */
    @JsonProperty("east") EAST,

    /**
     * 西方（-X）
     */
    @JsonProperty("west") WEST,

    /**
     * 任意侧面（北、南、东、西）
     */
    @JsonProperty("side") SIDE,

    /**
     * 所有方向
     */
    @JsonProperty("all") ALL
}
