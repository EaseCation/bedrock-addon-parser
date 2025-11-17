package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * 挖掘速度配置
 *
 * <p>定义对特定方块或方块标签的挖掘速度倍率。
 *
 * <p>原始 JSON 中 block 字段可能是字符串或对象（多态类型），
 * 标准化后拆分为 block 和 blockTags 两个字段，其中一个为 null。
 *
 * <p>示例：
 * <ul>
 *   <li>block: "minecraft:stone", blockTags: null → 针对特定方块</li>
 *   <li>block: null, blockTags: "stone" → 针对方块标签</li>
 * </ul>
 *
 * @since 0.3.0
 */
public record DestroySpeed(
        /**
         * 目标方块标识符
         * <p>例如："minecraft:stone", "minecraft:dirt"
         * <p>与 blockTags 互斥，二者之一为 null
         */
        @JsonProperty("block") @Nullable String block,

        /**
         * 目标方块标签
         * <p>例如："stone", "wood", "dirt"
         * <p>与 block 互斥，二者之一为 null
         */
        @JsonProperty("blockTags") @Nullable String blockTags,

        /**
         * 挖掘速度倍率
         * <p>例如：8.0 表示挖掘速度是基础速度的 8 倍
         */
        @JsonProperty("speed") float speed
) {
}
