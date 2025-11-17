# parser-runtime CLAUDE.md

此文件提供 parser-runtime 模块的开发指南，特别是升级器（Upgrader）的实现规范。

## 模块概述

parser-runtime 是 Bedrock Addon Parser 的 TypeScript 运行时层，负责：
- JSON Schema 解析
- 版本升级（BlockUpgrader/ItemUpgrader/EntityUpgrader）
- 标准化转换（BlockConverter/ItemConverter/EntityConverter）

## 升级器实现规范（强类型最佳实践）

### 核心原则

使用**构造型 + 强类型 + 零内部拷贝**策略

### 完整代码模板

```typescript
private static upgrade_1_20_41_to_1_20_81(
  data: ItemV1_20_41,  // ✅ 强类型输入
  warnings: string[]
): ItemV1_20_81 {     // ✅ 强类型输出

  // ✅ 直接读取（不需要深拷贝，入口已处理）
  const minecraftItem = data['minecraft:item'];
  const oldComponents = minecraftItem.components || {};

  // ✅ 明确声明目标类型
  const newComponents: ItemV1_20_81['minecraft:item']['components'] = {};
  const processedKeys = new Set<string>();

  // ✅ 类型安全的字段处理
  if (oldComponents['minecraft:max_stack_size'] !== undefined) {
    const value = oldComponents['minecraft:max_stack_size'];
    if (typeof value === 'number') {
      // 转换为新格式
      newComponents['minecraft:max_stack_size'] = { value: value };
    } else {
      // 已经是新格式，直接引用（入口已深拷贝）
      newComponents['minecraft:max_stack_size'] = value;
    }
    processedKeys.add('minecraft:max_stack_size');
  }

  // ✅ 复制未处理的组件（直接引用，入口已深拷贝）
  for (const key of Object.keys(oldComponents)) {
    if (!processedKeys.has(key)) {
      (newComponents as any)[key] = oldComponents[key];
    }
  }

  // ✅ 构造型返回（明确的对象结构）
  return {
    format_version: '1.20.81',
    'minecraft:item': {
      description: minecraftItem.description,  // 直接引用
      components: newComponents
    }
  };
}
```

---

## 四大核心原则

### 原则 1：不在升级器内部进行深拷贝

```typescript
// ❌ 错误：冗余的深拷贝
private static upgrade_1_20_41_to_1_20_81(data: ItemV1_20_41, warnings: string[]) {
  const result = JSON.parse(JSON.stringify(data));  // ❌ 入口已深拷贝，这里重复了
  // ...
}

// ✅ 正确：直接读取
private static upgrade_1_20_41_to_1_20_81(data: ItemV1_20_41, warnings: string[]) {
  const oldComponents = data['minecraft:item'].components || {};  // ✅ 直接读取
  // ...
}
```

**原因**：`upgradeToLatest()` 入口已经深拷贝（line 85: `let current = JSON.parse(JSON.stringify(data))`），各个升级器接收的已经是拷贝数据。

**性能影响**：
- ❌ 每个升级器内部深拷贝：N 次（N = 组件数量）
- ✅ 入口统一深拷贝：1 次
- **收益**：小文件减少 5-6 次深拷贝，大文件减少 50+ 次深拷贝

---

### 原则 2：使用构造型而非修改型

```typescript
// ❌ 避免：修改型（需要大量 as any）
private static upgrade_1_20_41_to_1_20_81(data: ItemV1_20_41, warnings: string[]) {
  const result = data as any;
  result.format_version = '1.20.81';
  const components = result['minecraft:item'].components || {};
  components['minecraft:max_stack_size'] = { value: oldValue };
  return result as ItemV1_20_81;
}

// ✅ 推荐：构造型（类型安全）
private static upgrade_1_20_41_to_1_20_81(data: ItemV1_20_41, warnings: string[]) {
  const newComponents: ItemV1_20_81['minecraft:item']['components'] = {};
  // 构造新组件...
  return {
    format_version: '1.20.81',
    'minecraft:item': {
      description: data['minecraft:item'].description,
      components: newComponents
    }
  };
}
```

