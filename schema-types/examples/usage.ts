/**
 * TypeScript 类型使用示例
 *
 * 展示如何使用生成的 Minecraft Bedrock Schema 类型定义
 */

// ==============================================
// 示例 1: 使用最新版本的 Items 类型
// ==============================================

import { Item as Item_v1_21_60 } from '../types/behavior/items/v1_21_60/Items';

const customSword: Item_v1_21_60 = {
  format_version: '1.21.60',
  'minecraft:item': {
    description: {
      identifier: 'mypack:custom_sword',
      menu_category: {
        category: 'equipment',
        group: 'itemGroup.name.sword'
      }
    },
    components: {
      'minecraft:max_stack_size': 1,
      'minecraft:damage': 10,
      'minecraft:durability': {
        max_durability: 250
      },
      'minecraft:hand_equipped': true,
      'minecraft:icon': 'custom_sword',
      'minecraft:display_name': {
        value: '自定义剑'
      }
    }
  }
};

// ==============================================
// 示例 2: 使用历史版本的类型
// ==============================================

import { Item as Item_v1_20_81 } from '../types/behavior/items/v1_20_81/Items';

const oldItem: Item_v1_20_81 = {
  format_version: '1.20.81',
  'minecraft:item': {
    description: {
      identifier: 'mypack:old_item'
    },
    components: {
      'minecraft:max_stack_size': {
        value: 64
      }
    }
  }
};

// ==============================================
// 示例 3: 版本迁移
// ==============================================

/**
 * 将旧版本的 item 迁移到新版本
 */
function migrateItemTo1_21_60(oldItem: Item_v1_20_81): Item_v1_21_60 {
  // 创建新版本的 item，注意类型可能不完全兼容，需要手动转换
  const newItem: Item_v1_21_60 = {
    format_version: '1.21.60',
    'minecraft:item': {
      description: {
        identifier: oldItem['minecraft:item'].description.identifier,
        menu_category: oldItem['minecraft:item'].description.menu_category
      },
      components: {}
    }
  };

  // 手动迁移 components（因为类型可能有细微差别）
  const oldComponents = oldItem['minecraft:item'].components;
  if (oldComponents) {
    if (oldComponents['minecraft:max_stack_size']) {
      newItem['minecraft:item'].components!['minecraft:max_stack_size'] =
        oldComponents['minecraft:max_stack_size'];
    }
  }

  return newItem;
}

const migratedItem = migrateItemTo1_21_60(oldItem);
console.log('迁移后的物品:', migratedItem['minecraft:item'].description.identifier);

// ==============================================
// 示例 4: 使用 Blocks 类型
// ==============================================

import type { BlockBehavior } from '../types/behavior/blocks/v1_21_60';

const customBlock: BlockBehavior = {
  format_version: '1.21.60',
  'minecraft:block': {
    description: {
      identifier: 'mypack:custom_block',
      menu_category: {
        category: 'construction'
      }
    },
    components: {
      'minecraft:loot': 'loot_tables/blocks/custom_block.json',
      'minecraft:geometry': 'geometry.custom_block',
      'minecraft:material_instances': {
        '*': {
          texture: 'custom_block',
          render_method: 'opaque'
        }
      }
    }
  }
};

console.log('自定义方块:', customBlock['minecraft:block'].description.identifier);

// ==============================================
// 示例 5: 类型安全的配置
// ==============================================

/**
 * 类型安全的 Item 构建器
 */
class ItemBuilder {
  private readonly item: Item_v1_21_60;

  constructor(identifier: string) {
    this.item = {
      format_version: '1.21.60',
      'minecraft:item': {
        description: {
          identifier
        },
        components: {}
      }
    };
  }

  setMaxStackSize(size: number): this {
    if (!this.item['minecraft:item'].components) {
      this.item['minecraft:item'].components = {};
    }
    this.item['minecraft:item'].components['minecraft:max_stack_size'] = size;
    return this;
  }

  setDamage(damage: number): this {
    if (!this.item['minecraft:item'].components) {
      this.item['minecraft:item'].components = {};
    }
    this.item['minecraft:item'].components['minecraft:damage'] = damage;
    return this;
  }

  setDurability(maxDurability: number): this {
    if (!this.item['minecraft:item'].components) {
      this.item['minecraft:item'].components = {};
    }
    this.item['minecraft:item'].components['minecraft:durability'] = {
      max_durability: maxDurability
    };
    return this;
  }

  setIcon(icon: string): this {
    if (!this.item['minecraft:item'].components) {
      this.item['minecraft:item'].components = {};
    }
    this.item['minecraft:item'].components['minecraft:icon'] = icon;
    return this;
  }

  build(): Item_v1_21_60 {
    return this.item;
  }
}

// 使用构建器
const builtItem = new ItemBuilder('mypack:builder_item')
  .setMaxStackSize(1)
  .setDamage(15)
  .setDurability(500)
  .setIcon('builder_item')
  .build();

