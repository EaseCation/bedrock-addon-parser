package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * Repairable 组件配置（可修复）
 *
 * <p>定义物品的修复配方，通常用于工具和盔甲等耐久类物品。
 *
 * <p>对应原始 JSON 中的 minecraft:repairable 组件。
 *
 * @since 0.3.0
 */
public record Repairable(
        /**
         * 修复配方列表
         * <p>定义哪些物品可以用于修复，以及修复的耐久度值
         */
        @JsonProperty("repairItems") List<RepairItem> repairItems
) {
}