**收益**：
- ✅ 编译器可以验证返回对象的类型正确性
- ✅ IDE 提供完整的类型提示
- ✅ 减少 `as any` 的使用（仅在必要时使用）
- ✅ 重构时有类型保护

---

### 原则 3：直接访问字段，避免遍历

```typescript
// ❌ 避免：遍历导致类型丢失
for (const [key, value] of Object.entries(oldComponents)) {
  // value 的类型是 unknown，无法类型安全地处理
  newComponents[key] = value;  // 类型错误！
}

// ✅ 推荐：直接访问已知字段
if (oldComponents['minecraft:max_stack_size'] !== undefined) {
  const value = oldComponents['minecraft:max_stack_size'];
  // value 的类型是 number | { value: number } | undefined，类型安全！
  if (typeof value === 'number') {
    newComponents['minecraft:max_stack_size'] = { value: value };
  }
}
```

**原因**：TypeScript 的索引签名 `[k: string]: unknown` 导致 `Object.entries()` 返回 `unknown` 类型，编译器无法进行类型推断和检查。

---

### 原则 4：`as any` 仅在必要时使用

```typescript
// ✅ 可接受的 as any 使用场景

// 1. 复制未知组件（无法预知所有组件类型）
for (const key of Object.keys(oldComponents)) {
  if (!processedKeys.has(key)) {
    (newComponents as any)[key] = oldComponents[key];  // ✅ 明确标注
  }
}

// 2. 处理多态类型的兜底分支
if (typeof foilValue === 'boolean') {
  newComponents['minecraft:glint'] = { value: foilValue };
} else {
  // foilValue 在 v1.20.41 中只能是 boolean，但为了兜底
  newComponents['minecraft:glint'] = foilValue as any;  // ✅ 添加注释说明
}

// 3. 访问类型定义不完善的字段
const protection = (armor as any).protection;  // ✅ 注明原因
```

**要求**：每个 `as any` 都必须有清晰的注释说明原因。

---

## 处理多态类型的4种模式

Minecraft JSON Schema 中存在大量多态类型（如 `number | { value: number }`），升级器需要统一处理：

### 模式 1：简单值 → 对象包装

```typescript
if (oldComponents['minecraft:max_stack_size'] !== undefined) {
  const value = oldComponents['minecraft:max_stack_size'];
  if (typeof value === 'number') {
    // v1.20.41: number → v1.20.81: { value: number }
    newComponents['minecraft:max_stack_size'] = { value: value };
    warnings.push(`[${identifier}] Converted max_stack_size to object format`);
  } else {
    // 已经是对象格式，直接引用
    newComponents['minecraft:max_stack_size'] = value;
  }
  processedKeys.add('minecraft:max_stack_size');
}
```

### 模式 2：字段迁移

```typescript
// max_damage → durability.max_durability
if (oldComponents['minecraft:max_damage'] !== undefined) {
  const maxDamage = oldComponents['minecraft:max_damage'];
  const existingDurability = newComponents['minecraft:durability'] || oldComponents['minecraft:durability'];

  if (existingDurability) {
    // 合并现有 durability（直接引用，入口已深拷贝）
    newComponents['minecraft:durability'] = {
      ...existingDurability,
      max_durability: maxDamage
    };
    if (oldComponents['minecraft:durability']) {
      processedKeys.add('minecraft:durability');
    }
  } else {
    // 创建新的 durability
    newComponents['minecraft:durability'] = {
      max_durability: maxDamage
    };
  }

  warnings.push(`[${identifier}] Migrated max_damage to durability.max_durability`);
  processedKeys.add('minecraft:max_damage');
}
```

### 模式 3：字段重命名

