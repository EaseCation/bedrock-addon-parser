/**
 * behavior/blocks/format/minecraft.block.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:19.151Z
 */

/**
 * The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * A block property.
 */
export type Property =
  | PropertyValue[]
  | {
      [k: string]: unknown;
    };
/**
 * The value of this property.
 */
export type PropertyValue = boolean | number | string;
/**
 * The amount of light this block will filter out. Higher value means more light will be filtered out (0 - 15).
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftBlockLightFilter = number;
/**
 * The amount of light this block will emit in a range [0.0, 1.0].
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftBlockLightEmission = number;
/**
 * When pushed by a piston the block breaks.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftBreakonpush = boolean;
/**
 * Property describing the breathability of the block, and whether it's treated as a solid block or a block of air.
 */
export type Breathability = 'solid' | 'air';
/**
 * Specifies the creative group for the block.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftCreativeCategory = boolean;
/**
 * Sets the destroy time property for the block. Greater numbers result in greater mining times. Time is measured in seconds with base equipment.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftDestroyTime = number;
/**
 * Specifies the language file key that maps to what text will be displayed when you hover over the block.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftDisplayName = string;
/**
 * Can only be set to false or an object, it disables the collision of the block with entities.
 */
export type EntityCollision =
  | false
  | {
      origin?: Origin;
      size?: Size;
    };
/**
 * Minimal position Bounds of the collision box.
 */
export type Origin = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the box of the component.
 */
export type Size = [] | [number] | [number, number] | [number, number, number];
/**
 * Sets the explosion resistance for this block.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftExplosionResistance = number;
/**
 * Property describing the friction for this block. Friction effects an entities movements when it walks on the block.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftFriction = number;
/**
 * The geometry description identifier to use, this identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftGeometry = string;
/**
 * An Immovable block cannot be pushed by pistons.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftImmovable = boolean;
/**
 * The path to the loot table, relative to the behavior pack. Path string is limited to 256 characters.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftLoot = string;
/**
 * A color represented as a hex value. This will be the color rendered to a map.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftMapColor = string;
/**
 * UNDOCUMENTED.
 */
export type RenderMethod = 'blend' | 'opaque' | 'alpha_test';
/**
 * Blocks with those components won't stick to stickyPistons.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftOnlypistonpush = boolean;
/**
 * Can only be set to false, it disables the collision of the block with entities.
 */
export type PickCollision =
  | false
  | {
      origin?: Origin1;
      size?: Size1;
    };
/**
 * Minimal position Bounds of the collision box.
 */
export type Origin1 = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the box of the component.
 */
export type Size1 = [] | [number] | [number, number] | [number, number, number];
/**
 * List of any of the following strings: up, down, north, south, east, west, side, all.
 */
export type AllowedFaces = ('up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all')[];
/**
 * List of blocks (can use tags to specify them) that this block can be placed against in the allowed_faces direction.
 */
export type BlockFilter = string[];
/**
 * List of conditions where the block can be placed/survive.
 */
export type Conditions = Condition[];
/**
 * This component makes it so actors can't jump when walking on this block.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftPreventsjumping = boolean;
/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export type OnTick = string;
/**
 * The Range between which the component will trigger his event.
 */
export type Range = unknown[];
/**
 * This is the block's rotation around the center of the cube in degrees. The rotation order is x-y-z.
 */
export type Rotation = [] | [number] | [number, number] | [number, number, number];
/**
 * The Range between which the component will trigger his event.
 */
export type Range1 = [] | [number] | [number, number];
/**
 * Sets the block as unwalkable. Mobs would not attempt to path over top of it when the value is set to true.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftUnwalkable = boolean;
/**
 * UNDOCUMENTED.
 */
export type MolangString180 = string;
/**
 * UNDOCUMENTED.
 */
export type Permutations = Permutation[];

/**
 * A custom block definition.
 */
export interface BlockDefinitions {
  description: BlockDescription;
  events?: Events;
  components: Component;
  permutations?: Permutations;
}
/**
 * The description for this block.
 */
export interface BlockDescription {
  identifier: BlockceptionMinecraftBlockIdentifier;
  /**
   * If this block is experimental, it will only be registered if the world is marked as experimantal.
   */
  is_experimental?: boolean;
  /**
   * Whether or not to register this block to the creative inventory menu.
   */
  register_to_creative_menu?: boolean;
  properties?: Properties;
}
/**
 * UNDOCUMENTED.
 */
