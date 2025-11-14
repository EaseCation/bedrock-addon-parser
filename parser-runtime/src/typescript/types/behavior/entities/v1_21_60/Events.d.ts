/**
 * behavior/entities/format/events.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:37:00.401Z
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
export type Trigger = string | Trigger1 | Trigger2[];
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
export type Trigger3 = string | Trigger1 | Trigger2[];
/**
 * The value to set the property to.
 */
export type Property = string | number | boolean;
/**
 * The command to execute.
 */
export type Command = string | string[];
/**
 * A series of filters and components to be added.
 */
export type Sequences1 = Sequence1[];
/**
 * A series of filters and components to be added.
 */
export type Sequences = Sequence[];
/**
 * The value to set the property to.
 */
export type Property1 = string | number | boolean;
/**
 * The command to execute.
 */
export type Command1 = string | string[];
/**
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export type Randomize2 = Randomize3[];
/**
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export type Randomize = Randomize1[];

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
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
}
export interface Trigger1 {
  /**
   * The event to run when the conditions for this trigger are met.
   */
  event?: string;
  filters?: Filters1;
  target?: Subject;
}
export interface Trigger2 {
  /**
   * The event to run when the conditions for this trigger are met.
   */
  event?: string;
  filters?: Filters1;
  target?: Subject;
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
  filters?: Filters;
  trigger?: Trigger3;
  add?: Add1;
  remove?: Remove1;
  randomize?: Randomize2;
  sequence?: Sequences;
  emit_vibration?: EmitVibration1;
  set_property?: SetProperty1;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command1;
    [k: string]: unknown;
  };
  /**
   * The weight on how likely this section is to trigger.
   */
  weight?: number;
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
 * Randomly selects one of the following items based upon their weight and the total weights.
 */
export interface Randomize3 {
  filters?: Filters;
  trigger?: Trigger3;
  add?: Add1;
  remove?: Remove1;
  randomize?: Randomize2;
  sequence?: Sequences;
  emit_vibration?: EmitVibration1;
  set_property?: SetProperty1;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command1;
    [k: string]: unknown;
  };
  /**
   * The weight on how likely this section is to trigger.
   */
  weight?: number;
}
/**
 * Filters and components to be added.
 */
export interface Sequence {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
}
/**
 * Filters and components to be added.
 */
export interface Sequence1 {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
}
/**
 * Allows the entity to execute an event on the block at its home position
 */
export interface ExecuteEventOnHomeBlock {
  /**
   * The event to execute
   */
  event?: string;
}
/**
 * Allows an entity to reset its target.
 */
export interface ResetTarget {}
/**
 * UNDOCUMENTED
 */
export interface EmitVibration {
  vibration?: 'shear' | 'entity_act' | 'entity_interact';
  [k: string]: unknown;
}
/**
 * Sets a property on the entity.
 */
export interface SetProperty {
  [k: string]: Property;
}
/**
 * Allows the owner entity to emit sounds
 */
export interface PlaySound {
  /**
   * Specifies the sound event to play
   */
  sound?: string;
}
/**
 * Allowing particles to be emitted at the center of the entity's bounding box
 */
export interface EmitParticle {
  /**
   * Specifies the type of particle to emit
   */
  particle?: string;
}
/**
 * UNDOCUMENTED
 */
export interface EmitVibration1 {
  vibration?: 'shear' | 'entity_act' | 'entity_interact';
  [k: string]: unknown;
}
/**
 * Sets a property on the entity.
 */
export interface SetProperty1 {
  [k: string]: Property1;
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
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
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
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
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
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
}
export interface EventBase {
  filters?: Filters;
  trigger?: Trigger;
  add?: Add;
  remove?: Remove;
  randomize?: Randomize;
  sequence?: Sequences1;
  execute_event_on_home_block?: ExecuteEventOnHomeBlock;
  reset_target?: ResetTarget;
  emit_vibration?: EmitVibration;
  set_property?: SetProperty;
  /**
   * Queues a command to be executed.
   */
  queue_command?: {
    command?: Command;
    [k: string]: unknown;
  };
  play_sound?: PlaySound;
  emit_particle?: EmitParticle;
}
