package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.easecation.addonparser.dto.block.MapColor;

import javax.annotation.Nullable;

/**
 * Dyeable 组件配置（可染色）
 *
 * <p>定义物品的可染色属性，通常用于皮革盔甲等物品。
 *
 * <p>对应原始 JSON 中的 minecraft:dyeable 组件。
 *
 * <p>原始 JSON 中 default_color 字段可能是字符串或数组（多态类型）：
 * <ul>
 *   <li>{@code "#FF5733"} → 十六进制颜色字符串</li>
 *   <li>{@code [255, 87, 51]} → RGB 数组</li>
 *   <li>{@code []} → 无默认颜色</li>
 * </ul>
 *
 * <p>标准化后统一为 RGB 对象结构（复用 Block 的 MapColor 类型）。
 *
 * @since 0.3.0
 */
public record Dyeable(
        /**
         * 默认染色颜色
         * <p>如果为 null，表示无默认颜色或使用原始纹理颜色
         */
        @JsonProperty("defaultColor") @Nullable MapColor defaultColor
) {
}