export interface Properties {
  [k: string]: Property;
}
/**
 * UNDOCUMENTED.
 */
export interface Events {
  'minecraft:on_fall_on'?: Event;
  'minecraft:on_interact'?: Event;
  'minecraft:on_placed'?: Event;
  'minecraft:on_player_destroyed'?: Event;
  'minecraft:on_player_placing'?: Event;
  'minecraft:on_step_off'?: Event;
  'minecraft:on_step_on'?: Event;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Event {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface Component {
  'minecraft:block_light_filter'?: BlockceptionMinecraftBehaviorBlocksMinecraftBlockLightFilter;
  'minecraft:block_light_emission'?: BlockceptionMinecraftBehaviorBlocksMinecraftBlockLightEmission;
  'minecraft:breakonpush'?: BlockceptionMinecraftBehaviorBlocksMinecraftBreakonpush;
  'minecraft:breathability'?: Breathability;
  'minecraft:creative_category'?: BlockceptionMinecraftBehaviorBlocksMinecraftCreativeCategory;
  'minecraft:destroy_time'?: BlockceptionMinecraftBehaviorBlocksMinecraftDestroyTime;
  'minecraft:display_name'?: BlockceptionMinecraftBehaviorBlocksMinecraftDisplayName;
  'minecraft:entity_collision'?: EntityCollision;
  'minecraft:explosion_resistance'?: BlockceptionMinecraftBehaviorBlocksMinecraftExplosionResistance;
  'minecraft:flammable'?: Flammable;
  'minecraft:friction'?: BlockceptionMinecraftBehaviorBlocksMinecraftFriction;
  'minecraft:geometry'?: BlockceptionMinecraftBehaviorBlocksMinecraftGeometry;
  'minecraft:immovable'?: BlockceptionMinecraftBehaviorBlocksMinecraftImmovable;
  'minecraft:loot'?: BlockceptionMinecraftBehaviorBlocksMinecraftLoot;
  'minecraft:map_color'?: BlockceptionMinecraftBehaviorBlocksMinecraftMapColor;
  'minecraft:material_instances'?: MaterialInstances;
  'minecraft:onlypistonpush'?: BlockceptionMinecraftBehaviorBlocksMinecraftOnlypistonpush;
  'minecraft:part_visibility'?: PartVisibility;
  'minecraft:on_fall_on'?: OnFallOn;
  'minecraft:on_interact'?: OnFallOn1;
  'minecraft:on_placed'?: OnPlaced;
  'minecraft:on_player_destroyed'?: OnPlayerDestroyed;
  'minecraft:on_player_placing'?: OnPlayerPlacing;
  'minecraft:on_step_off'?: OnStepOff;
  'minecraft:on_step_on'?: OnStepOn;
  'minecraft:pick_collision'?: PickCollision;
  'minecraft:placement_filter'?: PlacementFilter;
  'minecraft:preventsjumping'?: BlockceptionMinecraftBehaviorBlocksMinecraftPreventsjumping;
  'minecraft:random_ticking'?: RandomTicking;
  'minecraft:rotation'?: Rotation;
  'minecraft:ticking'?: Ticking;
  'minecraft:unit_cube'?: UnitCube;
  'minecraft:unwalkable'?: BlockceptionMinecraftBehaviorBlocksMinecraftUnwalkable;
}
/**
 * Describes the flammable properties for this block.
 */
export interface Flammable {
  /**
   * How likely the block will be destroyed by flames when on fire. Value must be greater than or equal to 0.
   */
  burn_odds?: number;
  /**
   * How likely the block will catch flame when next to a fire. Value must be greater than or equal to 0.
   */
  flame_odds?: number;
}
/**
 * Maps face or material_instance names in a geometry file to an actual material instance. Material instance can either be a full material instance or a name to another already defined instance
 */
export interface MaterialInstances {
  '*'?: MaterialInstance;
  [k: string]: MaterialInstance;
}
/**
 * A single material instance.
 */
export interface MaterialInstance {
  /**
   * UNDOCUMENTED.
   */
  ambient_occlusion?: boolean;
  /**
   * UNDOCUMENTED.
   */
  face_dimming?: boolean;
  render_method?: RenderMethod;
  /**
   * UNDOCUMENTED.
   */
  texture?: string;
}
/**
 * Maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/falseSupported queries include 'has_block_property', 'block_property', and other queries that can evaluate without knowledge of the block's in-game positional or player affected data.
 */
export interface PartVisibility {
  [k: string]: string;
}
/**
 * Describes event for this block.
 */
export interface OnFallOn {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The minimum distance in blocks that an actor needs to fall to trigger this event.
   */
  min_fall_distance?: number;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Describes event for this block.
 */
export interface OnFallOn1 {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Describes event for this block.
 */
export interface OnPlaced {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Describes event for this block.
 */
export interface OnPlayerDestroyed {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Describes event for this block.
 */
export interface OnPlayerPlacing {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Describes event for this block.
 */
export interface OnStepOff {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Describes event for this block.
 */
export interface OnStepOn {
  /**
   * The condition of event to be executed on the block.
   */
  condition?: string;
  /**
   * The event executed on the block.
   */
  event?: string;
  /**
   * The target of event executed on the block.
   */
  target?: string;
  [k: string]: unknown;
}
/**
 * Sets rules for under what conditions the block can be placed/survive.
 */
export interface PlacementFilter {
  conditions?: Conditions;
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Condition {
  allowed_faces?: AllowedFaces;
  block_filter?: BlockFilter;
  [k: string]: unknown;
}
/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface RandomTicking {
  on_tick?: OnTick;
  /**
   * Does the event loop.
   */
  looping?: boolean;
  range?: Range;
}
/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface Ticking {
  /**
   * Does the event loop.
   */
  looping?: boolean;
  range?: Range1;
  on_tick?: OnTick1;
}
/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface OnTick1 {
  [k: string]: unknown;
}
/**
 * Specifies that a unit cube is to be used with tessellation.
 */
export interface UnitCube {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface Permutation {
  condition?: MolangString180;
  components?: Component1;
}
/**
 * UNDOCUMENTED.
 */
export interface Component1 {
  'minecraft:block_light_filter'?: BlockceptionMinecraftBehaviorBlocksMinecraftBlockLightFilter;
  'minecraft:block_light_emission'?: BlockceptionMinecraftBehaviorBlocksMinecraftBlockLightEmission;
  'minecraft:breakonpush'?: BlockceptionMinecraftBehaviorBlocksMinecraftBreakonpush;
  'minecraft:breathability'?: Breathability;
  'minecraft:creative_category'?: BlockceptionMinecraftBehaviorBlocksMinecraftCreativeCategory;
  'minecraft:destroy_time'?: BlockceptionMinecraftBehaviorBlocksMinecraftDestroyTime;
  'minecraft:display_name'?: BlockceptionMinecraftBehaviorBlocksMinecraftDisplayName;
  'minecraft:entity_collision'?: EntityCollision;
  'minecraft:explosion_resistance'?: BlockceptionMinecraftBehaviorBlocksMinecraftExplosionResistance;
  'minecraft:flammable'?: Flammable;
  'minecraft:friction'?: BlockceptionMinecraftBehaviorBlocksMinecraftFriction;
  'minecraft:geometry'?: BlockceptionMinecraftBehaviorBlocksMinecraftGeometry;
  'minecraft:immovable'?: BlockceptionMinecraftBehaviorBlocksMinecraftImmovable;
  'minecraft:loot'?: BlockceptionMinecraftBehaviorBlocksMinecraftLoot;
  'minecraft:map_color'?: BlockceptionMinecraftBehaviorBlocksMinecraftMapColor;
  'minecraft:material_instances'?: MaterialInstances;
  'minecraft:onlypistonpush'?: BlockceptionMinecraftBehaviorBlocksMinecraftOnlypistonpush;
  'minecraft:part_visibility'?: PartVisibility;
  'minecraft:on_fall_on'?: OnFallOn;
  'minecraft:on_interact'?: OnFallOn1;
  'minecraft:on_placed'?: OnPlaced;
  'minecraft:on_player_destroyed'?: OnPlayerDestroyed;
  'minecraft:on_player_placing'?: OnPlayerPlacing;
  'minecraft:on_step_off'?: OnStepOff;
  'minecraft:on_step_on'?: OnStepOn;
  'minecraft:pick_collision'?: PickCollision;
  'minecraft:placement_filter'?: PlacementFilter;
  'minecraft:preventsjumping'?: BlockceptionMinecraftBehaviorBlocksMinecraftPreventsjumping;
  'minecraft:random_ticking'?: RandomTicking;
  'minecraft:rotation'?: Rotation;
  'minecraft:ticking'?: Ticking;
  'minecraft:unit_cube'?: UnitCube;
  'minecraft:unwalkable'?: BlockceptionMinecraftBehaviorBlocksMinecraftUnwalkable;
}
