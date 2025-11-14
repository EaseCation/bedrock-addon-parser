# 构建指南

## 快速开始

### 首次克隆后初始化

```bash
# 1. 初始化 git submodules 并安装依赖
npm run setup

# 2. 生成 TypeScript 类型定义
npm run generate

# 3. 构建所有包
npm run build

# 4. 构建 Java JAR
cd java && ./gradlew build
```

### 使用 Gradle 一键构建

Gradle 会自动处理所有步骤：

```bash
cd java
./gradlew build
```

这会自动执行：
1. ✓ 初始化 git submodules (`schemas/minecraft-bedrock-json-schemas`)
2. ✓ 安装 npm 依赖
3. ✓ 生成 schema types (从 JSON schemas)
4. ✓ 编译 schema-types (TypeScript)
5. ✓ 编译 parser-runtime (TypeScript + Webpack)
6. ✓ 复制 bundle.js 到 Java resources
7. ✓ 编译 Java 代码
8. ✓ 打包 JAR

## 项目结构

```
bedrock-addon-parser/           # Monorepo 根目录
├── schemas/                     # Git submodule
│   └── minecraft-bedrock-json-schemas/  # 官方 JSON Schemas
│
├── schema-types/                # 📦 TypeScript 类型定义包 (内部)
│   ├── src/                     # 类型生成器源码
│   ├── types/                   # 生成的 .d.ts 文件 (自动生成，不提交)
│   └── version-mapping.json     # 版本映射配置
│
├── parser-runtime/              # 📦 TypeScript 解析运行时包 (内部)
│   ├── src/typescript/          # 解析器源码
│   ├── __tests__/               # Jest 测试
│   └── dist/                    # 编译输出 (bundle.js)
│
├── java/                        # ☕ Java Maven 发布包
│   ├── src/main/java/           # Java 源码
│   ├── src/main/resources/      # bundle.js (从 parser-runtime 复制)
│   └── build.gradle.kts         # Gradle 构建配置
│
└── test-resources/              # 🧪 共享测试资源
    ├── blocks/
    ├── items/
    └── entities/
```

## 开发工作流

### 修改 TypeScript 代码

```bash
# 在 parser-runtime/ 目录
cd parser-runtime
npm run build          # 编译并打包
npm test               # 运行测试
npm run test:coverage  # 测试覆盖率
```

### 修改 Java 代码

```bash
cd java
./gradlew compileJava  # 只编译 Java
./gradlew test         # 运行测试
./gradlew jar          # 打包 JAR
```

### 更新 Schema Versions

当 Minecraft 发布新版本时：

1. 更新 `schema-types/version-mapping.json`
2. 运行 `npm run generate`
3. 重新构建

## 清理

```bash
# 清理 npm 构建产物
npm run clean

# 清理所有构建产物 (包括 Gradle)
npm run clean:all

# 或使用 Gradle
cd java && ./gradlew clean
```

## Gradle 任务说明

| 任务 | 描述 |
|------|------|
| `initSubmodules` | 初始化 git submodules |
| `npmInstallRoot` | 安装 npm 依赖 |
| `generateSchemaTypes` | 生成 TypeScript 类型定义 |
| `npmBuildSchema` | 编译 schema-types |
| `npmBuildRuntime` | 编译 parser-runtime |
| `copyBundle` | 复制 bundle.js 到 Java resources |
| `npmTest` | 运行 TypeScript 测试 |
| `build` | 完整构建流程 |

## NPM Scripts 说明

| 命令 | 描述 |
|------|------|
| `npm run setup` | 首次初始化 (submodules + install) |
| `npm run generate` | 生成 schema types |
| `npm run build` | 构建所有 TypeScript 包 |
| `npm run test` | 运行所有测试 |
| `npm run clean` | 清理构建产物 |

## 依赖关系

```
initSubmodules
    ↓
npmInstallRoot
    ↓
generateSchemaTypes (生成 types/)
    ↓
npmBuildSchema (编译 schema-types)
    ↓
npmBuildRuntime (编译 parser-runtime → bundle.js)
    ↓
copyBundle (复制到 java/src/main/resources/)
    ↓
compileJava
    ↓
jar
```

## 故障排除

### 问题：TypeScript 找不到 @easecation/schema-types

**解决方案**：
```bash
# 确保 npm workspaces 正确安装
npm install

# 检查软链接
ls -la parser-runtime/node_modules/@easecation/
# 应该看到 schema-types -> ../../schema-types
```

### 问题：schemas submodule 为空

**解决方案**：
```bash
git submodule update --init --recursive
```

### 问题：types/ 目录不存在

**解决方案**：
```bash
npm run generate
```

### 问题：bundle.js 找不到

**解决方案**：
```bash
npm run build:runtime
# 检查 parser-runtime/dist/bundle.js 是否存在
```

## CI/CD 配置

GitHub Actions 工作流示例：

```yaml
- name: Checkout with submodules
  uses: actions/checkout@v3
  with:
    submodules: recursive

- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '18'

- name: Setup Java
  uses: actions/setup-java@v3
  with:
    java-version: '21'

- name: Build
  run: |
    npm run setup
    npm run build
    cd java && ./gradlew build
```
