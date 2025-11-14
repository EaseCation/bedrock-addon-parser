package net.easecation.addonparser.dto.block;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 地图颜色 (Map Color)
 * 定义方块在地图上显示的颜色
 *
 * <p>原始 JSON Schema 类型：{@code string | [number, number, number]}
 * <ul>
 *   <li>{@code "#FFFFFF"} → 十六进制颜色字符串</li>
 *   <li>{@code [R, G, B]} → RGB 数组（0-255）</li>
 * </ul>
 *
 * <p>标准化后统一为 RGB 对象结构
 *
 * @since 0.2.0
 */
public record MapColor(
    /**
     * 红色通道值
     * 范围：0-255
     */
    @JsonProperty("red") Integer red,

    /**
     * 绿色通道值
     * 范围：0-255
     */
    @JsonProperty("green") Integer green,

    /**
     * 蓝色通道值
     * 范围：0-255
     */
    @JsonProperty("blue") Integer blue
) {
    /**
     * 转换为十六进制颜色字符串
     * @return 格式如 "#FFFFFF"
     */
    public String toHexString() {
        return String.format("#%02X%02X%02X", red, green, blue);
    }
}