```typescript
// foil → glint
if (oldComponents['minecraft:foil'] !== undefined) {
  const foilValue = oldComponents['minecraft:foil'];
  if (typeof foilValue === 'boolean') {
    newComponents['minecraft:glint'] = { value: foilValue };
  } else {
    newComponents['minecraft:glint'] = foilValue as any;
  }
  warnings.push(`[${identifier}] Renamed foil to glint`);
  processedKeys.add('minecraft:foil');
}
```

### 模式 4：移除废弃组件

```typescript
const deprecatedComponents = [
  'minecraft:weapon',
  'minecraft:knockback_resistance',
  'minecraft:on_use',
  'minecraft:projectile',
  // ...
];

for (const comp of deprecatedComponents) {
  if (oldComponents[comp] !== undefined) {
    warnings.push(`[${identifier}] Removed deprecated component: ${comp}`);
    processedKeys.add(comp);
  }
}
```

---

## 完整示例参考

**参考实现**：`src/typescript/upgrader/ItemUpgrader.ts` 中的 `upgrade_1_20_41_to_1_20_81()` 函数

这是最复杂的升级器，处理了 7 大类变更：
1. 简单值 → 对象包装（max_stack_size, hand_equipped）
2. 字段迁移（max_damage → durability.max_durability）
3. 字段重命名（foil → glint）
4. 复杂迁移（armor → wearable.protection）
5. 移除 8 个废弃组件
6. 条件性警告（建议添加 enchantable）
7. 保留所有未处理的组件

**特点**：
- ✅ 强类型输入/输出（ItemV1_20_41 → ItemV1_20_81）
- ✅ 零内部拷贝（仅在入口深拷贝）
- ✅ 构造型实现（明确的对象结构）
- ✅ 类型安全（仅3处 `as any`，都有注释）
- ✅ 所有测试通过（42/42）

**测试覆盖**：
- Immutability：`should not modify original data`
- 功能正确性：所有组件转换测试
- 边缘情况：空组件、已存在的组件、混合格式

---

## 添加新升级器的检查清单

在实现新的升级器时，请确保：

- [ ] **函数签名使用强类型**（输入和输出都要明确类型）
- [ ] **不在函数内部调用 `JSON.parse(JSON.stringify())`**
- [ ] **使用构造型返回对象**（明确的 `return { ... }`）
- [ ] **直接访问已知字段**（不使用 `Object.entries()` 遍历）
- [ ] **`as any` 有注释说明**（每个都要说明原因）
- [ ] **保留未处理的组件**（复制到新对象，不能丢失）
- [ ] **记录警告信息**（字段迁移、删除、转换都要记录）
- [ ] **编写单元测试**（至少覆盖主要变更）
- [ ] **TypeScript 编译通过**（0个类型错误）
- [ ] **测试通过**（包括 immutability 测试）

---

## 常见陷阱

### ❌ 陷阱 1：过度深拷贝

```typescript
// ❌ 错误：不需要深拷贝
newComponents['minecraft:icon'] = JSON.parse(JSON.stringify(oldComponents['minecraft:icon']));

// ✅ 正确：直接引用（入口已深拷贝）
newComponents['minecraft:icon'] = oldComponents['minecraft:icon'];
```

**原因**：入口处（`upgradeToLatest`）已经进行了深拷贝，内部再拷贝是冗余的。

---

### ❌ 陷阱 2：滥用 as any

```typescript
// ❌ 错误：破坏类型安全
const result = data as any;
result.format_version = '1.20.81';
result['minecraft:item'].components['minecraft:max_stack_size'] = { value: 64 };
return result as ItemV1_20_81;

// ✅ 正确：构造型，类型安全
const result: ItemV1_20_81 = {
  format_version: '1.20.81',
  'minecraft:item': {
    description: data['minecraft:item'].description,
    components: newComponents
  }
};
return result;
```

**原因**：修改型需要大量 `as any`，失去类型检查；构造型明确类型，编译器可以验证。

---

