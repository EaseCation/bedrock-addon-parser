/**
 * behavior/entities/format/components/spell_effects.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:18.411Z
 */

/**
 * List of effects to add to this entity after adding this component.
 */
export type AddEffects = (
  | string
  | {
      /**
       * The level of the effect, same as used in the /effect command (0 for level I, 1 for level II, etc). Defaults to 0.
       */
      amplifier?: number;
      /**
       * Boolean value that should cause the particles emitted by the entity to be partially transparent. This does not work properly, resulting in this property having no effect. Defaults to false.
       */
      ambient?: boolean;
      /**
       * The amount of time in seconds the effect should last. This allows for fractional numbers. For example, instant effects should be set to 0.05 seconds (one tick).
       */
      duration?: number;
      /**
       * Boolean value. When set to true, applying this effect displays an animated graphic on-screen similar to the totem of undying effect. Obviously, this only works for players. Defaults to false.
       */
      display_on_screen_animation?: boolean;
      /**
       * The string identifier of the status effect to add. These are the same as used in the /effect command.
       */
      effect?: string;
      /**
       * Boolean value. When set to true, the effect will be visible to the player. Defaults to true.
       */
      visible?: boolean;
    }
)[];
/**
 * List of identifiers of effects to be removed from this entity after adding this component.
 */
export type RemoveEffects = SpellEffectID[] | string;
/**
 * identifier of the effect to be removed from this entity after adding this component.
 */
export type SpellEffectID = string;

/**
 * Defines what mob effects to add and remove to the entity when adding this component.
 */
export interface SpellEffects {
  add_effects?: AddEffects;
  remove_effects?: RemoveEffects;
}
