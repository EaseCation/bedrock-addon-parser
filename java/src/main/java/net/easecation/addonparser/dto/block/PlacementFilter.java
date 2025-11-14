package net.easecation.addonparser.dto.block;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * 放置过滤器 (Placement Filter)
 * 定义方块的放置规则，控制方块可以在哪些条件下被放置
 *
 * <p>使用场景：
 * <ul>
 *   <li>火把、梯子等需要依附其他方块的物品</li>
 *   <li>作物只能种植在耕地上</li>
 *   <li>珊瑚只能放置在水中的特定方块上</li>
 * </ul>
 *
 * <p>示例：
 * <pre>
 * "minecraft:placement_filter": {
 *   "conditions": [
 *     {
 *       "allowed_faces": ["up"],
 *       "block_filter": ["minecraft:grass", "minecraft:dirt"]
 *     }
 *   ]
 * }
 * </pre>
 *
 * @since 0.2.0
 */
public record PlacementFilter(
    /**
     * 放置条件列表
     * 满足任一条件即可放置（OR 逻辑）
     */
    @JsonProperty("conditions") @Nullable List<PlacementCondition> conditions
) {
}
