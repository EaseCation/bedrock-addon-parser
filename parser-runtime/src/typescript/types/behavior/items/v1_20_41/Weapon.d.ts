/**
 * behavior/items/format/components/weapon.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:35.011Z
 */

/**
 * Weapon Item Component. Added to every weapon item such as axe, sword, trident, bow, crossbow.
 */
export interface Weapon {
  on_hit_block?: OnHitBlock;
  on_hurt_entity?: OnHurtEntity;
  on_not_hurt_entity?: OnNotHurtEntity;
}
/**
 * Trigger for letting you know when this item is used to hit a block.
 */
export interface OnHitBlock {}
/**
 * Trigger for letting you know when this item is used to hurt another mob.
 */
export interface OnHurtEntity {}
/**
 * Trigger for letting you know when this item hit another actor, but didn't do damage.
 */
export interface OnNotHurtEntity {}
