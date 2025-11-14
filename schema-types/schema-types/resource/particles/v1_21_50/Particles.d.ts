/**
 * resource/particles/particles.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.887Z
 */

/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion = string;
/**
 * UNDOCUMENTED: identifier.
 */
export type BlockceptionMinecraftParticleIdentifier = string;
/**
 * What is the input value to use.
 */
export type Input = string | number;
/**
 * Control nodes for curve.  These are assumed to be equally, used Object for bezier_chain
 */
export type Nodes =
  | [MolangNumber, ...MolangNumber[]]
  | {
      [k: string]: {
        [k: string]: unknown;
      };
    };
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber = string | number;
/**
 * The type of curve.
 */
export type Type = 'linear' | 'bezier' | 'bezier_chain' | 'catmull_rom';
/**
 * What is the range the input is mapped onto.
 */
export type HorizontalRange = string | number;
/**
 * This is run once at emitter startup.
 */
export type MolangString180 = string;
/**
 * This is run once per emitter update.
 */
export type PerUpdateExpression = string;
/**
 * Fires when the emitter is created.
 */
export type CreationEvent = string[] | string;
/**
 * Fires when the emitter expires (does not wait for particles to expire too).
 */
export type ExpirationEvent = string[] | string;
/**
 * A single point in time that executes commands/molang/events.
 */
export type TimelineObject = string[] | string;
/**
 * UNDOCUMENTED.
 */
export type Effects = string[] | string;
/**
 * A series of events that occur at set intervals these get fired every time the emitter has moved the specified input distance from the last time it was fired.
 */
export type LoopingTravelDistanceEvents = DistanceEvent[];
/**
 * When the expression is non-zero, the emitter will emit particles. Evaluated every frame
 */
export type ActivationExpression = string | number;
/**
 * Emitter will expire if the expression is non-zero. Evaluated every frame
 */
export type ExpirationExpression = string | number;
/**
 * How long the particles emit for evaluated once.
 */
export type ActiveTime = string | number;
/**
 * Emitter will emit particles for this time per loop evaluated once per particle emitter loop.
 */
export type ActiveTime1 = string | number;
/**
 * Emitter will pause emitting particles for this time per loop evaluated once per particle emitter loop.
 */
export type SleepTime = string | number;
/**
 * This many particles are emitted at once evaluated once per particle emitter loop.
 */
export type NumParticles = string | number;
/**
 * Evaluated once per particle emitted.
 */
export type MaximumParticles = string | number;
/**
 * Maximum number of particles that can be active at once for this emitter, evaluated once per particle emitter loop.
 */
export type MaximumParticles1 = string | number;
/**
 * How often a particle is emitted, in particles/sec evaluated once per particle emitted.
 */
export type SpawnRate = string | number;
/**
 * UNDOCUMENTED: direction.
 */
export type Direction = ('inwards' | 'outwards') | [] | [X] | [X, Y] | [X, Y, Z];
/**
 * The minecraft molang definition that results in a float.
 */
export type X = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type Y = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type Z = string | number;
/**
 * UNDOCUMENTED: radius.
 */
export type Radius = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset = [] | [X1] | [X1, Y1] | [X1, Y1, Z1];
/**
 * UNDOCUMENTED.
 */
export type X1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z1 = string | number;
/**
 * UNDOCUMENTED: half dimensions.
 */
export type HalfDimensions = [] | [X2] | [X2, Y2] | [X2, Y2, Z2];
/**
 * UNDOCUMENTED.
 */
export type X2 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y2 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z2 = string | number;
/**
 * UNDOCUMENTED: direction.
 */
export type Direction1 = [] | [X3] | [X3, Y3] | [X3, Y3, Z3];
/**
 * UNDOCUMENTED.
 */
export type X3 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y3 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z3 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset1 = [] | [X4] | [X4, Y4] | [X4, Y4, Z4];
/**
 * UNDOCUMENTED.
 */
export type X4 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y4 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z4 = string | number;
/**
 * UNDOCUMENTED: direction.
 */
export type Direction2 = ('inwards' | 'outwards') | [] | [X5] | [X5, Y5] | [X5, Y5, Z5];
/**
 * The minecraft molang definition that results in a float.
 */
