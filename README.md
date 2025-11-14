# Bedrock Addon Parser

[![CI](https://github.com/EaseCation/bedrock-addon-parser/workflows/CI/badge.svg)](https://github.com/EaseCation/bedrock-addon-parser/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Minecraft Bedrock Addon 解析器，支持自动版本升级功能（1.19.0 → 1.21.60）。

## ✨ 特性

- ✅ **一行代码完成 Addon 解析** - 简单易用的 API
- ✅ **自动版本升级** - 支持 8 个历史版本的自动升级
- ✅ **标准化输出** - 统一的 Java DTO（StandardBlock/Item/Entity）
- ✅ **高性能** - 基于 GraalVM JS 引擎
- ✅ **类型安全** - 完整的 TypeScript 类型定义
- ✅ **94% 测试覆盖率** - 可靠的代码质量
- ✅ **Monorepo 架构** - npm workspaces + Gradle 集成

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

## 🚀 快速开始

### 基础用法

```java
import net.easecation.addonparser.AddonParser;
import net.easecation.addonparser.dto.ParsedAddon;
import net.easecation.addonparser.dto.StandardBlock;

import java.nio.file.Path;

public class Example {
    public static void main(String[] args) throws Exception {
        // 一行代码解析 Addon
        ParsedAddon addon = AddonParser.parse(
            Path.of("/path/to/behavior_pack")
        );

        // 访问解析结果
        for (StandardBlock block : addon.blocks()) {
            System.out.println("Block: " + block.identifier());
            System.out.println("  Hardness: " + block.hardness());
            System.out.println("  Light: " + block.lightEmission());
            System.out.println("  Source Version: " + block.metadata().sourceVersion());
        }
    }
}
```

### 批量解析（性能优化）

```java
import net.easecation.addonparser.loader.AddonLoader;
import net.easecation.addonparser.runtime.JSRuntime;

// 复用 JSRuntime 实例以提升性能
try (JSRuntime runtime = new JSRuntime()) {
    runtime.warmup();  // 可选：预热 GraalVM
    AddonLoader loader = new AddonLoader(runtime);

    // 批量解析多个 Addon
    for (Path addonPath : addonPaths) {
        ParsedAddon addon = loader.loadAddon(addonPath);
        processAddon(addon);
    }
}
```

## 🏗️ 项目架构

本项目采用 **Monorepo** 架构，包含 3 个子包：

```
bedrock-addon-parser/           # Monorepo 根目录
├── schemas/                     # Git submodule
│   └── minecraft-bedrock-json-schemas/  # 官方 JSON Schemas
│
├── schema-types/                # 📦 TypeScript 类型定义包 (内部)
│   ├── src/                     # 类型生成器
│   └── types/                   # 生成的 .d.ts 文件
│
├── parser-runtime/              # 📦 TypeScript 解析运行时 (内部)
│   ├── src/typescript/          # 解析、升级、转换器
│   ├── __tests__/               # Jest 测试
│   └── dist/bundle.js           # Webpack 打包产物
│
├── java/                        # ☕ Java API (对外发布)
│   ├── src/main/java/           # Java 源码
│   └── src/main/resources/      # bundle.js
│
└── test-resources/              # 🧪 共享测试资源
```

## 🛠️ 开发

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
1. ✓ 初始化 git submodules
2. ✓ 安装 npm 依赖
3. ✓ 生成 schema types
4. ✓ 编译 TypeScript
5. ✓ 打包 bundle.js
6. ✓ 编译 Java 代码
7. ✓ 运行测试
8. ✓ 生成 JAR

详细的构建指南请参考 [docs/BUILD.md](docs/BUILD.md)。

## 📖 文档

- [构建指南](docs/BUILD.md) - 完整的构建和开发说明
- [架构说明](docs/ARCHITECTURE.md) - 项目架构设计
- [API 文档](docs/API.md) - 详细的 API 说明
- [版本历史](CHANGELOG.md) - 更新日志

## 🧪 测试

```bash
# 运行 TypeScript 测试
npm test

# 查看测试覆盖率
npm run test:coverage

# 运行 Java 测试
cd java && ./gradlew test
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

## 📄 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

开发前请阅读 [docs/BUILD.md](docs/BUILD.md) 了解项目结构和构建流程。

## 📮 联系

- GitHub: https://github.com/EaseCation/bedrock-addon-parser
- Issues: https://github.com/EaseCation/bedrock-addon-parser/issues

## 🙏 致谢

- [Blockception/Minecraft-bedrock-json-schemas](https://github.com/Blockception/Minecraft-bedrock-json-schemas) - 官方 JSON Schema 仓库
- [GraalVM](https://www.graalvm.org/) - 高性能 JavaScript 引擎
- [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript) - TypeScript 类型生成工具
