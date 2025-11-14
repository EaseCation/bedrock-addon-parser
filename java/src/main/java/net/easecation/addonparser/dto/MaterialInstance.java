package net.easecation.addonparser.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * 材质实例 DTO
 * 定义方块的材质渲染属性
 *
 * <p>在原始 JSON 中，MaterialInstance 可以是字符串或对象：
 * <ul>
 *   <li>字符串格式：直接指定纹理名称，如 "stone"</li>
 *   <li>对象格式：完整的渲染配置</li>
 * </ul>
 *
 * <p>在标准化 DTO 中，所有格式都被归一化为固定的对象结构，
 * 字符串格式会被转换为 MaterialInstance(texture="stone", 其他字段=null)
 *
 * @since 0.2.0
 */
public record MaterialInstance(
    /**
     * 纹理名称
     * 引用资源包中的纹理文件（不含扩展名）
     * 例如：stone, grass_side, custom_texture
     */
    @JsonProperty("texture") @Nullable String texture,

    /**
     * 环境光遮蔽
     * 可以是布尔值或数值
     * <ul>
     *   <li>Boolean: true/false 启用/禁用环境光遮蔽</li>
     *   <li>Number: 0.0-1.0 自定义遮蔽强度</li>
     * </ul>
     */
    @JsonProperty("ambient_occlusion") @Nullable Object ambientOcclusion,

    /**
     * 面向调光
     * 根据面的朝向调整亮度（如方块顶部更亮，底部更暗）
     */
    @JsonProperty("face_dimming") @Nullable Boolean faceDimming,

    /**
     * 渲染方法
     * 定义方块的渲染模式和透明度处理
     */
    @JsonProperty("render_method") @Nullable RenderMethod renderMethod
) {
    /**
     * 渲染方法枚举
     */
    public enum RenderMethod {
        /**
         * 不透明渲染（默认）
         * 完全不透明，性能最优
         */
        @JsonProperty("opaque")
        OPAQUE,

        /**
         * 双面渲染
         * 正反两面都渲染，适用于植物、玻璃等
         */
        @JsonProperty("double_sided")
        DOUBLE_SIDED,

        /**
         * 混合渲染
         * 支持半透明效果，如彩色玻璃
         */
        @JsonProperty("blend")
        BLEND,

        /**
         * Alpha 测试渲染
         * 基于 Alpha 通道的透明/不透明二值判定
         * 适用于树叶、栅栏等
         */
        @JsonProperty("alpha_test")
        ALPHA_TEST,

        /**
         * Alpha 测试单面渲染
         * 结合 Alpha 测试和单面渲染
         */
        @JsonProperty("alpha_test_single_sided")
        ALPHA_TEST_SINGLE_SIDED
    }
}
