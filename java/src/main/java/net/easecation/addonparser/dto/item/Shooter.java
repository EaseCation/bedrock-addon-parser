package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * Shooter 组件配置（射击武器）
 *
 * <p>定义远程武器（弓、弩）的射击行为和弹药配置。
 *
 * <p>对应原始 JSON 中的 minecraft:shooter 组件。
 *
 * @since 0.3.0
 */
public record Shooter(
        /**
         * 弹药配置列表
         * <p>定义可用的弹药类型和获取方式
         */
        @JsonProperty("ammunition") List<Ammunition> ammunition,

        /**
         * 是否在拉弓时充能
         * <p>true = 拉弓过程中逐渐充能（如弓）
         * <p>false = 立即充能（如弩）
         */
        @JsonProperty("chargeOnDraw") boolean chargeOnDraw,

        /**
         * 最大拉弓时间（秒）
         * <p>完全充能所需的最长时间
         */
        @JsonProperty("maxDrawDuration") @Nullable Float maxDrawDuration,

        /**
         * 是否根据拉弓时间缩放力量
         * <p>true = 拉弓时间越长，射击力度越大
         * <p>false = 力量固定，不受拉弓时间影响
         */
        @JsonProperty("scalePowerByDrawDuration") boolean scalePowerByDrawDuration
) {
}