### ❌ 陷阱 3：忘记标记已处理的组件

```typescript
// ❌ 错误：会导致组件被重复复制
if (oldComponents['minecraft:max_damage']) {
  newComponents['minecraft:durability'] = { max_durability: oldComponents['minecraft:max_damage'] };
  // 忘记添加 processedKeys.add('minecraft:max_damage')
}

// 后续的 for 循环会再次复制 max_damage！
for (const key of Object.keys(oldComponents)) {
  if (!processedKeys.has(key)) {
    (newComponents as any)[key] = oldComponents[key];  // 会复制 max_damage
  }
}

// ✅ 正确：标记已处理
if (oldComponents['minecraft:max_damage']) {
  newComponents['minecraft:durability'] = { max_durability: oldComponents['minecraft:max_damage'] };
  processedKeys.add('minecraft:max_damage');  // ✅ 标记，避免重复
}
```

---

## 设计原理

### 为什么不在升级器内部深拷贝？

**调用链分析**：
```typescript
// ItemUpgrader.ts line 85
static upgradeToLatest(data, fromVersion) {
  let current = JSON.parse(JSON.stringify(data));  // ⭐ 入口深拷贝

  for (let i = startIndex; i < VERSION_SEQUENCE.length - 1; i++) {
    current = upgrader(current, warnings);  // 传递的是拷贝
  }

  return { data: current, ... };
}
```

**责任分离**：
- **入口层**（`upgradeToLatest`）：负责 immutability（深拷贝）
- **转换层**（各个 `upgrader`）：负责版本转换逻辑（纯函数）

### 为什么使用构造型？

**类型安全对比**：

| 维度 | 修改型 | 构造型 |
|------|--------|--------|
| 类型检查 | ❌ 需要大量 `as any` | ✅ 编译器验证 |
| IDE 支持 | ⭐⭐ 中等 | ⭐⭐⭐ 优秀 |
| 重构安全 | ❌ 无保护 | ✅ 类型保护 |
| 代码可读性 | ⭐⭐ 中等 | ⭐⭐⭐ 优秀 |

### 为什么直接访问字段？

**类型推断问题**：
```typescript
interface Components {
  'minecraft:max_stack_size'?: number | { value: number };
  [k: string]: unknown;  // ⚠️ 索引签名
}

// ❌ 遍历导致类型丢失
for (const [key, value] of Object.entries(components)) {
  // value: unknown（因为索引签名）
}

// ✅ 直接访问保持类型
const value = components['minecraft:max_stack_size'];
// value: number | { value: number } | undefined（类型安全）
```

---

## 性能优化记录

### 优化前（过度深拷贝）
```typescript
private static upgrade_1_20_41_to_1_20_81(data, warnings) {
  const result = JSON.parse(JSON.stringify(data));  // 拷贝 1

  // 每个组件都深拷贝
  newComponents['minecraft:icon'] = JSON.parse(JSON.stringify(...));  // 拷贝 2
  newComponents['minecraft:durability'] = { ...JSON.parse(JSON.stringify(...)) };  // 拷贝 3
  // ... 更多拷贝

  description: JSON.parse(JSON.stringify(description))  // 拷贝 N
}
```

**总深拷贝次数**：1（入口）+ 1（函数开头）+ N（每个组件）= **1 + 1 + N 次**

### 优化后（零内部拷贝）
```typescript
private static upgrade_1_20_41_to_1_20_81(data, warnings) {
  const oldComponents = data['minecraft:item'].components || {};

  // 直接引用
  newComponents['minecraft:icon'] = oldComponents['minecraft:icon'];
  description: data['minecraft:item'].description
}
```

**总深拷贝次数**：1（入口）= **1 次**

**性能提升**：
- 小文件（5个组件）：7次 → 1次 = **7倍减少**
- 大文件（50个组件）：52次 → 1次 = **52倍减少**

---

## 开发工作流

### 1. 添加新版本支持

