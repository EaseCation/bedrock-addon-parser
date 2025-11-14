/**
 * behavior/blocks/blocks.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:03.173Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * Determines which category this block/item will be placed under in the inventory and crafting table container screens.
 */
export type Category = 'construction' | 'equipment' | 'items' | 'nature' | 'none';
/**
 * A translation string of an existing group in minecraft to group this block/item under
 */
export type ItemGroup =
  | 'itemGroup.name.anvil'
  | 'itemGroup.name.arrow'
  | 'itemGroup.name.axe'
  | 'itemGroup.name.banner'
  | 'itemGroup.name.banner_pattern'
  | 'itemGroup.name.bed'
  | 'itemGroup.name.boat'
  | 'itemGroup.name.boots'
  | 'itemGroup.name.buttons'
  | 'itemGroup.name.candles'
  | 'itemGroup.name.chalkboard'
  | 'itemGroup.name.chest'
  | 'itemGroup.name.chestboat'
  | 'itemGroup.name.chestplate'
  | 'itemGroup.name.concrete'
  | 'itemGroup.name.concretePowder'
  | 'itemGroup.name.cookedFood'
  | 'itemGroup.name.copper'
  | 'itemGroup.name.coral'
  | 'itemGroup.name.coral_decorations'
  | 'itemGroup.name.crop'
  | 'itemGroup.name.door'
  | 'itemGroup.name.dye'
  | 'itemGroup.name.enchantedBook'
  | 'itemGroup.name.fence'
  | 'itemGroup.name.fenceGate'
  | 'itemGroup.name.firework'
  | 'itemGroup.name.fireworkStars'
  | 'itemGroup.name.flower'
  | 'itemGroup.name.glass'
  | 'itemGroup.name.glassPane'
  | 'itemGroup.name.glazedTerracotta'
  | 'itemGroup.name.goatHorn'
  | 'itemGroup.name.grass'
  | 'itemGroup.name.hanging_sign'
  | 'itemGroup.name.helmet'
  | 'itemGroup.name.hoe'
  | 'itemGroup.name.horseArmor'
  | 'itemGroup.name.leaves'
  | 'itemGroup.name.leggings'
  | 'itemGroup.name.lingeringPotion'
  | 'itemGroup.name.log'
  | 'itemGroup.name.minecart'
  | 'itemGroup.name.miscFood'
  | 'itemGroup.name.mobEgg'
  | 'itemGroup.name.monsterStoneEgg'
  | 'itemGroup.name.mushroom'
  | 'itemGroup.name.netherWartBlock'
  | 'itemGroup.name.ore'
  | 'itemGroup.name.permission'
  | 'itemGroup.name.pickaxe'
  | 'itemGroup.name.planks'
  | 'itemGroup.name.potion'
  | 'itemGroup.name.potterySherds'
  | 'itemGroup.name.pressurePlate'
  | 'itemGroup.name.rail'
  | 'itemGroup.name.rawFood'
  | 'itemGroup.name.record'
  | 'itemGroup.name.sandstone'
  | 'itemGroup.name.sapling'
  | 'itemGroup.name.sculk'
  | 'itemGroup.name.seed'
  | 'itemGroup.name.shovel'
  | 'itemGroup.name.shulkerBox'
  | 'itemGroup.name.sign'
  | 'itemGroup.name.skull'
  | 'itemGroup.name.slab'
  | 'itemGroup.name.smithing_templates'
  | 'itemGroup.name.splashPotion'
  | 'itemGroup.name.stainedClay'
  | 'itemGroup.name.stairs'
  | 'itemGroup.name.stone'
  | 'itemGroup.name.stoneBrick'
  | 'itemGroup.name.sword'
  | 'itemGroup.name.trapdoor'
  | 'itemGroup.name.walls'
  | 'itemGroup.name.wood'
  | 'itemGroup.name.wool'
  | 'itemGroup.name.woolCarpet';
/**
 * The key defines the name of a state, which must be properly namespaced. Each value is an array that contains all of the possible values of that state or an object defining a range of integers.
 */
