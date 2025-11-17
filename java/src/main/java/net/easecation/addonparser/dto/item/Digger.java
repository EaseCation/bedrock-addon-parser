package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * Digger 组件配置（挖掘工具）
 *
 * <p>定义物品的挖掘行为，包括挖掘效率和对特定方块的挖掘速度。
 *
 * <p>对应原始 JSON 中的 minecraft:digger 组件。
 *
 * @since 0.3.0
 */
public record Digger(
        /**
         * 是否使用效率附魔加成
         * <p>如果为 true，效率附魔会提升挖掘速度
         */
        @JsonProperty("useEfficiency") boolean useEfficiency,

        /**
         * 挖掘速度配置列表
         * <p>定义对不同方块的挖掘速度倍率
         */
        @JsonProperty("destroySpeeds") List<DestroySpeed> destroySpeeds
) {
}
