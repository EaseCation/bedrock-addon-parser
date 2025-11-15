/**
 * JS Runtime 主入口文件
 *
 * 该模块被 GraalVM 加载，提供 Addon 解析、版本升级、标准化转换功能
 */

import { AddonParser } from './parser/AddonParser';

/**
 * 文件信息接口
 */
export interface JsonFile {
  path: string;      // 相对路径，如 "blocks/custom_block.json"
  content: string;   // 文件内容（JSON 字符串）
}

/**
 * 标准化 Addon 输出
 */
export interface StandardAddon {
  blocks: StandardBlock[];
  items: StandardItem[];
  entities: StandardEntity[];
  metadata: AddonMetadata;
}

/**
 * 标准化 Block 定义
 */
export interface StandardBlock {
  identifier: string;
  displayName?: string;
  hardness?: number;
  friction?: number;
  lightEmission?: number;
  lightDampening?: number;
  explosionResistance?: number;
  isWaterloggable?: boolean;
  isSolid?: boolean;
  canContainLiquid?: boolean;
  geometry?: string;
  materialInstances?: Record<string, MaterialInstance>;
  collisionBox?: BoundingBox;
  selectionBox?: BoundingBox;
  lootTable?: string;
  flammable?: FlammableProperties;
  mapColor?: MapColor;
  placementFilter?: PlacementFilter;
  breathability?: Breathability;
  components?: Record<string, any>;
  metadata: BlockMetadata;
}

/**
 * 标准化 Item 定义
 */
export interface StandardItem {
  // 核心字段
  identifier: string;
  displayName?: string;

  // 基础属性
  maxStackSize?: number;
  maxDurability?: number;
  nutrition?: number;
  saturationModifier?: number;

  // 战斗属性
  damage?: number;
  protection?: number;
  wearableSlot?: string;

  // 工具属性
  isDigger?: boolean;
  digger?: Digger;
  isEnchantable?: boolean;
  enchantableSlot?: string;
  enchantableValue?: number;

  // 视觉属性
  icon?: string;
  hasGlint?: boolean;
  rarity?: string;
  useAnimation?: string;
  dyeable?: Dyeable;

  // 功能标志
  isFood?: boolean;
  isFuel?: boolean;
  fuelDuration?: number;
  isProjectile?: boolean;
  isThrowable?: boolean;
  throwable?: Throwable;
  allowOffHand?: boolean;
  handEquipped?: boolean;
  canPlaceBlock?: boolean;
  canPlaceEntity?: boolean;
  isRepairable?: boolean;
  repairable?: Repairable;
  isCompostable?: boolean;
  compostChance?: number;

  // 高级属性
  cooldownDuration?: number;
  cooldownCategory?: string;
  shooter?: Shooter;

  // 保留字段
  components?: Record<string, any>;
  metadata: ItemMetadata;
}

/**
 * 标准化 Entity 定义
 */
export interface StandardEntity {
  // 核心字段
  identifier: string;
  displayName?: string;
  runtimeIdentifier?: string;

  // 生命属性
  maxHealth?: number;
  defaultHealth?: number;

  // 物理属性
  collisionBox?: EntityCollisionBox;
  scale?: number;
  isPushable?: boolean;

  // 移动属性
  movementSpeed?: number;
  flyingSpeed?: number;
  canFly?: boolean;

  // 战斗属性
  attackDamage?: number;
  attackRange?: number;
  knockbackResistance?: number;
  followRange?: number;

  // 族群
  families?: string[];

  // 交互属性
  isTameable?: boolean;
  isBreedable?: boolean;
  isRideable?: boolean;
  hasTradeTable?: boolean;
  lootTable?: string;
  experienceReward?: number;

  // 特殊能力
  fireImmune?: boolean;
  burnsInDaylight?: boolean;
  isBreathable?: boolean;
  canExplode?: boolean;

  // 生成属性
  isSpawnable?: boolean;
  isSummonable?: boolean;
  isExperimental?: boolean;
  spawnCategory?: string;

  // 状态标志
  isBaby?: boolean;
  isTamed?: boolean;
  isSaddled?: boolean;

  // 保留字段
  components?: Record<string, any>;
  componentGroups?: Record<string, ComponentGroup>;
  events?: Record<string, EntityEvent>;

  // 元数据
  metadata: EntityMetadata;
}

export interface BoundingBox {
  origin: number[];  // [x, y, z]
  size: number[];    // [width, height, depth]
}