export type X5 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type Y5 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type Z5 = string | number;
/**
 * UNDOCUMENTED: radius.
 */
export type Radius1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset2 = [] | [X6] | [X6, Y6] | [X6, Y6, Z6];
/**
 * UNDOCUMENTED.
 */
export type X6 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y6 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z6 = string | number;
/**
 * Specifies the normal of the disc plane, the disc will be perpendicular to this direction.
 */
export type PlaneNormal = ('x' | 'y' | 'z') | [] | [X7] | [X7, Y7] | [X7, Y7, Z7];
/**
 * UNDOCUMENTED.
 */
export type X7 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y7 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z7 = string | number;
/**
 * UNDOCUMENTED: direction.
 */
export type Direction3 = [] | [X8] | [X8, Y8] | [X8, Y8, Z8];
/**
 * UNDOCUMENTED.
 */
export type X8 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y8 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z8 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset3 = [] | [X9] | [X9, Y9] | [X9, Y9, Z9];
/**
 * UNDOCUMENTED.
 */
export type X9 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y9 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z9 = string | number;
/**
 * UNDOCUMENTED: direction.
 */
export type Direction4 = [] | [X10] | [X10, Y10] | [X10, Y10, Z10];
/**
 * UNDOCUMENTED.
 */
export type X10 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y10 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z10 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset4 = [] | [X11] | [X11, Y11] | [X11, Y11, Z11];
/**
 * UNDOCUMENTED.
 */
export type X11 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y11 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z11 = string | number;
/**
 * UNDOCUMENTED: direction.
 */
export type Direction5 = ('inwards' | 'outwards') | [] | [X12] | [X12, Y12] | [X12, Y12, Z12];
/**
 * UNDOCUMENTED.
 */
export type X12 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y12 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z12 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Offset5 = [] | [X13] | [X13, Y13] | [X13, Y13, Z13];
/**
 * UNDOCUMENTED.
 */
export type X13 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Y13 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Z13 = string | number;
/**
 * UNDOCUMENTED: radius.
 */
export type Radius2 = string | number;
/**
 * UNDOCUMENTED: size.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Size = [Size1, Size1];
/**
 * UNDOCUMENTED: size.
 */
export type Size1 = string | number;
/**
 * Used to orient the billboard.
 */
export type FacingCameraMode =
  | 'rotate_xyz'
  | 'rotate_y'
  | 'lookat_xyz'
  | 'lookat_y'
  | 'lookat_direction'
  | 'direction_x'
  | 'direction_y'
  | 'direction_z'
  | 'emitter_transform_xy'
  | 'emitter_transform_xz'
  | 'emitter_transform_yz';
/**
 * UNDOCUMENTED.
 */
export type MolangNumber1 = string | number;
/**
 * UNDOCUMENTED: base UV.
 *
 * @minItems 2
 * @maxItems 2
 */
export type BaseUV = [BaseUV1, BaseUV1];
/**
 * UNDOCUMENTED: base UV.
 */
export type BaseUV1 = string | number;
/**
 * UNDOCUMENTED: size UV.
 *
 * @minItems 2
 * @maxItems 2
 */
export type SizeUV = [SizeUV1, SizeUV1];
/**
 * UNDOCUMENTED: size UV.
 */
export type SizeUV1 = string | number;
/**
 * UNDOCUMENTED: step UV.
 *
 * @minItems 2
 * @maxItems 2
 */
export type StepUV = [StepUV1, StepUV1];
/**
 * UNDOCUMENTED: step UV.
 */
export type StepUV1 = string | number;
/**
 * UNDOCUMENTED: frames per second.
 */
export type FramesPerSecond = string | number;
/**
 * UNDOCUMENTED: Maximum frame.
 */
export type MaximumFrame = string | number;
/**
 * UNDOCUMENTED: uv.
 *
 * @minItems 2
 * @maxItems 2
 */
export type Uv1 = [Uv2, Uv2];
/**
 * UNDOCUMENTED: uv.
 */
export type Uv2 = string | number;
/**
 * UNDOCUMENTED: uv size.
 *
 * @minItems 2
 * @maxItems 2
 */
