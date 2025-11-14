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
  isEnchantable?: boolean;
  enchantableSlot?: string;
  enchantableValue?: number;

  // 视觉属性
  icon?: string;
  hasGlint?: boolean;
  rarity?: string;
  useAnimation?: string;

  // 功能标志
  isFood?: boolean;
  isFuel?: boolean;
  fuelDuration?: number;
  isProjectile?: boolean;
  isThrowable?: boolean;
  allowOffHand?: boolean;
  handEquipped?: boolean;
  canPlaceBlock?: boolean;
  canPlaceEntity?: boolean;
  isRepairable?: boolean;
  isCompostable?: boolean;
  compostChance?: number;

  // 高级属性
  cooldownDuration?: number;
  cooldownCategory?: string;

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
