# Bedrock Addon Parser

[![CI](https://github.com/EaseCation/bedrock-addon-parser/workflows/CI/badge.svg)](https://github.com/EaseCation/bedrock-addon-parser/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Minecraft Bedrock Addon 解析器，支持自动版本升级（1.19.0 → 1.21.60）。

## ✨ 特性

- **一行代码解析** - 简单易用的 API
- **自动版本升级** - 支持 8 个历史版本的自动升级到最新格式
- **标准化输出** - 统一的 Java DTO（StandardBlock/Item/Entity）
- **高性能** - 基于 GraalVM JS 引擎
- **类型安全** - 完整的 TypeScript 类型定义

## 📦 安装

### Gradle (Kotlin DSL)

```kotlin
implementation("net.easecation:bedrock-addon-parser:1.0.0")
```

### Maven

```xml
<dependency>
    <groupId>net.easecation</groupId>
    <artifactId>bedrock-addon-parser</artifactId>
    <version>1.0.0</version>
</dependency>
```

## 🚀 使用指南

### 基础用法

```java
import net.easecation.addonparser.AddonParser;
import net.easecation.addonparser.dto.ParsedAddon;
import net.easecation.addonparser.dto.StandardBlock;

import java.nio.file.Path;

// 一行代码解析 Addon
ParsedAddon addon = AddonParser.parse(Path.of("/path/to/behavior_pack"));

// 访问解析结果
for (StandardBlock block : addon.blocks()) {
    System.out.println("Block: " + block.identifier());
    System.out.println("  Hardness: " + block.hardness());
    System.out.println("  Light: " + block.lightEmission());
    System.out.println("  Source: " + block.metadata().sourceVersion());
}
```

### 批量解析（推荐）

复用 JSRuntime 实例以提升性能：

```java
import net.easecation.addonparser.loader.AddonLoader;
import net.easecation.addonparser.runtime.JSRuntime;

try (JSRuntime runtime = new JSRuntime()) {
    runtime.warmup();  // 预热 GraalVM（可选）
    AddonLoader loader = new AddonLoader(runtime);

    // 批量解析多个 Addon
    for (Path addonPath : addonPaths) {
        ParsedAddon addon = loader.loadAddon(addonPath);
        processAddon(addon);
    }
}
```

### 单文件解析

```java
import net.easecation.addonparser.runtime.JSRuntime;
import net.easecation.addonparser.runtime.JsonFile;

import java.nio.file.Files;
import java.util.List;

try (JSRuntime runtime = new JSRuntime()) {
    // 读取单个 JSON 文件
    String content = Files.readString(Path.of("blocks/my_block.json"));
    JsonFile file = new JsonFile("blocks/my_block.json", content);

    // 解析
    String resultJson = runtime.parseAddon(List.of(file));
    ParsedAddon addon = objectMapper.readValue(resultJson, ParsedAddon.class);
}
```

### 访问解析结果

```java
ParsedAddon addon = AddonParser.parse(addonPath);

// 访问 Blocks
for (StandardBlock block : addon.blocks()) {
    System.out.println("Identifier: " + block.identifier());
    System.out.println("Hardness: " + block.hardness());
    System.out.println("Light Emission: " + block.lightEmission());
    System.out.println("Friction: " + block.friction());

    // 元数据
    System.out.println("Source Version: " + block.metadata().sourceVersion());
    System.out.println("Source File: " + block.metadata().sourceFile());
    System.out.println("Upgrade Path: " + block.metadata().upgradePath());
}

// 访问 Items
for (StandardItem item : addon.items()) {
    System.out.println("Identifier: " + item.identifier());
    System.out.println("Max Stack Size: " + item.maxStackSize());
}

// 访问 Entities
for (StandardEntity entity : addon.entities()) {
    System.out.println("Identifier: " + entity.identifier());
    System.out.println("Is Summonable: " + entity.isSummonable());
}

// 元数据
ParsedAddon.Metadata metadata = addon.metadata();
System.out.println("Total Files: " + metadata.totalFiles());
System.out.println("Warnings: " + metadata.warnings());
```

## 🔄 支持的版本

| Minecraft 版本 | Schema 版本 | Blocks | Items | Entities |
|----------------|-------------|--------|-------|----------|
| 1.19.0         | c8128d1e    | ✓      | ✓     | ✓        |
| 1.19.40        | 28f69c0f    | ✓      | ✓     | ✓        |
| 1.19.50        | 2fe9f2ed    | ✓      | ✓     | ✓        |
| 1.20.10        | c3ab0975    | ✓      | ✓     | -        |
| 1.20.41        | d3a8c7a4    | ✓      | ✓     | -        |
| 1.20.81        | 0ed84930    | ✓      | ✓     | -        |
| 1.21.50        | ec99529c    | ✓      | ✓     | ✓        |
| 1.21.60        | 2d7ba565    | ✓      | ✓     | ✓        |

## 🛠️ 开发

### 项目结构

```
bedrock-addon-parser/
├── schemas/              # Git submodule (官方 JSON Schemas)
├── schema-types/         # TypeScript 类型定义（内部包）
├── parser-runtime/       # TypeScript 解析运行时（内部包）
├── java/                 # Java API（对外发布）
└── test-resources/       # 共享测试资源
```

### 构建

#### 使用 Gradle（推荐）

```bash
./gradlew build
```

自动执行：初始化 submodules → 安装依赖 → 生成类型 → 编译 TS → 打包 bundle.js → 编译 Java → 测试 → 生成 JAR

#### 分步构建

```bash
# 1. 初始化
npm run setup

# 2. 生成 TypeScript 类型
npm run generate

# 3. 构建 TypeScript
npm run build

# 4. 构建 Java
./gradlew build
```

### 优化构建

types目录存在时会自动跳过生成：

```bash
./gradlew build          # 跳过已存在的类型生成
./gradlew clean build    # 重新生成所有内容
```

### 测试

```bash
# TypeScript 测试（94% 覆盖率）
npm test

# Java 测试
./gradlew test

# 仅构建不测试
./gradlew build -x npmTest
```

### 清理

```bash
# 清理所有构建产物
./gradlew clean

# 或使用 npm
npm run clean
```

## 🔧 故障排除

### 问题：types/ 目录不存在

```bash
npm run generate
```

### 问题：bundle.js 找不到

```bash
npm run build:runtime
ls parser-runtime/dist/bundle.js  # 验证文件存在
```

### 问题：schemas submodule 为空

```bash
git submodule update --init --recursive
```

### 问题：TypeScript 找不到 @easecation/schema-types

```bash
npm install  # 重新安装 workspace 依赖
ls -la parser-runtime/node_modules/@easecation/  # 检查软链接
```

## 📄 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 🙏 致谢

- [Blockception/Minecraft-bedrock-json-schemas](https://github.com/Blockception/Minecraft-bedrock-json-schemas) - 官方 JSON Schema 仓库
- [GraalVM](https://www.graalvm.org/) - 高性能 JavaScript 引擎
- [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript) - TypeScript 类型生成工具