export type UvSize = [UvSize1, UvSize1];
/**
 * UNDOCUMENTED: uv size.
 */
export type UvSize1 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Color =
  | MolangNumber[]
  | string
  | {
      gradient?: Gradient;
      interpolant?: MolangNumber2;
    };
export type Gradient =
  | string[]
  | {
      /**
       * Color.
       */
      [k: string]: string;
    }
  | [number | string, number | string, number | string, ...(number | string)[]][];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber2 = string | number;
/**
 * UNDOCUMENTED.
 */
export type Block = string;
/**
 * UNDOCUMENTED.
 */
export type ParticleExpireIfNotInBlocksComponentFor1100 = Block[];
/**
 * UNDOCUMENTED.
 */
export type BlockceptionMinecraftBlockIdentifier = string;
/**
 * UNDOCUMENTED.
 */
export type ParticleExpireIfNotInBlocksComponentFor11001 = BlockceptionMinecraftBlockIdentifier[];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber3 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber4 = string | number;
/**
 * UNDOCUMENTED.
 */
export type ParticleInitialSpeedComponentFor1100 =
  | MolangNumber
  | []
  | [MolangNumber5]
  | [MolangNumber5, MolangNumber6]
  | [MolangNumber5, MolangNumber6, MolangNumber7];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber5 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber6 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber7 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber8 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber9 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber10 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber11 = string | number;
/**
 * Fires when the particle is created.
 */
export type CreationEvent1 = string[] | string;
/**
 * Fires when the particle expires (does not wait for particles to expire too).
 */
export type ExpirationEvent1 = string[] | string;
/**
 * A*x + B*y + C*z + D = 0
 * with the parameters being [ A, B, C, D ].
 */
export type ParticleKillPlaneComponentFor1100 =
  | []
  | [MolangNumber12]
  | [MolangNumber12, MolangNumber13]
  | [MolangNumber12, MolangNumber13, MolangNumber14]
  | [MolangNumber12, MolangNumber13, MolangNumber14, MolangNumber15];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber12 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber13 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber14 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber15 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber16 = string | number;
/**
 * UNDOCUMENTED: events.
 */
export type Events = Events1[];
/**
 * The linear acceleration applied to the particle. Units are blocks/sec/sec
 *
 * @minItems 3
 * @maxItems 3
 */
export type LinearAcceleration = [MolangNumber, MolangNumber, MolangNumber];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber17 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber18 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber19 = string | number;
/**
 * UNDOCUMENTED: relative position.
 *
 * @minItems 3
 * @maxItems 3
 */
export type RelativePosition = [MolangNumber20, MolangNumber20, MolangNumber20];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber20 = string | number;
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber21 = string | number;
/**
 * UNDOCUMENTED: relative position.
 *
 * @minItems 3
 * @maxItems 3
 */
export type Direction6 = [MolangNumber22, MolangNumber22, MolangNumber22];
/**
 * The minecraft molang definition that results in a float.
 */
export type MolangNumber22 = string | number;
/**
 * A sequence of elements to execute.
 */
export type EventSequence = ParticleEvent[];
/**
 * A list of elements to execute one of.
 */
export type EventRandomize = ParticleEvent[];
/**
 * UNDOCUMENTED: type.
 */
export type Type1 = 'emitter' | 'emitter_bound' | 'particle' | 'particle_with_velocity';

/**
 * A particle definition file.
 */
export interface Particle {
  format_version?: FormatVersion;
  particle_effect?: ParticleEffect;
}
/**
 * UNDOCUMENTED: particle effect.
 */
export interface ParticleEffect {
  description?: Description;
  curves?: Curves;
  components?: Components;
  events?: Events2;
}
/**
 * UNDOCUMENTED: description.
 */
export interface Description {
  identifier: BlockceptionMinecraftParticleIdentifier;
  basic_render_parameters: BasicRenderParameters;
}
/**
 * UNDOCUMENTED: basic render parameters.
 */
