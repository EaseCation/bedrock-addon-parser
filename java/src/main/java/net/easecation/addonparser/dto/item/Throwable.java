package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;

/**
 * Throwable 组件配置（投掷物）
 *
 * <p>定义物品的投掷行为，通常用于雪球、末影珍珠、药水等投掷类物品。
 *
 * <p>对应原始 JSON 中的 minecraft:throwable 组件。
 *
 * @since 0.3.0
 */
public record Throwable(
        /**
         * 是否播放挥臂动画
         * <p>true = 投掷时播放手臂挥动动画
         */
        @JsonProperty("doSwingAnimation") boolean doSwingAnimation,

        /**
         * 发射力量比例
         * <p>控制投掷物的初始速度倍率
         * <p>默认值通常为 1.0
         */
        @JsonProperty("launchPowerScale") float launchPowerScale,

        /**
         * 最大蓄力时间（秒）
         * <p>玩家按住使用键的最长时间
         */
        @JsonProperty("maxDrawDuration") @Nullable Float maxDrawDuration,

        /**
         * 最小蓄力时间（秒）
         * <p>投掷生效所需的最短蓄力时间
         */
        @JsonProperty("minDrawDuration") @Nullable Float minDrawDuration,

        /**
         * 最大发射力量
         * <p>蓄力完成后的最大投掷力度
         */
        @JsonProperty("maxLaunchPower") @Nullable Float maxLaunchPower,

        /**
         * 是否根据蓄力时间缩放力量
         * <p>true = 蓄力时间越长，投掷力度越大
         * <p>false = 力量固定，不受蓄力时间影响
         */
        @JsonProperty("scalePowerByDrawDuration") boolean scalePowerByDrawDuration
) {
}
