# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Bedrock Addon Parser 是一个 Minecraft Bedrock Edition 插件解析器，采用 **Java + JavaScript 混合架构**，利用 GraalVM JS 引擎在运行时解析和升级 Minecraft Addon 文件。

核心设计理念：**职责分离**
- **JavaScript 层**：负责复杂的 JSON Schema 解析、版本升级、多态类型处理
- **Java 层**：提供简洁的 API 和标准化 DTO，供服务器插件（如 Nukkit/PNX）使用

这种架构将代码量从 10,690 个 Java 文件减少到 500 个以下，大幅降低维护成本。

## 架构设计

### 数据流

```
用户文件系统
  ↓
Java 文件扫描 (AddonLoader)
  ↓ [传递 List<JsonFile>]
JS 运行时层 (GraalVM)
  ├─ 解析器 (AddonParser)
  ├─ 版本升级器 (BlockUpgrader/ItemUpgrader/EntityUpgrader)
  └─ 标准化转换器 (BlockConverter/ItemConverter/EntityConverter)
  ↓ [返回标准化 JSON]
Java DTO 层 (StandardBlock/StandardItem/StandardEntity)
  ↓
业务逻辑层（用户代码）
```

### 核心模块

| 模块 | 语言 | 职责 |
|------|------|------|
| **java/** | Java 21 | 对外 API、DTO 定义、GraalVM 封装 |
| **parser-runtime/** | TypeScript | JS 运行时：解析、升级、转换逻辑 |
| **schema-types/** | TypeScript | 从官方 JSON Schema 自动生成的类型定义 |
| **schemas/** | Git Submodule | 官方 JSON Schema 仓库（Blockception） |

### 版本支持

支持 8 个历史版本的自动升级：
- 1.19.0 → 1.19.40 → 1.19.50 → 1.20.10 → 1.20.41 → 1.20.81 → 1.21.50 → **1.21.60（最新）**

所有旧版本文件都会自动升级到最新格式，并转换为统一的标准化 DTO。

## 常用命令

### 构建

```bash
# 完整构建（推荐）
./gradlew build

# 构建流程：
# 1. 初始化 Git Submodules (schemas/)
# 2. 安装 npm 依赖（workspace 模式）
# 3. 生成 TypeScript 类型（如果 types/ 不存在）
# 4. 编译 TypeScript → JavaScript
# 5. 打包 bundle.js（Webpack）
# 6. 复制 bundle.js 到 Java resources
# 7. 编译 Java
# 8. 运行测试（TS + Java）

# 优化构建（跳过已存在的 types）
./gradlew build  # types/ 存在时会跳过生成

# 清理并重新生成所有内容
./gradlew clean build
```

### 测试

```bash
# TypeScript 测试（94% 覆盖率）
npm test
npm run test:coverage

# Java 测试
./gradlew test

# 仅构建不测试
./gradlew build -x npmTest
```

### 开发

```bash
# 初始化项目（首次克隆后）
npm run setup  # 等价于 git submodule init + npm install

# 生成 TypeScript 类型（从 JSON Schema）
npm run generate

# 仅构建 TypeScript（不打包）
npm run build:tsc

# 监听模式（开发 TypeScript）
npm run dev

# 清理所有构建产物
./gradlew clean
npm run clean
```

### 单独构建模块

```bash
# 仅构建 schema-types
cd schema-types && npm run build

# 仅构建 parser-runtime
cd parser-runtime && npm run build

# 重新生成类型（强制）
rm -rf schema-types/types
npm run generate
```

## 核心设计模式

### 1. 版本升级策略：线性升级链

**关键文件**：`parser-runtime/src/typescript/upgrader/*Upgrader.ts`

```typescript
// 升级器采用链式顺序升级，不寻找最短路径
// 原因：开服时只运行一次，性能要求不高，但逻辑简单可靠

class BlockUpgrader {
  // 版本序列（严格按时间顺序）
  VERSION_SEQUENCE = ['1.19.0', '1.19.40', ..., '1.21.60'];

  // 升级器映射表
  upgraders = new Map([
    ['1.19.40', upgrade_1_19_40_to_1_19_50],
    ['1.19.50', upgrade_1_19_50_to_1_20_10],
    // ...
  ]);

  upgradeToLatest(data, fromVersion) {
    // 从 fromVersion 开始，逐版本升级到最新版本
    for (let i = startIndex; i < VERSION_SEQUENCE.length - 1; i++) {
      data = upgraders[i](data);
    }
  }
}
```

**注意事项**：
- 如果某个版本没有升级器，说明该版本到下一版本无变化（向下兼容）
- 每个升级器只处理**单个版本跳跃**，不跨版本升级
- 必须保持 `VERSION_SEQUENCE` 的顺序正确

### 2. 标准化 DTO 设计原则

**关键文件**：`parser-runtime/src/typescript/converter/*Converter.ts`

#### 2.1 核心原则

##### 原则 1: 消除多态性（Eliminate Polymorphism）

**所有多态类型必须在 Converter 层归一化为固定的复杂对象结构。**

Minecraft 官方 JSON Schema 中存在大量多态类型（如 `string | object` 或 `boolean | object`），这些类型在原始 JSON 中用于简化书写，但会导致类型不安全。标准化 DTO 必须将所有多态类型转换为统一的复杂结构。

```typescript
// ❌ 错误：保留多态性
interface MaterialInstance {
  value: string | {
    texture?: string;
    faceDimming?: boolean;
    renderMethod?: string;
  };
}

// ✅ 正确：始终使用固定的对象结构
interface MaterialInstance {
  texture: string | null;
  ambientOcclusion: boolean | number | null;
  faceDimming: boolean | null;
  renderMethod: 'opaque' | 'double_sided' | 'blend' | 'alpha_test' | 'alpha_test_single_sided' | null;
}
```

**转换规则**：
- 简单值（字符串/布尔/数字）→ 在 Converter 中转换为对象，未赋值的字段设为 `null`
- 复杂对象 → 规范化所有字段，缺失字段设为 `null`

```typescript
// Converter 实现示例
private static normalizeMaterialInstance(raw: any): MaterialInstance {
  // 简单字符串格式: "stone" → 完整对象
  if (typeof raw === 'string') {
    return {
      texture: raw,
      ambientOcclusion: null,
      faceDimming: null,
      renderMethod: null
    };
  }

  // 复杂对象格式: {...} → 规范化所有字段
  if (typeof raw === 'object') {
    return {
      texture: raw.texture ?? null,
      ambientOcclusion: raw.ambient_occlusion ?? null,
      faceDimming: raw.face_dimming ?? null,
      renderMethod: raw.render_method ?? null
    };
  }

  // 异常情况
  return null;
}
```

**收益**：
- ✅ **类型安全**：使用者无需判断是 `string` 还是 `object`
- ✅ **统一访问**：始终通过 `instance.texture` 访问，不需要 `instanceof` 判断
- ✅ **IDE 支持**：完整的代码补全和类型检查
- ✅ **避免运行时错误**：编译期即可发现类型错误

##### 原则 2: 扁平化常用字段（Flatten Frequently Used Fields）

将深层嵌套的常用字段提升到 DTO 顶层，降低使用者的访问成本。

```typescript
// ❌ 避免：深层嵌套
interface OldBlock {
  "minecraft:block": {
    components: {
      "minecraft:light_emission": { emission: number };
      "minecraft:destructible_by_mining": { seconds_to_destroy: number };
    };
  };
}

// ✅ 推荐：扁平化
interface StandardBlock {
  identifier: string;
  lightEmission: number | null;     // 直接提取
  hardness: number | null;          // 从 destructible_by_mining 提取
  explosionResistance: number | null; // 从 destructible_by_explosion 提取

  // 不常用的组件保留在 components
  components: Record<string, any>;
}
```

**扁平化优先级**：
- **高频字段**（如 `lightEmission`, `hardness`, `maxHealth`）→ 提升到顶层
- **结构化组件**（如 `food`, `wearable`, `materialInstances`）→ 创建专用 DTO 并提升到顶层
- **低频组件**（如自定义组件）→ 保留在 `components` 字典中

##### 原则 3: 保留完整元数据（Preserve Complete Metadata）

记录数据来源、升级路径、警告信息，便于调试和追溯。

```typescript
interface StandardBlock {
  // ... 业务字段

  metadata: {
    sourceVersion: string;      // 原始文件版本
    upgradePath: string[];      // 升级经过的版本序列
    warnings: string[];         // 升级过程中的警告
    sourceFile: string;         // 原始文件路径
  };
}
```

#### 2.2 实施指南

##### Java DTO 定义规范

```java
// ✅ 所有字段使用 @Nullable 注解
// ✅ 使用 record 类型确保不可变性
// ✅ JSON 字段名使用 snake_case（通过 @JsonProperty 映射）
public record MaterialInstance(
    @JsonProperty("texture") @Nullable String texture,
    @JsonProperty("ambient_occlusion") @Nullable Object ambientOcclusion,  // boolean | number
    @JsonProperty("face_dimming") @Nullable Boolean faceDimming,
    @JsonProperty("render_method") @Nullable RenderMethod renderMethod
) {
    public enum RenderMethod {
        @JsonProperty("opaque") OPAQUE,
        @JsonProperty("double_sided") DOUBLE_SIDED,
        @JsonProperty("blend") BLEND,
        @JsonProperty("alpha_test") ALPHA_TEST,
        @JsonProperty("alpha_test_single_sided") ALPHA_TEST_SINGLE_SIDED
    }
}
```

##### TypeScript Converter 实现规范

```typescript
// ✅ 使用基类方法处理常见多态类型
export class BlockConverter extends StandardConverter {
  public static toStandard(block: MinecraftBlock_v1_21_60): StandardBlock {
    const components = block['minecraft:block'].components || {};

    return {
      identifier: block['minecraft:block'].description.identifier,

      // 使用基类方法归一化简单多态类型
      lightEmission: this.extractFloat(components['minecraft:light_emission']),

      // 复杂多态类型需要自定义方法
      materialInstances: this.normalizeMaterialInstances(
        components['minecraft:material_instances']
      ),

      // ...
    };
  }

  // 自定义归一化方法
  private static normalizeMaterialInstances(raw: any): Record<string, MaterialInstance> | undefined {
    // 实现归一化逻辑...
  }
}

// 基类提供的通用方法
export abstract class StandardConverter {
  // number | {value: number} → number
  protected static extractFloat(component: any): number | undefined {
    if (typeof component === 'number') return component;
    if (typeof component === 'object' && component?.value) {
      return typeof component.value === 'number' ? component.value : undefined;
    }
    return undefined;
  }

  // boolean | {value: boolean} → boolean
  protected static extractBoolean(component: any): boolean | undefined {
    if (typeof component === 'boolean') return component;
    if (typeof component === 'object' && component?.value) {
      return typeof component.value === 'boolean' ? component.value : undefined;
    }
    return undefined;
  }

  // string | {value: string} → string
  protected static extractString(component: any): string | undefined {
    if (typeof component === 'string') return component;
    if (typeof component === 'object' && component?.value) {
      return typeof component.value === 'string' ? component.value : undefined;
    }
    return undefined;
  }
}
```

##### TypeScript 与 Java 类型同步要求

**强制要求**：TypeScript 接口和 Java DTO 必须 100% 一致！

```typescript
// parser-runtime/src/typescript/index.ts
export interface StandardBlock {
  identifier: string;
  lightEmission?: number;
  materialInstances?: Record<string, MaterialInstance>;
  metadata: BlockMetadata;
}
```

```java
// java/src/main/java/net/easecation/addonparser/dto/StandardBlock.java
public record StandardBlock(
    String identifier,
    @JsonProperty("light_emission") @Nullable Float lightEmission,
    @JsonProperty("material_instances") @Nullable Map<String, MaterialInstance> materialInstances,
    BlockMetadata metadata
) {}
```

**同步检查清单**：
- [ ] 字段名称一致（TypeScript camelCase ↔ Java camelCase + @JsonProperty snake_case）
- [ ] 字段类型一致（注意 TypeScript `number` ↔ Java `Float/Double/Integer`）
- [ ] 可选性一致（TypeScript `?` ↔ Java `@Nullable`）
- [ ] 嵌套结构一致（两侧的子 DTO 也必须同步）

#### 2.3 常见多态类型归一化示例

| 组件名 | 原始类型 | 归一化后类型 | 转换规则 |
|--------|---------|-------------|---------|
| `minecraft:damage` | `number \| {value: number}` | `number` | 使用 `extractFloat()` |
| `minecraft:max_stack_size` | `number \| {value: number}` | `number` | 使用 `extractFloat()` |
| `minecraft:glint` | `boolean \| {value: boolean}` | `boolean` | 使用 `extractBoolean()` |
| `minecraft:collision_box` | `boolean \| {...}` | `BoundingBox \| null` | `false` → `null`, `true` → 默认值, `{...}` → 对象 |
| `minecraft:material_instances` | `string \| {...}` | `MaterialInstance` | `"stone"` → `{texture: "stone", ...}` |
| `minecraft:geometry` | `string \| {...}` | `string` | 提取 `identifier` 字段 |
| `minecraft:icon` | `string \| {...}` | `string` | 提取 `texture` 或 `textures.default` |

### 3. GraalVM 互操作性

**关键文件**：`java/src/main/java/net/easecation/addonparser/runtime/JSRuntime.java`

Java 与 JavaScript 的数据传递：
- **输入**：Java 将 `List<JsonFile>` 序列化为 JSON 字符串
- **输出**：JS 返回标准化 JSON 字符串，Java 反序列化为 DTO

```java
// Java → JS
String filesJson = objectMapper.writeValueAsString(files);
String resultJson = jsRuntime.parseAddon(filesJson);

// JS → Java
ParsedAddon addon = objectMapper.readValue(resultJson, ParsedAddon.class);
```

**沙箱配置**：
- 禁用文件 IO (`allowIO(false)`)
- 禁用 JNI (`allowNativeAccess(false)`)
- 禁用跨语言访问 (`allowPolyglotAccess(NONE)`)

### 4. Monorepo Workspace 结构

使用 npm workspaces 管理多包依赖：

```json
{
  "workspaces": [
    "schema-types",
    "parser-runtime"
  ]
}
```

- `parser-runtime` 依赖 `@easecation/schema-types`
- 通过软链接实现本地包引用
- Gradle 自动编排 npm 构建任务

## 开发指南

### 添加新版本支持

1. **更新 schema-types/version-mapping.json**
```json
{
  "versions": {
    "1.22.0": "abc123def"  // Git commit hash
  }
}
```

2. **生成新版本类型**
```bash
cd schema-types
npm run generate:all
```

3. **实现升级器**
```typescript
// parser-runtime/src/typescript/upgrader/BlockUpgrader.ts
private static upgrade_1_21_60_to_1_22_0(data: any, warnings: string[]): any {
  const result = JSON.parse(JSON.stringify(data)); // 深拷贝

  // 处理字段变更
  // 例如：重命名字段、转换类型、移除废弃字段

  result.format_version = '1.22.0';
  return result;
}
```

4. **更新升级器映射表**
```typescript
VERSION_SEQUENCE = [..., '1.21.60', '1.22.0'];
upgraders.set('1.21.60', upgrade_1_21_60_to_1_22_0);
```

5. **编写测试**
```typescript
// parser-runtime/src/__tests__/upgrader/BlockUpgrader.test.ts
test('should upgrade from 1.21.60 to 1.22.0', () => {
  const input = { /* 旧版本数据 */ };
  const result = BlockUpgrader.upgradeToLatest(input, '1.21.60');
  expect(result.data.format_version).toBe('1.22.0');
});
```

### 修改标准化 DTO

如果需要修改 `StandardBlock`/`StandardItem`/`StandardEntity`：

1. **同步修改 TypeScript 接口**
```typescript
// parser-runtime/src/typescript/index.ts
export interface StandardBlock {
  newField?: string;  // 添加新字段
}
```

2. **同步修改 Java DTO**
```java
// java/src/main/java/net/easecation/addonparser/dto/StandardBlock.java
public record StandardBlock(
    String identifier,
    @JsonProperty("new_field") String newField  // 添加新字段
) {}
```

3. **更新转换器**
```typescript
// parser-runtime/src/typescript/converter/BlockConverter.ts
const standard: StandardBlock = {
  identifier: ...,
  newField: extractNewField(components)  // 提取新字段
};
```

### 调试 GraalVM

如果遇到 JS 运行时错误：

1. **查看完整错误栈**
```java
// JSRuntime.java 已配置详细错误信息
catch (Exception e) {
  throw new RuntimeException("Failed to execute parseAddon", e);
}
```

2. **测试 bundle.js**
```bash
# 验证打包后的 JS 可执行
node parser-runtime/dist/bundle.js

