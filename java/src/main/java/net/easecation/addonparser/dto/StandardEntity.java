package net.easecation.addonparser.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;
import java.util.Map;

/**
 * 标准化的 Entity DTO
 * 统一不同版本的 Entity 格式，提供扁平化的常用字段
 *
 * @since 0.2.0
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record StandardEntity(
        // ========== 核心字段 ==========
        /**
         * 实体标识符（必需）
         * 例如：minecraft:zombie, mypack:custom_entity
         * 来源：description.identifier
         */
        @JsonProperty("identifier") String identifier,

        /**
         * 显示名称
         * 来源：minecraft:nameable
         */
        @JsonProperty("displayName") @Nullable String displayName,

        /**
         * 运行时标识符
         * 用于指定实体的基础行为模板
         * 例如：minecraft:zombie（使用原版僵尸的行为）
         * 来源：description.runtime_identifier
         */
        @JsonProperty("runtimeIdentifier") @Nullable String runtimeIdentifier,

        // ========== 生命属性 ==========
        /**
         * 最大生命值
         * 来源：minecraft:health.max
         */
        @JsonProperty("maxHealth") @Nullable Float maxHealth,

        /**
         * 默认生命值
         * 来源：minecraft:health.value
         */
        @JsonProperty("defaultHealth") @Nullable Float defaultHealth,

        // ========== 物理属性 ==========
        /**
         * 碰撞箱
         * 来源：minecraft:collision_box
         */
        @JsonProperty("collisionBox") @Nullable EntityCollisionBox collisionBox,

        /**
         * 缩放比例
         * 来源：minecraft:scale.value
         * 默认：1.0
         */
        @JsonProperty("scale") @Nullable Float scale,

        /**
         * 是否可被推动
         * 来源：minecraft:pushable 组件存在性
         */
        @JsonProperty("isPushable") @Nullable Boolean isPushable,

        // ========== 移动属性 ==========
        /**
         * 移动速度
         * 来源：minecraft:movement.value
         */
        @JsonProperty("movementSpeed") @Nullable Float movementSpeed,

        /**
         * 飞行速度
         * 来源：minecraft:flying_speed.value
         */
        @JsonProperty("flyingSpeed") @Nullable Float flyingSpeed,

        /**
         * 是否可以飞行
         * 来源：minecraft:can_fly 组件存在性
         */
        @JsonProperty("canFly") @Nullable Boolean canFly,

        // ========== 战斗属性 ==========
        /**
         * 攻击伤害
         * 来源：minecraft:attack_damage.value
         */
        @JsonProperty("attackDamage") @Nullable Float attackDamage,

        /**
         * 攻击范围
         * 来源：minecraft:attack.range
         */
        @JsonProperty("attackRange") @Nullable Float attackRange,

        /**
         * 击退抗性（0.0-1.0）
         * 来源：minecraft:knockback_resistance.value
         */
        @JsonProperty("knockbackResistance") @Nullable Float knockbackResistance,

        /**
         * 跟随距离（AI 检测范围）
         * 来源：minecraft:follow_range.value
         */
        @JsonProperty("followRange") @Nullable Float followRange,

        // ========== 族群 ==========
        /**
         * 实体族群列表
         * 用于目标选择和行为判断
         * 例如：["mob", "zombie", "undead"]
         * 来源：minecraft:type_family.family
         */
        @JsonProperty("families") @Nullable List<String> families,

        // ========== 交互属性 ==========
        /**
         * 是否可驯服
         * 来源：minecraft:tameable 组件存在性
         */
        @JsonProperty("isTameable") @Nullable Boolean isTameable,

        /**
         * 是否可繁殖
         * 来源：minecraft:breedable 组件存在性
         */
        @JsonProperty("isBreedable") @Nullable Boolean isBreedable,

        /**
         * 是否可骑乘
         * 来源：minecraft:rideable 组件存在性
         */
        @JsonProperty("isRideable") @Nullable Boolean isRideable,

        /**
         * 是否有交易表
         * 来源：minecraft:trade_table 组件存在性
         */
        @JsonProperty("hasTradeTable") @Nullable Boolean hasTradeTable,

        /**
         * 掉落物表路径
         * 例如："loot_tables/entities/custom_mob.json"
         * 来源：minecraft:loot.table
         */
        @JsonProperty("lootTable") @Nullable String lootTable,

        /**
         * 经验值奖励
         * 来源：minecraft:experience_reward
         */
        @JsonProperty("experienceReward") @Nullable Integer experienceReward,

        // ========== 特殊能力 ==========
        /**
         * 是否免疫火焰伤害
         * 来源：minecraft:fire_immune 组件存在性
         */
        @JsonProperty("fireImmune") @Nullable Boolean fireImmune,

        /**
         * 是否在白天燃烧
         * 来源：minecraft:burns_in_daylight 组件存在性
         */
        @JsonProperty("burnsInDaylight") @Nullable Boolean burnsInDaylight,

        /**
         * 是否需要呼吸（水下窒息）
         * 来源：minecraft:breathable 组件存在性
         */
        @JsonProperty("isBreathable") @Nullable Boolean isBreathable,

        /**
         * 是否会爆炸
         * 来源：minecraft:explode 组件存在性
         */
        @JsonProperty("canExplode") @Nullable Boolean canExplode,

        // ========== 生成属性 ==========
        /**
         * 是否可自然生成
         * 来源：description.is_spawnable
         */
        @JsonProperty("isSpawnable") @Nullable Boolean isSpawnable,

        /**
         * 是否可用 /summon 召唤
         * 来源：description.is_summonable
         */
        @JsonProperty("isSummonable") @Nullable Boolean isSummonable,

        /**
         * 是否为实验性特性
         * 来源：description.is_experimental
         */
        @JsonProperty("isExperimental") @Nullable Boolean isExperimental,

        /**
         * 生成类别
         * 来源：description.spawn_category（v1.20.81+）
         * 值：monster, creature, ambient, water_creature, etc.
         */
        @JsonProperty("spawnCategory") @Nullable String spawnCategory,

        // ========== 状态标志 ==========
        /**
         * 是否为幼年
         * 来源：minecraft:is_baby 组件存在性
         */
        @JsonProperty("isBaby") @Nullable Boolean isBaby,

        /**
         * 是否已驯服
         * 来源：minecraft:is_tamed 组件存在性
         */
        @JsonProperty("isTamed") @Nullable Boolean isTamed,

        /**
         * 是否已装备鞍
         * 来源：minecraft:is_saddled 组件存在性
         */
        @JsonProperty("isSaddled") @Nullable Boolean isSaddled,

        // ========== 完整组件（保留原始结构）==========
        /**
         * 完整的组件对象（保留所有原始组件数据）
         * 包含属性组件和行为组件（minecraft:behavior.*）
         * 用于需要访问完整组件信息的场景
         */
        @JsonProperty("components") @Nullable Map<String, Object> components,

        /**
         * 组件组定义（用于动态添加/移除组件）
         * 例如：{"minecraft:zombie_adult": {...}, "minecraft:zombie_baby": {...}}
         */
        @JsonProperty("componentGroups") @Nullable Map<String, Map<String, Object>> componentGroups,

        /**
         * 事件定义（用于触发组件组切换）
         * 例如：{"minecraft:entity_born": {...}, "minecraft:entity_transformed": {...}}
         */
        @JsonProperty("events") @Nullable Map<String, Object> events,

        // ========== 元数据 ==========
        /**
         * 元数据（版本信息、升级路径、警告、源文件）
         */
        @JsonProperty("metadata") EntityMetadata metadata
) {
    /**
     * 实体碰撞箱
     * 定义实体的物理碰撞范围
     */
    public record EntityCollisionBox(
            /**
             * 碰撞箱宽度（X/Z 轴）
             */
            @JsonProperty("width") Float width,

            /**
             * 碰撞箱高度（Y 轴）
             */
            @JsonProperty("height") Float height
    ) {
    }
}
