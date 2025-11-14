/**
 * behavior/entities/format/events.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:15.375Z
 */

export type Filters =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec1;
/**
 * All tests in an `all_of` group must pass in order for the group to pass.
 */
export type AllOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * One or more tests in an `any_of` group must pass in order for the group to pass.
 */
export type AnyOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
/**
 * All tests in a `none_of` group must fail in order for the group to pass.
 */
export type NoneOf =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec;
export type FiltersSpec1 =
  | {
      all_of?: AllOf;
      any_of?: AnyOf;
      none_of?: NoneOf;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
/**
 * Triggers additional events.
 */
export type Trigger =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * The list of conditions for this trigger to execute.
 */
export type Filters1 =
  | (
      | {
          all_of?: AllOf;
          any_of?: AnyOf;
          none_of?: NoneOf;
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[]
  | FiltersSpec1;
/**
 * The subject of this filter test.
 */
export type Subject = 'block' | 'other' | 'parent' | 'player' | 'self' | 'target' | 'damager';
/**
 * The components groups to add or remove.
 */
export type ComponentGroups = string[];
/**
 * Triggers additional events.
 */
export type Trigger1 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export type Randomize = Randomize1[];
/**
 * Triggers additional events.
 */
export type Trigger2 =
  | string
  | {
      /**
       * The event to run when the conditions for this trigger are met.
       */
      event?: string;
      filters?: Filters1;
      target?: Subject;
    };
/**
 * A series of filters and components to be added.
 */
export type Sequences = Sequence[];

/**
 * Events for entities.
 */
export interface Events {
  'minecraft:entity_transformed'?: EntityTransformed;
  'minecraft:entity_born'?: EntityBorn;
  'minecraft:entity_spawned'?: EntitySpawned;
  'minecraft:on_prime'?: OnPrime;
  [k: string]: EventBase;
}
/**
 * Event called on an entity that transforms into another entity.
 */
export interface EntityTransformed {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
}
/**
 * What gets added when the event gets triggered.
 */
export interface Add {
  component_groups?: ComponentGroups;
}
/**
 * What gets removed when the event gets triggered.
 */
export interface Remove {
  component_groups?: ComponentGroups;
}
/**
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export interface Randomize1 {
  add?: Add1;
  remove?: Remove1;
  trigger?: Trigger1;
  /**
   * The weight on how likely this section is to trigger.
   */
  weight?: number;
  [k: string]: unknown;
}
/**
 * What gets added when the event gets triggered.
 */
export interface Add1 {
  component_groups?: ComponentGroups;
}
/**
 * What gets removed when the event gets triggered.
 */
export interface Remove1 {
  component_groups?: ComponentGroups;
}
/**
 * Filters and components to be added.
 */
export interface Sequence {
  add?: Add2;
  remove?: Remove2;
  trigger?: Trigger2;
  filters?: Filters;
  [k: string]: unknown;
}
/**
 * What gets added when the event gets triggered.
 */
export interface Add2 {
  component_groups?: ComponentGroups;
}
/**
 * What gets removed when the event gets triggered.
 */
export interface Remove2 {
  component_groups?: ComponentGroups;
}
/**
 * Event called on an entity that is spawned through two entities breeding.
 */
export interface EntityBorn {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
}
/**
 * Event called on an entity that is placed in the level.
 */
export interface EntitySpawned {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
}
/**
 * Event called on an entity whose fuse is lit and is ready to explode.
 */
export interface OnPrime {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
}
export interface EventBase {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences;
}
