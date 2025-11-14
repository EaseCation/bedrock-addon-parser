/**
 * resource/materials/materials.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:46.628Z
 */

/**
 * UNDOCUMENTED.
 */
export type Version = '1.0.0';
/**
 * UNDOCUMENTED.
 */
export type AlphaDistance = 'DestColor' | 'OneMinusSrcAlpha';
/**
 * UNDOCUMENTED.
 */
export type StencilDepthFailOperation = 'Keep' | 'Replace';
/**
 * UNDOCUMENTED.
 */
export type StencilFailOperation = 'Keep' | 'Replace';
/**
 * UNDOCUMENTED.
 */
export type StencilFunction = 'Always' | 'Equal' | 'NotEqual';
/**
 * UNDOCUMENTED.
 */
export type StencilPass = 'Replace';
/**
 * UNDOCUMENTED.
 */
export type StencilDepthFailOperation1 = 'Keep' | 'Replace';
/**
 * UNDOCUMENTED.
 */
export type BlendDistance =
  | 'SourceAlpha'
  | 'OneMinusSrcAlpha'
  | 'OneMinusSrcColor'
  | 'SourceColor'
  | 'Zero'
  | 'One';
/**
 * UNDOCUMENTED.
 */
export type BlendSource = 'DestColor' | 'One' | 'OneMinusDestColor' | 'SourceAlpha' | 'SourceColor';
/**
 * UNDOCUMENTED.
 */
export type Definition =
  | 'ALLOW_FADE'
  | 'ALPHA_TEST'
  | 'ALWAYS_LIT'
  | 'ARRAY_TEXTURE_0'
  | 'AS_ENTITY_RENDERER'
  | 'ATLAS_TEXTURE'
  | 'BLEND'
  | 'BLUR_STEPS 1'
  | 'BLUR_STEPS 10'
  | 'BLUR_STEPS 11'
  | 'BLUR_STEPS 12'
  | 'BLUR_STEPS 2'
  | 'BLUR_STEPS 3'
  | 'BLUR_STEPS 4'
  | 'BLUR_STEPS 5'
  | 'BLUR_STEPS 6'
  | 'BLUR_STEPS 7'
  | 'BLUR_STEPS 8'
  | 'BLUR_STEPS 9'
  | 'Blending'
  | 'COLOR_BASED'
  | 'COLOR_FROMTEX'
  | 'COLOR_MULTIPLIER'
  | 'COLOR_SECOND_TEXTURE'
  | 'COMFORT_MODE'
  | 'DISABLE_TINTING'
  | 'DisableCulling'
  | 'EFFECTS_OFFSET'
  | 'ENABLE_CURRENT_ALPHA_MULTIPLY'
  | 'ENABLE_FOG'
  | 'ENABLE_LIGHT'
  | 'ENABLE_VERTEX_TINT_MASK'
  | 'END_PORTAL'
  | 'FLIP_OCCLUSION'
  | 'FOG'
  | 'FORCE_DEPTH_ZERO'
  | 'GLINT'
  | 'GRADIENT_2PT'
  | 'GRADIENT_3PTSYMM'
  | 'GRADIENT_FROMTEX'
  | 'GRADIENT_LINEAR'
  | 'GRADIENT_RADIAL'
  | 'HAS_MASK'
  | 'IGNORE_CURRENTCOLOR'
  | 'INVENTORY'
  | 'ITEM_IN_HAND'
  | 'LINE_STRIP'
  | 'LOW_PRECISION'
  | 'MASKED_MULTITEXTURE'
  | 'MSDF'
  | 'MULTIPLICATIVE_TINT'
  | 'MULTIPLICATIVE_TINT_COLOR'
  | 'MULTI_COLOR_TINT'
  | 'NO_OCCLUSION'
  | 'NO_TEXTURE'
  | 'NO_VARIETY'
  | 'SEASONS'
  | 'SEASONS_FAR'
  | 'SMOOTH'
  | 'SNOW'
  | 'STEREO_LEFT_EYE_ONLY'
  | 'TEXEL_AA'
  | 'TINTED'
  | 'TINTED_ALPHA_TEST'
  | 'UI_ENTITY'
  | 'USE_COLOR_BLEND'
  | 'USE_COLOR_MASK'
  | 'USE_EMISSIVE'
  | 'USE_LIGHTING'
  | 'USE_MASK'
  | 'USE_MULTITEXTURE'
  | 'USE_ONLY_EMISSIVE'
  | 'USE_OVERLAY'
  | 'USE_SKINNING'
  | 'USE_STEREO_TEXTURE_ARRAY'
  | 'USE_UV_ANIM'
  | 'WINDOWSMR_MAGICALPHA';
/**
 * UNDOCUMENTED, sets or starts definitions???.
 */
export type Defines = Definition[];
/**
 * UNDOCUMENTED, Add definitions???.
 */
export type Defines1 = Definition[];
/**
 * UNDOCUMENTED, removes definitions???.
 */
export type Defines2 = Definition[];
/**
 * UNDOCUMENTED.
 */
export type DepthFunction = 'LessEqual' | 'Always' | 'Equal';
/**
 * UNDOCUMENTED.
 */
export type MSAASupport = 'Both' | 'MSAA';
/**
 * UNDOCUMENTED.
 */
export type PrimitiveMode = 'Line';
/**
 * UNDOCUMENTED.
 */
