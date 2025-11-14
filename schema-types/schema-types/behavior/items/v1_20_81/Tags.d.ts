/**
 * behavior/items/format/components/tags.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:42.775Z
 */

/**
 * An array that can contain multiple item tags.
 *
 * @minItems 1
 */
export type Tags1 = [
  (
    | (
        | 'minecraft:arrow'
        | 'minecraft:banner'
        | 'minecraft:boat'
        | 'minecraft:boats'
        | 'minecraft:bookshelf_books'
        | 'minecraft:chainmail_tier'
        | 'minecraft:coals'
        | 'minecraft:crimson_stems'
        | 'minecraft:decorated_pot_sherds'
        | 'minecraft:diamond_tier'
        | 'minecraft:digger'
        | 'minecraft:door'
        | 'minecraft:golden_tier'
        | 'minecraft:hanging_actor'
        | 'minecraft:hanging_sign'
        | 'minecraft:horse_armor'
        | 'minecraft:iron_tier'
        | 'minecraft:is_armor'
        | 'minecraft:is_axe'
        | 'minecraft:is_cooked'
        | 'minecraft:is_fish'
        | 'minecraft:is_food'
        | 'minecraft:is_hoe'
        | 'minecraft:is_meat'
        | 'minecraft:is_minecart'
        | 'minecraft:is_pickaxe'
        | 'minecraft:is_shovel'
        | 'minecraft:is_sword'
        | 'minecraft:is_tool'
        | 'minecraft:is_trident'
        | 'minecraft:leather_tier'
        | 'minecraft:lectern_books'
        | 'minecraft:logs'
        | 'minecraft:logs_that_burn'
        | 'minecraft:mangrove_logs'
        | 'minecraft:music_disc'
        | 'minecraft:netherite_tier'
        | 'minecraft:planks'
        | 'minecraft:sand'
        | 'minecraft:sign'
        | 'minecraft:soul_fire_base_blocks'
        | 'minecraft:spawn_egg'
        | 'minecraft:stone_bricks'
        | 'minecraft:stone_crafting_materials'
        | 'minecraft:stone_tier'
        | 'minecraft:stone_tool_materials'
        | 'minecraft:transform_materials'
        | 'minecraft:transform_templates'
        | 'minecraft:transformable_items'
        | 'minecraft:trim_templates'
        | 'minecraft:trimmable_armors'
        | 'minecraft:vibration_damper'
        | 'minecraft:warped_stems'
        | 'minecraft:wooden_slabs'
        | 'minecraft:wooden_tier'
        | 'minecraft:wool'
      )
    | string
  ),
  ...(
    | (
        | 'minecraft:arrow'
        | 'minecraft:banner'
        | 'minecraft:boat'
        | 'minecraft:boats'
        | 'minecraft:bookshelf_books'
        | 'minecraft:chainmail_tier'
        | 'minecraft:coals'
        | 'minecraft:crimson_stems'
        | 'minecraft:decorated_pot_sherds'
        | 'minecraft:diamond_tier'
        | 'minecraft:digger'
        | 'minecraft:door'
        | 'minecraft:golden_tier'
        | 'minecraft:hanging_actor'
        | 'minecraft:hanging_sign'
        | 'minecraft:horse_armor'
        | 'minecraft:iron_tier'
        | 'minecraft:is_armor'
        | 'minecraft:is_axe'
        | 'minecraft:is_cooked'
        | 'minecraft:is_fish'
        | 'minecraft:is_food'
        | 'minecraft:is_hoe'
        | 'minecraft:is_meat'
        | 'minecraft:is_minecart'
        | 'minecraft:is_pickaxe'
        | 'minecraft:is_shovel'
        | 'minecraft:is_sword'
        | 'minecraft:is_tool'
        | 'minecraft:is_trident'
        | 'minecraft:leather_tier'
        | 'minecraft:lectern_books'
        | 'minecraft:logs'
        | 'minecraft:logs_that_burn'
        | 'minecraft:mangrove_logs'
        | 'minecraft:music_disc'
        | 'minecraft:netherite_tier'
        | 'minecraft:planks'
        | 'minecraft:sand'
        | 'minecraft:sign'
        | 'minecraft:soul_fire_base_blocks'
        | 'minecraft:spawn_egg'
        | 'minecraft:stone_bricks'
        | 'minecraft:stone_crafting_materials'
        | 'minecraft:stone_tier'
        | 'minecraft:stone_tool_materials'
        | 'minecraft:transform_materials'
        | 'minecraft:transform_templates'
        | 'minecraft:transformable_items'
        | 'minecraft:trim_templates'
        | 'minecraft:trimmable_armors'
        | 'minecraft:vibration_damper'
        | 'minecraft:warped_stems'
        | 'minecraft:wooden_slabs'
        | 'minecraft:wooden_tier'
        | 'minecraft:wool'
      )
    | string
  )[],
];

/**
 * The tags component determines which tags an item has on it.
 */
export interface Tags {
  tags: Tags1;
}
