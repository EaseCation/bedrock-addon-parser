package net.easecation.addonparser.dto.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * 实体事件 (Entity Event)
 * 定义实体响应特定触发条件时的行为
 *
 * <p>事件是 Minecraft 实体行为系统的核心，通过事件可以：
 * <ul>
 *   <li>动态添加或移除组件组</li>
 *   <li>随机化选择不同的行为分支</li>
 *   <li>触发连锁反应（事件触发事件）</li>
 * </ul>
 *
 * <p>示例：
 * <pre>
 * "minecraft:entity_spawned": {
 *   "randomize": [
 *     {
 *       "weight": 95,
 *       "add": {
 *         "component_groups": ["minecraft:adult"]
 *       }
 *     },
 *     {
 *       "weight": 5,
 *       "add": {
 *         "component_groups": ["minecraft:baby"]
 *       }
 *     }
 *   ]
 * }
 * </pre>
 *
 * @since 0.2.0
 */
public record EntityEvent(
    /**
     * 添加组件组
     * 事件触发时，将指定的组件组添加到实体
     */
    @JsonProperty("add") @Nullable ComponentGroupChange add,

    /**
     * 移除组件组
     * 事件触发时，将指定的组件组从实体移除
     */
    @JsonProperty("remove") @Nullable ComponentGroupChange remove,

    /**
     * 随机化选择
     * 从多个选项中根据权重随机选择一个执行
     * 用于创建变体（如不同颜色的羊、不同职业的村民）
     */
    @JsonProperty("randomize") @Nullable List<RandomizeEvent> randomize,

    /**
     * 序列执行
     * 按顺序依次执行多个事件操作
     */
    @JsonProperty("sequence") @Nullable List<SequenceEvent> sequence,

    /**
     * 触发其他事件
     * 通过事件名称触发其他已定义的事件
     */
    @JsonProperty("trigger") @Nullable String trigger
) {
    /**
     * 组件组变更操作
     * 用于添加或移除组件组
     */
    public record ComponentGroupChange(
        /**
         * 组件组名称列表
         * 例如：["minecraft:adult", "minecraft:wild"]
         */
        @JsonProperty("component_groups") @Nullable List<String> componentGroups
    ) {
    }

    /**
     * 随机化事件选项
     * 包含权重和要执行的操作
     */
    public record RandomizeEvent(
        /**
         * 权重值
         * 权重越大，被选中的概率越高
         * 例如：weight=95 和 weight=5 表示 95% 和 5% 的概率
         */
        @JsonProperty("weight") Integer weight,

        /**
         * 添加组件组
         */
        @JsonProperty("add") @Nullable ComponentGroupChange add,

        /**
         * 移除组件组
         */
        @JsonProperty("remove") @Nullable ComponentGroupChange remove,

        /**
         * 触发其他事件
         */
        @JsonProperty("trigger") @Nullable String trigger
    ) {
    }

    /**
     * 序列事件步骤
     * 按顺序执行的单个操作
     */
    public record SequenceEvent(
        /**
         * 添加组件组
         */
        @JsonProperty("add") @Nullable ComponentGroupChange add,

        /**
         * 移除组件组
         */
        @JsonProperty("remove") @Nullable ComponentGroupChange remove,

        /**
         * 触发其他事件
         */
        @JsonProperty("trigger") @Nullable String trigger,

        /**
         * 过滤条件
         * Molang 表达式，只有条件为 true 时才执行此步骤
         */
        @JsonProperty("filters") @Nullable Object filters
    ) {
    }
}