export interface BasicRenderParameters {
  /**
   *  Minecraft material to use for emitter.
   */
  material?: string;
  /**
   * Minecraft texture to use for emitter.
   */
  texture?: string;
}
/**
 * Curves are interpolation values, with inputs from 0 to 1, and outputs based on the curve. The result of the curve is a Molang variable of the same name that can be referenced in Molang in components. For each rendering frame for each particle, the curves are evaluated and the result is placed in a Molang variable of the name of the curve.
 */
export interface Curves {
  [k: string]: Curve;
}
/**
 * The curve definitions, conists out of a couple of nodes.
 */
export interface Curve {
  input?: Input;
  nodes?: Nodes;
  type?: Type;
  horizontal_range?: HorizontalRange;
}
/**
 * The particle components.
 */
export interface Components {
  'minecraft:emitter_initialization'?: EmitterInitializationComponentFor1100;
  'minecraft:emitter_lifetime_events'?: EmitterLifetimeEventsComponentFor1100;
  'minecraft:emitter_lifetime_expression'?: EmitterRateManualComponent1100;
  'minecraft:emitter_lifetime_once'?: EmitterLifetimeOnceComponentFor1100;
  'minecraft:emitter_lifetime_looping'?: EmitterLifetimeLoopingComponentFor1100;
  'minecraft:emitter_local_space'?: EmitterLocalSpaceComponentFor1100;
  'minecraft:emitter_rate_instant'?: EmitterRateInstantComponentFor1100;
  'minecraft:emitter_rate_manual'?: EmitterRateManualComponentFor1100;
  'minecraft:emitter_rate_steady'?: EmitterRateSteadyComponentFor1100;
  'minecraft:emitter_shape_box'?: EmitterShapeBoxComponentFor1100;
  'minecraft:emitter_shape_custom'?: EmitterShapeCustomComponentFor1100;
  'minecraft:emitter_shape_disc'?: EmitterShapeDiscComponentFor1100;
  'minecraft:emitter_shape_entity_aabb'?: EmitterShapeEntityAabbComponentFor1100;
  'minecraft:emitter_shape_point'?: EmitterShapePointComponentFor1100;
  'minecraft:emitter_shape_sphere'?: EmitterShapeSphereComponentFor1100;
  'minecraft:particle_appearance_billboard'?: ParticleAppearanceBillboardComponentFor1100;
  'minecraft:particle_appearance_tinting'?: ParticleAppearanceTintingComponentFor1100;
  'minecraft:particle_appearance_lighting'?: ParticleAppearanceLightingComponentFor1100;
  'minecraft:particle_expire_if_not_in_blocks'?: ParticleExpireIfNotInBlocksComponentFor1100;
  'minecraft:particle_expire_if_in_blocks'?: ParticleExpireIfNotInBlocksComponentFor11001;
  'minecraft:particle_initialization'?: ParticleInitializationComponentFor1100;
  'minecraft:particle_initial_speed'?: ParticleInitialSpeedComponentFor1100;
  'minecraft:particle_initial_spin'?: ParticleInitialSpinComponentFor1100;
  'minecraft:particle_lifetime_expression'?: ParticleLifetimeExpressionComponentFor1100;
  'minecraft:particle_lifetime_events'?: ParticleLifetimeEventsComponentFor1100;
  'minecraft:particle_kill_plane'?: ParticleKillPlaneComponentFor1100;
  'minecraft:particle_motion_collision'?: ParticleMotionCollisionComponentFor1100;
  'minecraft:particle_motion_dynamic'?: ParticleMotionDynamicComponentFor1100;
  'minecraft:particle_motion_parametric'?: ParticleMotionParametricComponentFor1100;
}
/**
 * This component allows the emitter to run some Molang at creation, primarily to populate any Molang variables that get used later.
 */