# 检查导出
grep "AddonBridgeRuntime" parser-runtime/dist/bundle.js
```

3. **使用 warmup() 预热**
```java
try (JSRuntime runtime = new JSRuntime()) {
    runtime.warmup();  // 触发 JIT 编译
    // ...
}
```

### 性能优化

**复用 JSRuntime 实例**（批量解析）：
```java
try (JSRuntime runtime = new JSRuntime()) {
    runtime.warmup();
    AddonLoader loader = new AddonLoader(runtime);

    for (Path addonPath : addonPaths) {
        ParsedAddon addon = loader.loadAddon(addonPath);
        // ...
    }
}
```

**跳过类型生成**（提升构建速度）：
```bash
# 首次构建
./gradlew build  # 生成 types/

# 后续构建
./gradlew build  # 自动跳过已存在的 types/

# 强制重新生成
rm -rf schema-types/types && ./gradlew build
```

## 故障排除

### types/ 目录不存在

```bash
# 检查 submodule
git submodule update --init --recursive
ls -la schemas/minecraft-bedrock-json-schemas

# 手动生成
npm run generate
ls -la schema-types/types
```

### bundle.js 找不到

```bash
# 检查构建产物
ls -la parser-runtime/dist/bundle.js
ls -la java/src/main/resources/bundle.js