console.log('构建的物品:', builtItem['minecraft:item'].description.identifier);

// ==============================================
// 示例 6: 多版本兼容性检查
// ==============================================

/**
 * 检查 item 是否兼容指定版本
 */
function isCompatibleWith(item: Item_v1_21_60, targetVersion: string): boolean {
  const itemVersion = item.format_version;

  // 简单的版本比较（实际应用中应使用更复杂的版本比较逻辑）
  const itemParts = itemVersion.split('.').map(Number);
  const targetParts = targetVersion.split('.').map(Number);

  for (let i = 0; i < 3; i++) {
    if (itemParts[i] < targetParts[i]) return false;
    if (itemParts[i] > targetParts[i]) return true;
  }

  return true;
}

console.log('Item 兼容 1.21.50?', isCompatibleWith(customSword, '1.21.50')); // true
console.log('Item 兼容 1.22.0?', isCompatibleWith(customSword, '1.22.0')); // false

// ==============================================
// 示例 7: JSON 序列化
// ==============================================

/**
 * 将 item 导出为 JSON 字符串
 */
function exportItemToJSON(item: Item_v1_21_60): string {
  return JSON.stringify(item, null, 2);
}

const itemJSON = exportItemToJSON(customSword);
console.log('导出的 JSON:');
console.log(itemJSON);

/**
 * 从 JSON 加载 item（带类型验证）
 */
function loadItemFromJSON(json: string): Item_v1_21_60 {
  const parsed = JSON.parse(json);

  // 运行时验证（可选）
  if (!parsed.format_version || !parsed['minecraft:item']) {
    throw new Error('无效的 item JSON 格式');
  }

  return parsed as Item_v1_21_60;
}

const loadedItem = loadItemFromJSON(itemJSON);
console.log('加载的物品:', loadedItem['minecraft:item'].description.identifier);

// ==============================================
// 示例 8: 类型守卫
// ==============================================

/**
 * 检查对象是否是有效的 Item
 */
function isValidItem(obj: unknown): obj is Item_v1_21_60 {
  if (!obj || typeof obj !== 'object') return false;

  const item = obj as Record<string, unknown>;

  return (
    typeof item.format_version === 'string' &&
    item['minecraft:item'] !== undefined &&
    typeof item['minecraft:item'] === 'object'
  );
}

const maybeItem: unknown = JSON.parse('{"format_version": "1.21.60", "minecraft:item": {"description": {"identifier": "test:item"}}}');

if (isValidItem(maybeItem)) {
  // TypeScript 知道这里 maybeItem 是 Item_v1_21_60 类型
  console.log('有效的 item:', maybeItem.format_version);
}

// ==============================================
// 示例 9: 使用组件类型
// ==============================================

import type { Food } from '../types/behavior/items/v1_21_60';

const foodComponent: Food = {
  can_always_eat: false,
  nutrition: 4,
  saturation_modifier: 0.6,
  using_converts_to: 'minecraft:bowl'
};

const customFood: Item_v1_21_60 = {
  format_version: '1.21.60',
  'minecraft:item': {
    description: {
      identifier: 'mypack:mushroom_stew'
    },
    components: {
      'minecraft:food': foodComponent,
      'minecraft:max_stack_size': 1,
      'minecraft:use_animation': 'eat'
    }
  }
};

console.log('自定义食物:', customFood['minecraft:item'].description.identifier);

// ==============================================
// 示例 10: 方块组件使用
// ==============================================

import type { MaterialInstances } from '../types/behavior/blocks/v1_21_60';

const materialInstances: MaterialInstances = {
  '*': {
    texture: 'my_texture',
    render_method: 'alpha_test',
    face_dimming: true,
    ambient_occlusion: true
  },
  'up': {
    texture: 'my_texture_top'
  },
  'down': {
    texture: 'my_texture_bottom'
  }
};

const blockWithMaterials: BlockBehavior = {
  format_version: '1.21.60',
  'minecraft:block': {
    description: {
      identifier: 'mypack:fancy_block'
    },
    components: {
      'minecraft:material_instances': materialInstances,
      'minecraft:destructible_by_mining': {
        seconds_to_destroy: 2.0
      },
      'minecraft:friction': 0.6
    }
  }
};

console.log('带材质的方块:', blockWithMaterials['minecraft:block'].description.identifier);

// ==============================================
// 总结
// ==============================================

console.log('\n✅ 所有示例运行成功！');
console.log('');
console.log('这些示例展示了如何：');
console.log('1. 导入和使用不同版本的类型定义');
console.log('2. 在多个版本之间进行迁移');
console.log('3. 构建类型安全的工具类');
console.log('4. 执行版本兼容性检查');
console.log('5. 进行 JSON 序列化和反序列化');
console.log('6. 使用类型守卫进行运行时验证');
console.log('7. 使用独立的组件类型定义');
console.log('8. 构建复杂的方块和物品定义');
