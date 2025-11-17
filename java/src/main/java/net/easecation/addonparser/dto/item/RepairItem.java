package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * 修复配方项 (Repair Item)
 *
 * <p>定义可用于修复的物品及修复数值。
 *
 * <p>原始 JSON 中 repair_amount 字段可能是 number 或 string：
 * <ul>
 *   <li>{@code 100} → 固定修复 100 点耐久</li>
 *   <li>{@code "100%"} → 修复 100% 耐久</li>
 *   <li>{@code null} → 使用默认修复值</li>
 * </ul>
 *
 * <p>标准化后统一为 Float（百分比字符串会被解析为数值）。
 *
 * @since 0.3.0
 */
public record RepairItem(
        /**
         * 可用于修复的物品标识符列表
         * <p>例如：["minecraft:iron_ingot", "minecraft:diamond"]
         */
        @JsonProperty("items") List<String> items,

        /**
         * 修复数值
         * <p>可能是固定数值（如 100.0）或百分比数值（如 1.0 表示 100%）
         * <p>null 表示使用默认修复值（通常是物品的最大耐久度）
         */
        @JsonProperty("repairAmount") @Nullable Float repairAmount
) {
}