1. 更新 `schema-types/version-mapping.json`
2. 生成新版本类型：`npm run generate:all`
3. 实现升级器函数（参考本文档）
4. 更新 `VERSION_SEQUENCE` 和 `upgraders` 映射表
5. 编写单元测试
6. 运行测试验证

### 2. 测试验证

```bash
# 编译检查（类型安全）
npm run build:tsc

# 单元测试
npm test -- ItemUpgrader.test.ts

# 集成测试（使用官方样例）
npm test -- integration/
```

### 3. 代码审查重点

- [ ] 函数签名是否使用强类型
- [ ] 是否有冗余的深拷贝
- [ ] `as any` 是否有注释
- [ ] 所有组件是否被处理或保留
- [ ] 测试是否覆盖主要变更

---

## 测试资源目录规范

### 目录结构

所有测试资源统一放在 `__tests__/resources/` 下：

```
__tests__/
├── resources/              # 所有本地测试资源
│   ├── blocks/            # Block 测试数据
│   │   ├── invalid/       # 无效文件（错误处理测试）
│   │   └── v{version}/    # 各版本测试文件
│   ├── items/             # Item 测试数据
│   ├── entities/          # Entity 测试数据
│   ├── biomes/            # Biome 测试数据
│   └── addons/            # 完整 Addon 示例
├── integration/           # 集成测试（使用官方样例）
└── *.test.ts              # 单元测试
```

### 测试数据来源

1. **自定义测试数据**：`__tests__/resources/`
   - 用于单元测试
   - 包含边界情况、错误处理等
   - 精简版本（仅保留关键版本）

2. **官方样例**：`test-data/bedrock-samples/` (Git Submodule)
   - 用于集成测试
   - Mojang官方提供的真实世界数据
   - 更新：`git submodule update --remote`

### 文件命名约定

- **简单测试**：`simple_{type}.json`（如 `simple_block.json`）
- **复杂测试**：`complex_{type}.json`（包含多个组件）
- **边缘情况**：`edge_case.json`（测试边界条件）
- **特定功能**：`{feature}_{type}.json`（如 `armor_item.json`）
- **无效文件**：放在 `invalid/` 子目录，命名描述错误类型（如 `missing_identifier.json`）

### 引用规范

使用统一的 helper 函数：

```typescript
function loadTestFile(version: string, filename: string): string {
  const filePath = path.join(__dirname, 'resources', '{type}', version, filename);
  return fs.readFileSync(filePath, 'utf-8');
}

// 使用示例
const json = loadTestFile('v1_19_0', 'simple_item.json');
```

### 添加新版本测试资源

1. 在对应目录下创建版本文件夹：`__tests__/resources/{type}/v{version}/`
2. 至少包含 `simple_{type}.json`（基础测试用例）
3. 如果该版本有特殊变更，添加对应的测试文件
4. 在测试文件中添加对应的测试用例

### 版本选择策略

对于多版本升级器（如Block/Item），测试资源应包含：
- **边界版本**：首版本和最新版本（必须）
- **关键版本**：有重大变更的版本（推荐）
- **中间版本**：可选（Entity仅保留边界版本 v1.19.0 和 v1.21.60）

**示例**：
- **Items/Blocks**：保留 9-10 个关键版本（v1.19.0, v1.19.40, ..., v1.21.60）
- **Entities**：仅保留 2 个边界版本（v1.19.0, v1.21.60）
- **Biomes**：根据需要选择

---

## 相关文档

- **项目架构**：`../CLAUDE.md`
- **升级器代码**：`src/typescript/upgrader/*Upgrader.ts`
- **类型定义**：`../schema-types/types/behavior/items/`
- **测试文件**：`__tests__/*Upgrader.test.ts`

---

**维护者**：EaseCation Team
**最后更新**：2025-01-17
**状态**：✅ 已验证（基于 ItemUpgrader v1.20.41 → v1.20.81 实验）