# 重新构建
./gradlew clean build
```

### TypeScript 找不到 @easecation/schema-types

```bash
# 检查 workspace 链接
ls -la parser-runtime/node_modules/@easecation/
# 应该看到软链接指向 ../../schema-types

# 重新安装
rm -rf node_modules */node_modules
npm install
```

### GraalVM 沙箱错误

如果看到 `PolyglotException: Access denied`：
- 检查 JS 代码是否尝试访问文件系统（不允许）
- 检查是否尝试使用 Node.js API（不支持）
- 使用纯 ES2020+ 标准 API

### 测试失败

```bash
# 单独运行 TS 测试
npm run test:runtime

# 查看覆盖率
npm run test:coverage
open parser-runtime/coverage/lcov-report/index.html

# 单独运行 Java 测试
./gradlew test --tests "JSRuntimeTest"
```

## 重要约定

### 代码风格

- **TypeScript**：使用 ESLint + Prettier（配置见 `parser-runtime/.eslintrc.js`）
- **Java**：遵循 Google Java Style Guide
- **命名**：TypeScript 用 camelCase，Java 用 camelCase，JSON 用 snake_case

### Git Commit 规范

```
feat: 添加 1.22.0 版本支持
fix: 修复 lightEmission 转换错误
refactor: 重构 BlockUpgrader 升级逻辑
test: 增加 EntityConverter 单元测试
docs: 更新 CLAUDE.md
chore: 升级依赖版本
```

### 测试覆盖率要求

- TypeScript：**≥ 80%** （当前 94%）
- Java：**≥ 70%**

### 文件命名

- TypeScript 升级器：`*Upgrader.ts`
- TypeScript 转换器：`*Converter.ts`
- Java DTO：`Standard*.java`
- 测试文件：`*.test.ts` / `*Test.java`

## 相关文档

- **架构设计**：`docs/architecture-migration-to-js-runtime.md`
- **README**：项目根目录 `README.md`
- **官方 Schema**：https://github.com/Blockception/Minecraft-bedrock-json-schemas
- **GraalVM 文档**：https://www.graalvm.org/latest/reference-manual/js/

## 技术栈

| 组件 | 版本 | 说明 |
|------|------|------|
| Java | 21 | 要求 Java 21+ |
| TypeScript | 5.6+ | 使用 ES2020+ 特性 |
| GraalVM JS | 23.1.2 | 高性能 JS 引擎 |
| Webpack | 5.90+ | 打包 bundle.js |
| Jest | 29.7+ | TS 单元测试 |
| JUnit | 5.10+ | Java 单元测试 |
| Jackson | 2.18+ | JSON 序列化/反序列化 |

## 核心理念

基于架构文档的设计哲学：

1. **职责分离**：JavaScript 处理动态类型和复杂解析，Java 处理静态类型和业务逻辑
2. **线性升级**：采用链式顺序升级，逻辑简单可靠，易于维护
3. **标准化输出**：统一的 DTO 降低用户心智负担
4. **类型安全**：完整的 TypeScript 类型定义 + Jackson 注解
5. **自动化优先**：从 JSON Schema 自动生成类型，减少人工维护

---

**维护者**：EaseCation Team
**最后更新**：2025-01-14
**项目状态**：✅ 生产就绪（v1.0.0）
