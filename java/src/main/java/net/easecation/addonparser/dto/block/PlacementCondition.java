package net.easecation.addonparser.dto.block;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * 放置条件 (Placement Condition)
 * 定义方块可以放置在哪些面上，以及需要依附的方块类型
 *
 * <p>示例用途：
 * <ul>
 *   <li>火把只能放在实心方块的侧面和顶面</li>
 *   <li>梯子只能放在墙壁上</li>
 *   <li>按钮可以放在任何实心方块表面</li>
 * </ul>
 *
 * @since 0.2.0
 */
public record PlacementCondition(
    /**
     * 允许放置的方块面方向列表
     * 例如：["up", "side"] 表示只能放在顶面和侧面
     */
    @JsonProperty("allowed_faces") @Nullable List<BlockFace> allowedFaces,

    /**
     * 允许依附的方块类型列表
     * 例如：["minecraft:stone", "minecraft:dirt"]
     * 如果为空或 null，则可以放在任何方块上
     */
    @JsonProperty("block_filter") @Nullable List<String> blockFilter
) {
}