/**
 * 材质实例（Material Instance）
 * 定义方块面的材质和渲染属性
 *
 * 原始 JSON 中可以是字符串或对象，标准化后统一为对象结构
 */
export interface MaterialInstance {
  /** 纹理名称（如 "stone", "grass_side"） */
  texture: string | null;

  /**
   * 环境光遮蔽
   * 可以是布尔值（启用/禁用）或数值（0.0-1.0 遮蔽强度）
   */
  ambientOcclusion: boolean | number | null;

  /** 面向调光（根据面的朝向调整亮度） */
  faceDimming: boolean | null;

  /** 渲染方法 */
  renderMethod: 'opaque' | 'double_sided' | 'blend' | 'alpha_test' | 'alpha_test_single_sided' | null;
}

/**
 * 可燃性属性 (Flammable Properties)
 * 定义方块的可燃性和燃烧行为
 *
 * 原始 JSON 类型：boolean | object
 */
export interface FlammableProperties {
  /** 是否可燃 */
  isFlammable: boolean | null;
  /** 着火概率修正值（0-100） */
  catchChanceModifier: number | null;
  /** 燃尽速度修正值（0-100） */
  destroyChanceModifier: number | null;
}

/**
 * 地图颜色 (Map Color)
 * 定义方块在地图上显示的颜色
 *
 * 原始 JSON 类型：string | [number, number, number]
 */
export interface MapColor {
  /** 红色通道值（0-255） */
  red: number;
  /** 绿色通道值（0-255） */
  green: number;
  /** 蓝色通道值（0-255） */
  blue: number;
}

/**
 * 挖掘工具配置 (Digger Config)
 * 定义物品的挖掘行为
 *
 * 对应原始 JSON 中的 minecraft:digger 组件
 */
export interface Digger {
  /** 是否使用效率附魔加成 */
  useEfficiency: boolean;
  /** 挖掘速度配置列表 */
  destroySpeeds: DestroySpeed[];
}

/**
 * 挖掘速度配置 (Destroy Speed)
 * 定义对特定方块或方块标签的挖掘速度倍率
 *
 * 原始 JSON 类型：block 字段可能是 string | {tags: string}（多态类型）
 * 标准化后拆分为 block 和 blockTags 两个字段，其中一个为 null
 */
export interface DestroySpeed {
  /** 目标方块标识符（如 "minecraft:stone"），与 blockTags 互斥 */
  block: string | null;
  /** 目标方块标签（如 "stone"），与 block 互斥 */
  blockTags: string | null;
  /** 挖掘速度倍率（如 8.0 表示 8 倍速度） */
  speed: number;
}

/**
 * 可染色配置 (Dyeable Config)
 * 定义物品的可染色属性
 *
 * 对应原始 JSON 中的 minecraft:dyeable 组件
 * 通常用于皮革盔甲等物品
 */
export interface Dyeable {
  /** 默认染色颜色，null 表示无默认颜色或使用原始纹理颜色 */
  defaultColor: MapColor | null;
}

/**
 * 修复配置 (Repairable Config)
 * 定义物品的修复配方
 *
 * 对应原始 JSON 中的 minecraft:repairable 组件
 * 通常用于工具和盔甲等耐久类物品
 */
export interface Repairable {
  /** 修复配方列表 */
  repairItems: RepairItem[];
}

/**
 * 修复配方项 (Repair Item)
 * 定义可用于修复的物品及修复数值
 *
 * 原始 JSON 中 repair_amount 字段可能是 number 或 string
 */
export interface RepairItem {
  /** 可用于修复的物品标识符列表 */
  items: string[];
  /** 修复数值，null 表示使用默认修复值 */
  repairAmount: number | null;
}

/**
 * 投掷物配置 (Throwable Config)
 * 定义物品的投掷行为
 *
 * 对应原始 JSON 中的 minecraft:throwable 组件
 * 通常用于雪球、末影珍珠、药水等投掷类物品
 */
export interface Throwable {
  /** 是否播放挥臂动画 */
  doSwingAnimation: boolean;
  /** 发射力量比例 */
  launchPowerScale: number;
  /** 最大蓄力时间（秒） */
  maxDrawDuration: number | null;
  /** 最小蓄力时间（秒） */
  minDrawDuration: number | null;
  /** 最大发射力量 */
  maxLaunchPower: number | null;
  /** 是否根据蓄力时间缩放力量 */
  scalePowerByDrawDuration: boolean;
}

