package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 弹药配置 (Ammunition)
 *
 * <p>定义射击武器可用的弹药类型和获取规则。
 *
 * @since 0.3.0
 */
public record Ammunition(
        /**
         * 弹药物品标识符
         * <p>例如："minecraft:arrow", "minecraft:tipped_arrow"
         */
        @JsonProperty("item") String item,

        /**
         * 是否使用副手弹药
         * <p>true = 优先从副手获取弹药
         * <p>false = 不使用副手弹药
         */
        @JsonProperty("useOffhand") boolean useOffhand,

        /**
         * 是否搜索背包弹药
         * <p>true = 在整个背包中搜索弹药
         * <p>false = 仅使用快捷栏弹药
         */
        @JsonProperty("searchInventory") boolean searchInventory,

        /**
         * 是否在创造模式中消耗弹药
         * <p>true = 创造模式也消耗弹药
         * <p>false = 创造模式无限弹药
         */
        @JsonProperty("useInCreative") boolean useInCreative
) {
}
