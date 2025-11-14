package net.easecation.addonparser.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.Map;

/**
 * 组件组 (Component Group)
 * 用于实体的动态行为系统，允许在运行时添加或移除组件
 *
 * <p>组件组是 Minecraft 实体行为的核心机制，通过事件触发可以：
 * <ul>
 *   <li>切换实体状态（如村民的职业、僵尸的愤怒状态）</li>
 *   <li>动态修改属性（如生命值、速度）</li>
 *   <li>添加或移除行为（如攻击、逃跑）</li>
 * </ul>
 *
 * <p>示例：
 * <pre>
 * "minecraft:angry": {
 *   "minecraft:angry": {
 *     "duration": 25,
 *     "broadcast_anger": true
 *   }
 * }
 * </pre>
 *
 * @since 0.2.0
 */
public record ComponentGroup(
    /**
     * 组件字典
     * 键：组件名称（如 "minecraft:angry", "minecraft:health"）
     * 值：组件配置对象
     *
     * <p>注意：这里保留 Map<String, Object> 是合理的，因为：
     * <ul>
     *   <li>组件组可以包含任意组件</li>
     *   <li>组件类型高度动态（100+ 种组件）</li>
     *   <li>不同组件的配置结构完全不同</li>
     * </ul>
     */
    @JsonProperty("components") @Nullable Map<String, Object> components
) {
}