/**
 * 射击武器配置 (Shooter Config)
 * 定义远程武器的射击行为和弹药配置
 *
 * 对应原始 JSON 中的 minecraft:shooter 组件
 * 通常用于弓、弩等远程武器
 */
export interface Shooter {
  /** 弹药配置列表 */
  ammunition: Ammunition[];
  /** 是否在拉弓时充能 */
  chargeOnDraw: boolean;
  /** 最大拉弓时间（秒） */
  maxDrawDuration: number | null;
  /** 是否根据拉弓时间缩放力量 */
  scalePowerByDrawDuration: boolean;
}

/**
 * 弹药配置 (Ammunition)
 * 定义射击武器可用的弹药类型和获取规则
 */
export interface Ammunition {
  /** 弹药物品标识符 */
  item: string;
  /** 是否使用副手弹药 */
  useOffhand: boolean;
  /** 是否搜索背包弹药 */
  searchInventory: boolean;
  /** 是否在创造模式中消耗弹药 */
  useInCreative: boolean;
}

/**
 * 放置过滤器 (Placement Filter)
 * 定义方块的放置规则
 */
export interface PlacementFilter {
  /** 放置条件列表 */
  conditions?: PlacementCondition[];
}

/**
 * 放置条件 (Placement Condition)
 * 定义方块可以放置在哪些面上
 */
export interface PlacementCondition {
  /** 允许放置的方块面方向列表 */
  allowedFaces?: BlockFace[];
  /** 允许依附的方块类型列表 */
  blockFilter?: string[];
}

/**
 * 方块面方向 (Block Face)
 */
export type BlockFace = 'up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all';

/**
 * 可呼吸性 (Breathability)
 * 定义方块是否允许实体在其中呼吸
 */
export type Breathability = 'solid' | 'air';

export interface EntityCollisionBox {
  width: number;   // 碰撞箱宽度（X/Z 轴）
  height: number;  // 碰撞箱高度（Y 轴）
}

/**
 * 组件组 (Component Group)
 * 用于实体的动态行为系统
 */
export interface ComponentGroup {
  /** 组件字典 */
  components?: Record<string, any>;
}

/**
 * 实体事件 (Entity Event)
 * 定义实体响应特定触发条件时的行为
 */
export interface EntityEvent {
  /** 添加组件组 */
  add?: ComponentGroupChange;
  /** 移除组件组 */
  remove?: ComponentGroupChange;
  /** 随机化选择 */
  randomize?: RandomizeEvent[];
  /** 序列执行 */
  sequence?: SequenceEvent[];
  /** 触发其他事件 */
  trigger?: string;
}

/** 组件组变更操作 */
export interface ComponentGroupChange {
  componentGroups?: string[];
}

/** 随机化事件选项 */
export interface RandomizeEvent {
  weight: number;
  add?: ComponentGroupChange;
  remove?: ComponentGroupChange;
  trigger?: string;
}

/** 序列事件步骤 */
export interface SequenceEvent {
  add?: ComponentGroupChange;
  remove?: ComponentGroupChange;
  trigger?: string;
  filters?: any;
}

export interface BlockMetadata {
  sourceVersion: string;
  upgradePath: string[];
  warnings: string[];
  sourceFile: string;
}

export interface ItemMetadata {
  sourceVersion: string;
  upgradePath: string[];
  warnings: string[];
  sourceFile: string;
}

export interface EntityMetadata {
  sourceVersion: string;
  upgradePath: string[];
  warnings: string[];
  sourceFile: string;
}

export interface AddonMetadata {
  addonName?: string;
  description?: string;
  warnings: string[];
  totalFiles: number;
}

/**
 * 主函数：解析 Addon 文件
 *
 * @param filesJson - JSON 字符串，包含文件列表
 * @returns 标准化的 Addon JSON 字符串
 */
export function parseAddon(filesJson: string): string {
  try {
    // 解析输入
    const files: JsonFile[] = JSON.parse(filesJson);

    // 使用 AddonParser 解析
    const parser = new AddonParser();
    const result = parser.parse(files);

    // 返回 JSON 字符串
    return JSON.stringify(result, null, 2);
  } catch (error) {
    // 错误处理
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;

    throw new Error(`Failed to parse addon: ${errorMessage}\n${errorStack || ''}`);
  }
}

/**
 * 导出为 GraalVM 兼容的格式
 */
export default {
  parseAddon
};