export type State =
  | BlockceptionMinecraftBehaviorBlockStatesEnum
  | BlockceptionMinecraftBehaviorBlockStatesIntegerRange;
/**
 * @minItems 1
 * @maxItems 16
 */
export type BlockceptionMinecraftBehaviorBlockStatesEnum =
  | ((boolean[] | number[] | string[]) &
      [
        {
          [k: string]: unknown;
        },
      ])
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ]
  | [
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
      {
        [k: string]: unknown;
      },
    ];
/**
 * Block states you wish to enable
 *
 * @minItems 1
 */
export type EnabledStates = [
  'minecraft:cardinal_direction' | 'minecraft:facing_direction',
  ...('minecraft:cardinal_direction' | 'minecraft:facing_direction')[],
];
/**
 * Block states you wish to enable
 *
 * @minItems 1
 * @maxItems 2
 */
export type EnabledStates1 =
  | ['minecraft:block_face' | 'minecraft:vertical_half']
  | [
      'minecraft:block_face' | 'minecraft:vertical_half',
      'minecraft:block_face' | 'minecraft:vertical_half',
    ];
/**
 * This component can be specified as a Boolean. If this component is omitted, the default value for this component is true, which will give your block the default values for its parameters (a collision box the size/shape of a regular block).
 */
export type CollisionBox =
  | boolean
  | {
      origin?: Origin;
      size?: Size;
    };
/**
 * Minimal position of the bounds of the collision box. origin is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Origin = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the collision box. Size is specified as [x, y, z]. origin + size must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Size = [] | [number] | [number, number] | [number, number, number];
/**
 * Defines the tags recipes should define to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters.
 *
 * @maxItems 64
 */
export type CraftingTags = string[];
/**
 * Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.
 */
export type DestructibleByExplosion =
  | boolean
  | {
      /**
       * Describes how resistant the block is to explosion. Greater values mean the block is less likely to break when near an explosion (or has higher resistance to explosions). The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance.
       */
      explosion_resistance?: number;
    };
/**
 * Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.
 */
export type DestructibleByMining =
  | boolean
  | {
      /**
       * Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.
       */
      seconds_to_destroy?: number;
      item_specific_speeds?: ItemSpecificDestroySpeeds;
    };
/**
 * Optional array of objects to describe item-specific block destroy speeds.
 *
 * @minItems 1
 */
export type ItemSpecificDestroySpeeds = [ItemSpecificDestroySpeed, ...ItemSpecificDestroySpeed[]];
/**
 * Specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this component is omitted, the name of the block will be used as the display name.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftDisplayName = string;
/**
 * Describes the flammable properties for this block. If set to true, default values are used. If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.
 */
export type Flammable =
  | boolean
  | {
      /**
       * A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire
       */
      catch_chance_modifier?: number;
      /**
       * A modifier affecting the chance that this block will be destroyed by flames when on fire.
       */
      destroy_chance_modifier?: number;
    };
/**
 * Describes the friction for this block in a range of (0.0-0.9). Friction affects an entity's movement speed when it travels on the block. Greater value results in more friction.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftFriction = number;
/**
 * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
 */