export type TextureFilter = 'Point' | 'Bilinear' | 'TexelAA';
/**
 * UNDOCUMENTED.
 */
export type TextureWrap = 'Repeat' | 'Clamp';
/**
 * UNDOCUMENTED, set or start samplerStates???.
 */
export type SamplerStates = SampleState[];
/**
 * UNDOCUMENTED, Add samplerStates???.
 */
export type SamplerStates1 = SampleState[];
/**
 * UNDOCUMENTED.
 */
export type State =
  | 'Blending'
  | 'DisableAlphaWrite'
  | 'DisableColorWrite'
  | 'DisableCulling'
  | 'DisableDepthTest'
  | 'DisableDepthWrite'
  | 'EnableAlphaToCoverage'
  | 'EnableStencilTest'
  | 'InvertCulling'
  | 'StencilWrite';
/**
 * UNDOCUMENTED, start states???.
 */
export type States = State[];
/**
 * UNDOCUMENTED, Add additional states???.
 */
export type States1 = State[];
/**
 * UNDOCUMENTED, remove additional states???.
 */
export type States2 = State[];
/**
 * UNDOCUMENTED, Add definitions???.
 */
export type Defines3 = Definition[];
/**
 * UNDOCUMENTED.
 */
export type VertexFields = VertexField[];
/**
 * UNDOCUMENTED, start states???.
 */
export type States3 = State[];
/**
 * UNDOCUMENTED, Add additional states???.
 */
export type States4 = State[];
/**
 * UNDOCUMENTED, remove additional states???.
 */
export type States5 = State[];
/**
 * UNDOCUMENTED, sets the variants?.
 */
export type Variants = Variant[];
/**
 * UNDOCUMENTED, adds variants?.
 */
export type Variants1 = Variant[];
/**
 * UNDOCUMENTED.
 */
export type VertexFields1 = VertexField[];

/**
 * A collection of material specifications for the render engine of minecraft.
 */
export interface Material {
  materials: Materials;
}
/**
 * The collection of materials, each property key is the identification key of the material, and what it implements if : are used.
 */
export interface Materials {
  version: Version;
  [k: string]: MaterialDefinitions;
}
/**
 * UNDOCUMENTED.
 */
export interface MaterialDefinitions {
  alphaDst?: AlphaDistance;
  backFace?: BackFace;
  blendDst?: BlendDistance;
  blendSrc?: BlendSource;
  defines?: Defines;
  '+defines'?: Defines1;
  '-defines'?: Defines2;
  /**
   * UNDOCUMENTED.
   */
  depthBias?: number;
  /**
   * UNDOCUMENTED.
   */
  depthBiasOGL?: number;
  depthFunc?: DepthFunction;
  /**
   * UNDOCUMENTED.
   */
  fragmentShader?: string;
  frontFace?: FrontFace;
  /**
   * UNDOCUMENTED, think its a boolean value as a number, so 1 and 0????.
   */
  isAnimatedTexture?: number;
  msaaSupport?: MSAASupport;
  primitiveMode?: PrimitiveMode;
  samplerStates?: SamplerStates;
  '+samplerStates'?: SamplerStates1;
  /**
   * UNDOCUMENTED.
   */
  slopeScaledDepthBias?: number;
  /**
   * UNDOCUMENTED.
   */
  slopeScaledDepthBiasOGL?: number;
  states?: States;
  '+states'?: States1;
  '-states'?: States2;
  /**
   * UNDOCUMENTED.
   */
  stencilRef?: number;
  /**
   * UNDOCUMENTED.
   */
  stencilRefOverride?: number;
  /**
   * UNDOCUMENTED.
   */
  stencilReadMask?: number;
  /**
   * UNDOCUMENTED.
   */
  stencilWriteMask?: number;
  variants?: Variants;
  '+variants'?: Variants1;
  vertexFields?: VertexFields1;
  /**
   * UNDOCUMENTED.
   */
  vertexShader?: string;
  /**
   * UNDOCUMENTED.
   */
  vrGeometryShader?: string;
}
/**
 * UNDOCUMENTED.
 */
export interface BackFace {
  stencilDepthFailOp?: StencilDepthFailOperation;
  stencilFailOp?: StencilFailOperation;
  stencilFunc?: StencilFunction;
  stencilPass?: StencilPass;
  stencilPassOp?: StencilDepthFailOperation1;
}
/**
 * UNDOCUMENTED.
 */
export interface FrontFace {
  stencilDepthFailOp?: StencilDepthFailOperation;
  stencilFailOp?: StencilFailOperation;
  stencilFunc?: StencilFunction;
  stencilPass?: StencilPass;
  stencilPassOp?: StencilDepthFailOperation1;
}
/**
 * UNDOCUMENTED.
 */
export interface SampleState {
  /**
   * UNDOCUMENTED.
   */
  samplerIndex?: number;
  textureFilter?: TextureFilter;
  textureWrap?: TextureWrap;
}
/**
 * UNDOCUMENTED.
 */
export interface Variant {
  [k: string]: VariantItem;
}
/**
 * UNDOCUMENTED.
 */
export interface VariantItem {
  '+defines'?: Defines3;
  vertexFields?: VertexFields;
  states?: States3;
  '+states'?: States4;
  '-states'?: States5;
}
/**
 * UNDOCUMENTED.
 */
export interface VertexField {
  /**
   * UNDOCUMENTED.
   */
  field?: string;
}
