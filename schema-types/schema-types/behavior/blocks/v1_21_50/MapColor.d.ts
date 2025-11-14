/**
 * behavior/blocks/format/components/map_color.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:54.423Z
 */

/**
 * Sets the color of the block when rendered to a map. The color is represented as a hex value in the format "#RRGGBB". May also be expressed as an array of [R, G, B] from 0 to 255. If this component is omitted, the block will not show up on the map.
 */
export type MapColor = string | [] | [number] | [number, number] | [number, number, number];