export type Geometry =
  | string
  | {
      /**
       * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      identifier: string;
      bone_visibility?: BoneVisibility;
      /**
       * The description identifer of the block culling rule used to cull this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      culling?: string;
    };
/**
 * Whether or not the bone should be visible. Can be defined as a boolean or a molang expression resulting in a boolean.
 */
export type BoneVisibility1 = boolean | string;
/**
 * The "minecraft:geometry" component that will be used for the item.
 */
export type Geometry1 =
  | string
  | {
      /**
       * The description identifier of the geometry file to use to render this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      identifier: string;
      bone_visibility?: BoneVisibility;
      /**
       * The description identifer of the block culling rule used to cull this block. This identifier must match an existing geometry identifier in any of the currently loaded resource packs.
       */
      culling?: string;
    };
/**
 * The material instance for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".
 */
export type MaterialInstance =
  | string
  | {
      ambient_occlusion?: AmbientOcclusion;
      /**
       * Should this material be dimmed by the direction it's facing?
       */
      face_dimming?: boolean;
      render_method?: RenderMethod;
      /**
       * Texture name for the material.
       */
      texture?: string;
    };
/**
 * Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block.
 */
export type AmbientOcclusion = boolean | number;
/**
 * The render method to use. Must be one of these options: opaque - Used for a regular block texture without an alpha layer. Does not allow for transparency or translucency. double_sided - Used for completely disabling backface culling. blend - Used for a block like stained glass. Allows for transparency and translucency (slightly transparent textures). alpha_test - Used for a block like the vanilla (unstained) glass. Does not allow for translucency, only fully opaque or fully transparent textures. Also disables backface culling.
 */
export type RenderMethod =
  | 'opaque'
  | 'double_sided'
  | 'blend'
  | 'alpha_test'
  | 'alpha_test_single_sided';
/**
 * The amount that light will be dampened when it passes through the block, in a range (0-15). Higher value means the light will be dampened more.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftLightDampening = number;
/**
 * The amount of light this block will emit in a range (0-15). Higher value means more light will be emitted.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftLightEmission = number;
/**
 * The type of liquid this detection rule is for.
 */
export type LiquidType = 'water';
/**
 * How the block reacts to flowing water. Must be one of the following options:
 * "blocking" - The default value for this field. The block stops the liquid from flowing.
 * "broken" - The block is destroyed completely.
 * "popped" - The block is destroyed and its item is spawned.
 * "no_reaction" - The block is unaffected; visually, the liquid will flow through the block.
 */
export type OnLiquidTouches = 'blocking' | 'broken' | 'popped' | 'no_reaction';
/**
 * When a block contains a liquid, controls the directions in which the liquid can't flow out from the block. Also controls the directions in which a block can stop liquid flowing into it if no_reaction is set for the on_liquid_touches field. The default is an empty list; this means that liquid can flow out of all directions by default.
 */
export type StopsLiquidFlowingFromDirection = (
  | 'up'
  | 'down'
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'side'
  | 'all'
)[];
/**
 * The path to the loot table, relative to the behavior pack.
 */
export type BlockceptionMinecraftBehaviorBlocksMinecraftLoot = string;
/**
 * Sets the color of the block when rendered to a map. The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map.
 */
export type MapColor = string | [] | [number] | [number, number] | [number, number, number];
/**
 * List of conditions where the block can be placed/survive. Limited to 64 conditions. Each condition is a JSON Object that must contain at least one (and can contain both) of the parameters allowed_faces or block_filter as shown below.
 *
 * @minItems 1
 */
export type Conditions = [PlacementFilter1, ...PlacementFilter1[]];
/**
 * List of any of the following strings describing which face(s) this block can be placed on: "up", "down", "north", "south", "east", "west", "side", "all". Limited to 6 faces.
 */
export type AllowedFaces = ('up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all')[];
/**
 * [Experimental]
 */
export type BlockFilter1 = BlockceptionMinecraftBlockIdentifier1 | BlockReference;
/**
 * The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block.
 */
export type BlockceptionMinecraftBlockIdentifier1 = string;
/**
 * The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block.
 */
export type BlockceptionMinecraftBlockIdentifier2 = string;
/**
 * The key of property is the name of the block state/property, the value must be the same as the block properties accepted values.
 */
export type StateValue = boolean | number | string;
/**
 * A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags.
 */
export type MolangString180 = string;
/**
 * List of blocks that this block can be placed against in the "allowed_faces" direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states. The fields of a BlockDescriptor are described below.
 */
export type BlockFilter = BlockFilter1[];
/**
 * Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.
 */
export type SelectionBox =
  | boolean
  | {
      origin?: Origin1;
      size?: Size1;
    };
/**
 * Minimal position of the bounds of the selection box. "origin" is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Origin1 = [] | [number] | [number, number] | [number, number, number];
/**
 * Size of each side of the selection box. Size is specified as [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
 */
export type Size1 = [] | [number] | [number, number] | [number, number, number];
/**
 * Amount in degrees the block should be rotated on each axis. "rotation" is specified as [x, y, z] using floating point values and must be axis aligned, otherwise the value will be rounded to the nearest axis-aligned value.
 */
export type Rotation = [] | [number] | [number, number] | [number, number, number];
/**
 * Amount the block should be scaled along each axis. "scale" is specified as [x, y, z] using floating point values.
 */
export type Scale = [] | [number] | [number, number] | [number, number, number];
/**
 * Amount the block should be translated along each axis. "translation" is specified as [x, y, z] using floating point values.
 */
export type Translation = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset to the pivot point around which to apply the scale. "scale_pivot" is specified as [x, y, z] using floating point values.
 */
export type ScalePivot = [] | [number] | [number, number] | [number, number, number];
/**
 * Offset to the pivot point around which to apply the rotation. "rotation_pivot" is specified as [x, y, z] using floating point values.
 */
export type RotationPivot = [] | [number] | [number, number] | [number, number, number];
/**
 * Used to register custom components.
 */
export type CustomComponents = string[];
/**
 * The Range between which the component will trigger his event.
 */
export type IntervalRange = unknown[];
/**
 * A Molang expression that evaluates to true or false to determine if this permutation should be used. For permutation conditions you are limited to using one Molang query: "query.block_state()"
 */
export type Condition = string | boolean;
/**
 * UNDOCUMENTED.
 */
export type Permutations = Permutation[];

/**
 * The minecraft block behavior specification.
 */
export interface BlockBehavior {
  format_version: FormatVersion;
  'minecraft:block': BlockDefinitions;
}
/**
 * A custom block definition.
 */
export interface BlockDefinitions {
  description: BlockDescription;
  components: Component;
  permutations?: Permutations;
}
/**
 * The description for this block.
 */
export interface BlockDescription {
  identifier: BlockceptionMinecraftBlockIdentifier;
  menu_category?: MenuCategory;
  states?: States;
  traits?: Traits;
}
/**
 * Specifies the menu category and group for the block, which determine where this block is placed in the inventory and crafting table container screens. If this field is omitted, the block will not appear in the inventory or crafting table container screens.
 */
export interface MenuCategory {
  category: Category;
  group?: ItemGroup;
  /**
   * Determines whether or not this item can be used with commands such as /give and /setblock. Commands can use blocks by default
   */
  is_hidden_in_commands?: boolean;
}
/**
 * Block states are variables that can be set to different values in order to change how your block looks or behaves.
 */
export interface States {
  [k: string]: State;
}
export interface BlockceptionMinecraftBehaviorBlockStatesIntegerRange {
  values: StateIntegerValueRange;
}
export interface StateIntegerValueRange {
  /**
   * The lowest integer this state supports. This is also used as the default state value.
   */
  min: number;
  /**
   * The highest integer this state supports. This cannot be more than 15 above the minimum.
   */
  max: number;
}
/**
 * A shortcut for creators to use Vanilla block states without needing to define and manage a series of events or triggers on custom blocks
 */
export interface Traits {
  'minecraft:placement_direction'?: PlacementDirection;
  'minecraft:placement_position'?: PlacementPosition;
}
/**
 * Contains information about the player's rotation when the block was placed.
 */
export interface PlacementDirection {
  enabled_states: EnabledStates;
  /**
   * This rotation offset only applies to the horizontal state values
   */
  y_rotation_offset?: number;
}
/**
 * Contains information about where the player placed the block.
 */
export interface PlacementPosition {
  enabled_states: EnabledStates1;
}
/**
 * UNDOCUMENTED.
 */
export interface Component {
  'minecraft:collision_box'?: CollisionBox;
  'minecraft:crafting_table'?: CraftingTable;
  'minecraft:destructible_by_explosion'?: DestructibleByExplosion;
  'minecraft:destructible_by_mining'?: DestructibleByMining;
  'minecraft:display_name'?: BlockceptionMinecraftBehaviorBlocksMinecraftDisplayName;
  'minecraft:flammable'?: Flammable;
  'minecraft:friction'?: BlockceptionMinecraftBehaviorBlocksMinecraftFriction;
  'minecraft:geometry'?: Geometry;
  'minecraft:item_visual'?: ItemVisual;
  'minecraft:light_dampening'?: BlockceptionMinecraftBehaviorBlocksMinecraftLightDampening;
  'minecraft:light_emission'?: BlockceptionMinecraftBehaviorBlocksMinecraftLightEmission;
  'minecraft:liquid_detection'?: LiquidDetection;
  'minecraft:loot'?: BlockceptionMinecraftBehaviorBlocksMinecraftLoot;
  'minecraft:map_color'?: MapColor;
  'minecraft:material_instances'?: MaterialInstances;
  'minecraft:placement_filter'?: PlacementFilter;
  'minecraft:redstone_conductivity'?: RedstoneConductivity;
  'minecraft:selection_box'?: SelectionBox;
  'minecraft:transformation'?: Transformation;
  'minecraft:custom_components'?: CustomComponents;
  'minecraft:tick'?: Tick;
  'minecraft:entity_fall_on'?: EntityFallOn;
  'tag:minecraft:diamond_tier_destructible'?: unknown;
  'tag:minecraft:iron_tier_destructible'?: unknown;
  'tag:minecraft:is_axe_item_destructible'?: unknown;
  'tag:minecraft:is_hoe_item_destructible'?: unknown;
  'tag:minecraft:is_mace_item_destructible'?: unknown;
  'tag:minecraft:is_pickaxe_item_destructible'?: unknown;
  'tag:minecraft:is_shears_item_destructible'?: unknown;
  'tag:minecraft:is_shovel_item_destructible'?: unknown;
  'tag:minecraft:is_sword_item_destructible'?: unknown;
  'tag:minecraft:netherite_tier_destructible'?: unknown;
  'tag:minecraft:stone_tier_destructible'?: unknown;
  [k: string]: Tag;
}
/**
 * Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes.
 */
export interface CraftingTable {
  crafting_tags?: CraftingTags;
  /**
   * Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the "display_name" component. If this block has no "display_name" component, the name displayed will default to the name of the block.
   */
  table_name?: string;
}
export interface ItemSpecificDestroySpeed {
  item:
    | string
    | {
        /**
         * Molang or tag
         */
        tags?: string;
      };
  /**
   * Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.
   */
  destroy_speed: number;
}
/**
 * A list of bones that should be visible when rendering this block. If not specified, all bones will be visible.
 */
export interface BoneVisibility {
  [k: string]: BoneVisibility1;
}
/**
 * The description identifier of the geometry and material used to render the item of this block.
 * Experimental toggles required: Upcoming Creator Features
 */
export interface ItemVisual {
  geometry: Geometry1;
  material_instances: Geometry2;
}
/**
 * The "minecraft:material_instances" component that will be used for the item.
 */
export interface Geometry2 {
  [k: string]: MaterialInstance;
}
/**
 * The definitions for how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type - if multiple are specified, the first will be used and the rest will be ignored.
 * Experimental toggles required: Upcoming Creator Features
 */
export interface LiquidDetection {
  detection_rules?: DefinitionRule[];
}
/**
 * The definition rule that specifies the behavior for one liquid type.
 */
export interface DefinitionRule {
  /**
   * Whether this block can contain the liquid. For example, if the liquid type is water, this means the block can be waterlogged.
   */
  can_contain_liquid?: boolean;
  liquid_type?: LiquidType;
  on_liquid_touches?: OnLiquidTouches;
  stops_liquid_flowing_from_direction?: StopsLiquidFlowingFromDirection;
}
/**
 * The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: "up", "down", "north", "south", "east", "west", or "*". You can also give an instance the name of your choosing such as "my_instance", and then assign it to a face by doing "north":"my_instance".
 */
export interface MaterialInstances {
  [k: string]: MaterialInstance;
}
export interface PlacementFilter {
  conditions?: Conditions;
  [k: string]: unknown;
}
export interface PlacementFilter1 {
  allowed_faces?: AllowedFaces;
  block_filter?: BlockFilter;
}
export interface BlockReference {
  name?: BlockceptionMinecraftBlockIdentifier2;
  states?: States1;
  tags?: MolangString180;
}
export interface States1 {
  [k: string]: StateValue;
}
/**
 * The basic redstone properties of a block; if the component is not provided the default values are used.
 */
export interface RedstoneConductivity {
  /**
   * Specifies if redstone wire can stair-step downward on the block.
   */
  allows_wire_to_step_down?: boolean;
  /**
   * Specifies if the block can be powered by redstone.
   */
  redstone_conductor?: boolean;
}
/**
 * Supports rotation, scaling, and translation
 */
export interface Transformation {
  rotation?: Rotation;
  scale?: Scale;
  translation?: Translation;
  scale_pivot?: ScalePivot;
  rotation_pivot?: RotationPivot;
}
/**
 * Describes the component that will trigger an even at a regular interval between two values.
 */
export interface Tick {
  /**
   * Does the event loop.
   */
  looping?: boolean;
  interval_range?: IntervalRange;
}
/**
 * Required component to use the custom component `onEntityFallOn`.
 */
export interface EntityFallOn {
  /**
   * Sets the minimum fall distance required to trigger the custom component.
   */
  min_fall_distance?: number;
}
/**
 * Applies a tag to the block, using the key without the "tag:" prefix as the tag name.
 *
 * This interface was referenced by `Component`'s JSON-Schema definition
 * via the `patternProperty` "tag:.+".
 *
 * This interface was referenced by `Component1`'s JSON-Schema definition
 * via the `patternProperty` "tag:.+".
 */
export interface Tag {}
/**
 * UNDOCUMENTED.
 */
export interface Permutation {
  condition?: Condition;
  components?: Component1;
}
/**
 * UNDOCUMENTED.
 */
export interface Component1 {
  'minecraft:collision_box'?: CollisionBox;
  'minecraft:crafting_table'?: CraftingTable;
  'minecraft:destructible_by_explosion'?: DestructibleByExplosion;
  'minecraft:destructible_by_mining'?: DestructibleByMining;
  'minecraft:display_name'?: BlockceptionMinecraftBehaviorBlocksMinecraftDisplayName;
  'minecraft:flammable'?: Flammable;
  'minecraft:friction'?: BlockceptionMinecraftBehaviorBlocksMinecraftFriction;
  'minecraft:geometry'?: Geometry;
  'minecraft:item_visual'?: ItemVisual;
  'minecraft:light_dampening'?: BlockceptionMinecraftBehaviorBlocksMinecraftLightDampening;
  'minecraft:light_emission'?: BlockceptionMinecraftBehaviorBlocksMinecraftLightEmission;
  'minecraft:liquid_detection'?: LiquidDetection;
  'minecraft:loot'?: BlockceptionMinecraftBehaviorBlocksMinecraftLoot;
  'minecraft:map_color'?: MapColor;
  'minecraft:material_instances'?: MaterialInstances;
  'minecraft:placement_filter'?: PlacementFilter;
  'minecraft:redstone_conductivity'?: RedstoneConductivity;
  'minecraft:selection_box'?: SelectionBox;
  'minecraft:transformation'?: Transformation;
  'minecraft:custom_components'?: CustomComponents;
  'minecraft:tick'?: Tick;
  'minecraft:entity_fall_on'?: EntityFallOn;
  'tag:minecraft:diamond_tier_destructible'?: unknown;
  'tag:minecraft:iron_tier_destructible'?: unknown;
  'tag:minecraft:is_axe_item_destructible'?: unknown;
  'tag:minecraft:is_hoe_item_destructible'?: unknown;
  'tag:minecraft:is_mace_item_destructible'?: unknown;
  'tag:minecraft:is_pickaxe_item_destructible'?: unknown;
  'tag:minecraft:is_shears_item_destructible'?: unknown;
  'tag:minecraft:is_shovel_item_destructible'?: unknown;
  'tag:minecraft:is_sword_item_destructible'?: unknown;
  'tag:minecraft:netherite_tier_destructible'?: unknown;
  'tag:minecraft:stone_tier_destructible'?: unknown;
  [k: string]: Tag;
}