export interface EmitterInitializationComponentFor1100 {
  creation_expression?: MolangString180;
  per_update_expression?: PerUpdateExpression;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterLifetimeEventsComponentFor1100 {
  creation_event?: CreationEvent;
  expiration_event?: ExpirationEvent;
  timeline?: Timeline;
  travel_distance_events?: TravelDistanceEvents;
  looping_travel_distance_events?: LoopingTravelDistanceEvents;
}
/**
 * A series of times, e.g. 0.0 or 1.0, that trigger the event, these get fired on every loop the emitter goes through, `time` is the time, e.g. one line might be: `0.4`: `event`
 */
export interface Timeline {
  [k: string]: TimelineObject;
}
/**
 * A series of distances, e.g. 0.0 or 1.0, that trigger the event these get fired when the emitter has moved by the specified input distance, e.g. one line might be: `0.4`: `event`
 */
export interface TravelDistanceEvents {
  [k: string]: unknown;
}
export interface DistanceEvent {
  /**
   * UNDOCUMENTED.
   */
  distance?: number;
  effects?: Effects;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterRateManualComponent1100 {
  activation_expression?: ActivationExpression;
  expiration_expression?: ExpirationExpression;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterLifetimeOnceComponentFor1100 {
  active_time?: ActiveTime;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterLifetimeLoopingComponentFor1100 {
  active_time?: ActiveTime1;
  sleep_time?: SleepTime;
}
/**
 * UNDOCUMENTED:.
 */
export interface EmitterLocalSpaceComponentFor1100 {
  /**
   * UNDOCUMENTED: position.
   */
  position?: boolean;
  /**
   * UNDOCUMENTED: rotation.
   */
  rotation?: boolean;
  /**
   * UNDOCUMENTED: rotation.
   */
  velocity?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterRateInstantComponentFor1100 {
  num_particles?: NumParticles;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterRateManualComponentFor1100 {
  max_particles?: MaximumParticles;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterRateSteadyComponentFor1100 {
  max_particles?: MaximumParticles1;
  spawn_rate?: SpawnRate;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeBoxComponentFor1100 {
  direction?: Direction;
  radius?: Radius;
  offset?: Offset;
  half_dimensions?: HalfDimensions;
  /**
   * UNDOCUMENTED: surface only.
   */
  surface_only?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeCustomComponentFor1100 {
  direction?: Direction1;
  offset?: Offset1;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeDiscComponentFor1100 {
  direction?: Direction2;
  radius?: Radius1;
  offset?: Offset2;
  plane_normal?: PlaneNormal;
  /**
   * UNDOCUMENTED: surface only.
   */
  surface_only?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeEntityAabbComponentFor1100 {
  direction?: Direction3;
  offset?: Offset3;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterShapePointComponentFor1100 {
  direction?: Direction4;
  offset?: Offset4;
}
/**
 * UNDOCUMENTED.
 */
export interface EmitterShapeSphereComponentFor1100 {
  direction?: Direction5;
  offset?: Offset5;
  radius?: Radius2;
  /**
   * UNDOCUMENTED: surface only.
   */
  surface_only?: boolean;
}
/**
 * UNDOCUMENTED.
 */
export interface ParticleAppearanceBillboardComponentFor1100 {
  size?: Size;
  facing_camera_mode?: FacingCameraMode;
  /**
   * UNDOCUMENTED
   */
  direction?: {
    /**
     * Specified how to calculate the billboard direction of a particle.
     */
    mode?: 'custom' | 'derive_from_velocity';
    /**
     * The facing direction of emitted particles.
     *
     * @minItems 3
     * @maxItems 3
     */
    custom_direction?: [MolangNumber1, MolangNumber1, MolangNumber1];
    /**
     * The direction is set if the speed of the particle is above the threshold.
     */
    min_speed_threshold?: number;
    [k: string]: unknown;
  };
  uv?: Uv;
}
/**
 * UNDOCUMENTED: uv.
 */
export interface Uv {
  /**
   * UNDOCUMENTED: texture width.
   */
  texture_width?: number;
  /**
   * UNDOCUMENTED: texture height.
   */
  texture_height?: number;
  flipbook?: Flipbook;
  uv?: Uv1;
  uv_size?: UvSize;
}
/**
 * UNDOCUMENTED: flipbook.
 */
export interface Flipbook {
  base_UV?: BaseUV;
  size_UV?: SizeUV;
  step_UV?: StepUV;
  frames_per_second?: FramesPerSecond;
  max_frame: MaximumFrame;
  /**
   * UNDOCUMENTED: stretch to lifetime.
   */
  stretch_to_lifetime?: boolean;
  /**
   * UNDOCUMENTED: loop.
   */
  loop?: boolean;
}
/**
 * Color fields are special, they can be either an RGB, or a `#RRGGBB` field (or RGBA or `AARRGGBB`).  If RGB(A), the channels are from 0 to 1.  If the string `#AARRGGBB`, then the values are hex from 00 to ff.
 */
export interface ParticleAppearanceTintingComponentFor1100 {
  color?: Color;
}
/**
 * UNDOCUMENTED.
 */
export interface ParticleAppearanceLightingComponentFor1100 {}
/**
 * UNDOCUMENTED.
 */
export interface ParticleInitializationComponentFor1100 {
  per_update_expression?: MolangNumber3;
  per_render_expression?: MolangNumber4;
}
/**
 * Starts the particle with a specified orientation and rotation rate.
 */
export interface ParticleInitialSpinComponentFor1100 {
  rotation?: MolangNumber8;
  rotation_rate?: MolangNumber9;
}
/**
 * UNDOCUMENTED:.
 */
export interface ParticleLifetimeExpressionComponentFor1100 {
  expiration_expression?: MolangNumber10;
  max_lifetime?: MolangNumber11;
}
/**
 * UNDOCUMENTED.
 */
export interface ParticleLifetimeEventsComponentFor1100 {
  creation_event?: CreationEvent1;
  custom_events?: CustomEvents;
  expiration_event?: ExpirationEvent1;
  timeline?: Timeline1;
}
/**
 * UNDOCUMENTED, unclear structure :(.
 */
export interface CustomEvents {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED: timeline.
 */
export interface Timeline1 {
  [k: string]: unknown;
}
/**
 * UNDOCUMENTED.
 */
export interface ParticleMotionCollisionComponentFor1100 {
  /**
   * UNDOCUMENTED: collision drag.
   */
  collision_drag?: number;
  /**
   * UNDOCUMENTED: coefficient of restitution.
   */
  coefficient_of_restitution?: number;
  /**
   * UNDOCUMENTED: collision radius.
   */
  collision_radius: number;
  enabled?: MolangNumber16;
  /**
   * UNDOCUMENTED: expire on contact.
   */
  expire_on_contact?: boolean;
  events?: Events;
}
/**
 * UNDOCUMENTED: events.
 */
export interface Events1 {
  additionalProperties?: never;
  /**
   * UNDOCUMENTED: event.
   */
  event?: string;
  /**
   * UNDOCUMENTED: Minimum speed.
   */
  min_speed?: number;
  [k: string]: unknown;
}
/**
 * This component specifies the dynamic properties of the particle, from a simulation standpoint what forces act upon the particle? These dynamics alter the velocity of the particle, which is a combination of the direction of the particle and the speed. Particle direction will always be in the direction of the velocity of the particle.
 */
export interface ParticleMotionDynamicComponentFor1100 {
  linear_acceleration?: LinearAcceleration;
  linear_drag_coefficient?: MolangNumber17;
  rotation_acceleration?: MolangNumber18;
  rotation_drag_coefficient?: MolangNumber19;
}
/**
 * UNDOCUMENTED.
 */
export interface ParticleMotionParametricComponentFor1100 {
  relative_position?: RelativePosition;
  rotation?: MolangNumber21;
  direction?: Direction6;
}
/**
 * UNDOCUMENTED: events.
 */
export interface Events2 {
  [k: string]: ParticleEvent;
}
/**
 * The particle event.
 */
export interface ParticleEvent {
  sequence?: EventSequence;
  randomize?: EventRandomize;
  particle_effect?: ParticleEffect1;
  sound_effect?: SoundEffect;
  /**
   * Molang expression to run on the event-firing emitter.
   */
  expression?: string;
  /**
   * Message to log, along with the firing effect's name and event position.
   */
  log?: string;
  /**
   * The weight of the element.
   */
  weight?: number;
}
/**
 * Particle effect action.
 */
export interface ParticleEffect1 {
  /**
   * Identifier of the effect.
   */
  effect?: string;
  type?: Type1;
  /**
   * Molang expression to run on the new emitter.
   */
  pre_effect_expression?: string;
  [k: string]: unknown;
}
/**
 * Sound effect action.
 */
export interface SoundEffect {
  /**
   * Name of the level sound event.
   */
  event_name?: string;
  [k: string]: unknown;
}
