package net.easecation.addonparser.dto.item;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.Map;

/**
 * 标准化的 Item DTO
 * 统一不同版本的 Item 格式，提供扁平化的常用字段
 *
 * @since 0.2.0
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record StandardItem(
        // ========== 核心字段 ==========
        /**
         * 物品标识符（必需）
         * 例如：minecraft:diamond_sword, mypack:custom_item
         */
        @JsonProperty("identifier") String identifier,

        /**
         * 显示名称
         */
        @JsonProperty("displayName") @Nullable String displayName,

        // ========== 基础属性 ==========
        /**
         * 最大堆叠数量
         * 来源：minecraft:max_stack_size
         * 默认：64（未指定时）
         */
        @JsonProperty("maxStackSize") @Nullable Integer maxStackSize,

        /**
         * 最大耐久度
         * 来源：minecraft:durability.max_durability（v1.20.81+）或 minecraft:max_damage（旧版）
         */
        @JsonProperty("maxDurability") @Nullable Integer maxDurability,

        /**
         * 食物营养值
         * 来源：minecraft:food.nutrition
         */
        @JsonProperty("nutrition") @Nullable Integer nutrition,

        /**
         * 食物饱和度修饰符
         * 来源：minecraft:food.saturation_modifier
         */
        @JsonProperty("saturationModifier") @Nullable Double saturationModifier,

        // ========== 战斗属性 ==========
        /**
         * 武器伤害值
         * 来源：minecraft:damage.value（v1.20.81+）
         */
        @JsonProperty("damage") @Nullable Integer damage,

        /**
         * 盔甲防护值
         * 来源：minecraft:armor.protection（旧版）或 minecraft:wearable.protection（v1.20.81+）
         */
        @JsonProperty("protection") @Nullable Integer protection,

        /**
         * 可穿戴装备槽位
         * 来源：minecraft:wearable.slot（v1.20.81+）
         * 例如：slot.armor.head, slot.armor.chest, slot.armor.legs, slot.armor.feet
         */
        @JsonProperty("wearableSlot") @Nullable String wearableSlot,

        // ========== 工具属性 ==========
        /**
         * 是否挖掘工具
         * 来源：minecraft:digger 组件存在性
         */
        @JsonProperty("isDigger") @Nullable Boolean isDigger,

        /**
         * 挖掘工具配置
         * 来源：minecraft:digger 组件（v1.20.81+）
         * 包含挖掘效率和对特定方块的挖掘速度配置
         */
        @JsonProperty("digger") @Nullable Digger digger,

        /**
         * 是否可附魔
         * 来源：minecraft:enchantable 组件存在性（v1.20.81+）
         */
        @JsonProperty("isEnchantable") @Nullable Boolean isEnchantable,

        /**
         * 附魔槽位类型
         * 来源：minecraft:enchantable.slot（v1.20.81+）
         * 例如：sword, bow, armor_head, armor_torso, armor_feet, armor_legs
         */
        @JsonProperty("enchantableSlot") @Nullable String enchantableSlot,

        /**
         * 附魔值（旧版附魔系统）
         * 来源：minecraft:enchantable.value（v1.19.0~v1.20.10）
         */
        @JsonProperty("enchantableValue") @Nullable Integer enchantableValue,

        // ========== 视觉属性 ==========
        /**
         * 图标纹理名称
         * 来源：minecraft:icon（字符串或对象格式）
         */
        @JsonProperty("icon") @Nullable String icon,

        /**
         * 是否有附魔光效
         * 来源：minecraft:glint（v1.20.81+）或 minecraft:foil（旧版）
         */
        @JsonProperty("hasGlint") @Nullable Boolean hasGlint,

        /**
         * 稀有度
         * 来源：minecraft:rarity.value（v1.21.50+）
         * 值：common, uncommon, rare, epic
         * 影响物品名称颜色
         */
        @JsonProperty("rarity") @Nullable String rarity,

        /**
         * 使用动画
         * 来源：minecraft:use_animation.value（v1.20.81+）
         * 值：bow, eat, drink, block, crossbow, spear, camera, etc.
         */
        @JsonProperty("useAnimation") @Nullable String useAnimation,

        /**
         * 可染色配置
         * 来源：minecraft:dyeable 组件（v1.20.81+）
         * 定义物品的默认染色颜色，通常用于皮革盔甲
         */
        @JsonProperty("dyeable") @Nullable Dyeable dyeable,

        // ========== 功能标志 ==========
        /**
         * 是否食物
         * 来源：minecraft:food 组件存在性
         */
        @JsonProperty("isFood") @Nullable Boolean isFood,

        /**
         * 是否燃料
         * 来源：minecraft:fuel 组件存在性
         */
        @JsonProperty("isFuel") @Nullable Boolean isFuel,

        /**
         * 燃料持续时间（秒）
         * 来源：minecraft:fuel.duration
         */
        @JsonProperty("fuelDuration") @Nullable Double fuelDuration,

        /**
         * 是否投射物
         * 来源：minecraft:projectile 组件存在性
         */
        @JsonProperty("isProjectile") @Nullable Boolean isProjectile,

        /**
         * 是否可投掷
         * 来源：minecraft:throwable 组件存在性
         */
        @JsonProperty("isThrowable") @Nullable Boolean isThrowable,

        /**
         * 投掷物配置
         * 来源：minecraft:throwable 组件（v1.20.81+）
         * 包含投掷行为的详细参数（蓄力、力量、动画等）
         */
        @JsonProperty("throwable") @Nullable Throwable throwable,

        /**
         * 是否允许副手持握
         * 来源：minecraft:allow_off_hand（v1.20.81+）
         */
        @JsonProperty("allowOffHand") @Nullable Boolean allowOffHand,

        /**
         * 是否手持装备渲染
         * 来源：minecraft:hand_equipped（v1.20.81+）
         */
        @JsonProperty("handEquipped") @Nullable Boolean handEquipped,

        /**
         * 是否可放置方块
         * 来源：minecraft:block_placer 组件存在性
         */
        @JsonProperty("canPlaceBlock") @Nullable Boolean canPlaceBlock,

        /**
         * 是否可放置实体
         * 来源：minecraft:entity_placer 组件存在性
         */
        @JsonProperty("canPlaceEntity") @Nullable Boolean canPlaceEntity,

        /**
         * 是否可修复
         * 来源：minecraft:repairable 组件存在性
         */
        @JsonProperty("isRepairable") @Nullable Boolean isRepairable,

        /**
         * 修复配置
         * 来源：minecraft:repairable 组件
         * 定义可用于修复的材料和修复耐久度值
         */
        @JsonProperty("repairable") @Nullable Repairable repairable,

        /**
         * 是否可堆肥
         * 来源：minecraft:compostable 组件存在性（v1.21.60+）
         */
        @JsonProperty("isCompostable") @Nullable Boolean isCompostable,

        /**
         * 堆肥概率
         * 来源：minecraft:compostable.compost_chance（v1.21.60+）
         * 范围：0.0-1.0
         */
        @JsonProperty("compostChance") @Nullable Double compostChance,

        // ========== 高级属性 ==========
        /**
         * 冷却时间（秒）
         * 来源：minecraft:cooldown.duration
         */
        @JsonProperty("cooldownDuration") @Nullable Double cooldownDuration,

        /**
         * 冷却类型/分组
         * 来源：minecraft:cooldown.category
         */
        @JsonProperty("cooldownCategory") @Nullable String cooldownCategory,

        /**
         * 射击武器配置
         * 来源：minecraft:shooter 组件
         * 定义远程武器（弓/弩）的弹药和射击行为
         */
        @JsonProperty("shooter") @Nullable Shooter shooter,

        // ========== 完整组件（保留原始结构）==========
        /**
         * 完整的组件对象（保留所有原始组件数据）
         * 用于需要访问完整组件信息的场景
         */
        @JsonProperty("components") @Nullable Map<String, Object> components,

        // ========== 元数据 ==========
        /**
         * 元数据（版本信息、升级路径、警告）
         */
        @JsonProperty("metadata") ItemMetadata metadata
) {
}
