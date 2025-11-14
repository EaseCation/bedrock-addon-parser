package net.easecation.addonparser.dto.block;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * 可燃性属性 (Flammable Properties)
 * 定义方块的可燃性和燃烧行为
 *
 * <p>原始 JSON Schema 类型：{@code boolean | object}
 * <ul>
 *   <li>{@code true} → 使用默认可燃性参数</li>
 *   <li>{@code false} → 方块不可燃</li>
 *   <li>{@code {...}} → 自定义可燃性参数</li>
 * </ul>
 *
 * <p>标准化后统一为对象结构，通过 {@code isFlammable} 字段区分状态
 *
 * @since 0.2.0
 */
public record FlammableProperties(
    /**
     * 是否可燃
     * - true: 方块可燃
     * - false: 方块不可燃
     * - null: 使用游戏默认值
     */
    @JsonProperty("is_flammable") @Nullable Boolean isFlammable,

    /**
     * 着火概率修正值
     * 范围：0-100
     * 值越大，方块越容易被点燃
     */
    @JsonProperty("catch_chance_modifier") @Nullable Integer catchChanceModifier,

    /**
     * 燃尽速度修正值
     * 范围：0-100
     * 值越大，方块燃烧速度越快
     */
    @JsonProperty("destroy_chance_modifier") @Nullable Integer destroyChanceModifier
) {
}
