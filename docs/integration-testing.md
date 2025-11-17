# 集成测试指南

本文档说明如何使用和维护基于 Mojang 官方 bedrock-samples 的集成测试。

## 概述

集成测试使用 [Mojang/bedrock-samples](https://github.com/Mojang/bedrock-samples) 作为测试数据源，该仓库包含 Minecraft Bedrock Edition 的官方行为包示例。

**测试数据规模**：
- **Items**: 70个官方物品定义
- **Entities**: 122个官方实体定义
- **数据源**: 官方发布的 behavior_pack

## 测试目的

集成测试的主要目的是**发现问题**而非强制通过：

1. ✅ **验证真实兼容性**：使用官方JSON文件测试解析器
2. ✅ **发现边界情况**：暴露手工测试未覆盖的问题
3. ✅ **监控版本变化**：跟踪Minecraft版本更新的影响
4. ❌ **不追求100%通过率**：允许合理的失败（不支持的版本、实验性功能等）

## 快速开始

### 初始化测试数据

```bash
# 方式1：使用Gradle自动初始化
./gradlew initTestData

# 方式2：手动初始化submodule
git submodule update --init --recursive parser-runtime/test-data/bedrock-samples
```

### 运行测试

```bash
# 仅运行集成测试
npm run test:integration

# 运行单元测试 + 集成测试
npm test

# CI模式（并行执行）
npm run test:ci
```

## 测试结构

```
parser-runtime/
├── __tests__/
│   ├── *Parser.test.ts          # 单元测试
│   ├── *Upgrader.test.ts        # 单元测试
│   ├── *Converter.test.ts       # 单元测试
│   └── integration/             # 集成测试
│       ├── OfficialItems.test.ts    (70个官方items)
│       └── OfficialEntities.test.ts (122个官方entities)
├── resources/                   # 手工测试数据（单元测试）
└── test-data/                   # 外部测试数据（集成测试）
    └── bedrock-samples/         # Git Submodule
        └── behavior_pack/
            ├── items/           (70个JSON文件)
            └── entities/        (122个JSON文件)
```

## 测试覆盖内容

### OfficialItems.test.ts

测试70个官方物品的解析、升级和转换：

- **批量解析测试**
  - 解析所有70个官方items
  - 验证identifier格式
  - 提取版本信息

- **版本升级测试**
  - 升级到最新版本（1.21.60）
  - 记录升级路径和警告

- **标准化转换测试**
  - 转换为 StandardItem DTO
  - 验证 metadata 完整性

- **特定物品类型测试**
  - 食物类：apple
  - 特殊物品：golden_apple
  - Bundle系列（如果存在）
  - 武器类（如果存在）

- **性能测试**
  - 批量解析性能（< 5秒）
  - 完整流程性能（< 10秒）

### OfficialEntities.test.ts

测试122个官方实体，结构类似Items测试，包括：
- chicken、cow、pig等被动生物
- zombie、creeper、skeleton等敌对生物
- ender_dragon等Boss实体
- 复杂component_groups（如sheep颜色变体）

## 常见失败原因

### 1. 不支持的版本（已通过版本推断解决）

**现象**（已优化）：
```
⚠️ 版本推断: 1.20.50 → 1.20.41 (向下兼容模式，可能缺少新特性)
```

**原因**：官方samples使用了中间版本（如 1.20.50），不在官方支持列表中

**处理**：
- ✅ **已自动处理**：系统会自动推断最接近的支持版本
- 推断策略：优先选择 floor（向下兼容），其次选择 ceil（向上兼容）
- 推断过程会记录在 `warnings` 和 `upgradePath` 中
- **效果**：Items 成功率从 0% 提升到 94.3%（66/70）

**如需严格模式**（不推断，直接报错）：
```typescript
ItemUpgrader.upgradeToLatest(data, '1.20.50', true); // strictMode = true
```

### 2. JSON5 格式

**现象**：
```
Expected double-quoted property name in JSON at position 694
```

**原因**：官方文件包含trailing commas（JSON5格式）

**处理**：
- ✅ 正常现象，JSON.parse无法处理JSON5
- 可考虑引入JSON5解析器（需评估影响）

### 3. 实验性组件

**现象**：
```
Unknown component: minecraft:experimental_feature
```

**原因**：官方使用了实验性或未文档化的组件

**处理**：
- ✅ 正常现象，可在Converter中添加null处理
- 记录到warnings而不是抛出错误

## 更新测试数据

### 更新到最新版本

```bash
# 1. 查看可用版本
cd parser-runtime/test-data/bedrock-samples
git fetch --tags
git tag | tail -10

# 2. 切换到目标版本
git checkout v1.21.120.4  # 替换为最新版本

# 3. 返回项目根目录并提交更新
cd ../../..
git add parser-runtime/test-data/bedrock-samples
git commit -m "test: update bedrock-samples to v1.21.120.4"

# 4. 运行测试验证
npm run test:integration
```

### 版本选择建议

- **稳定版本**：使用最新的稳定release（如v1.21.120.x）
- **避免preview版本**：preview可能包含实验性功能
- **匹配项目目标**：优先选择与项目支持版本接近的版本

## 分析测试结果

### 成功率分析

测试会输出详细的成功率统计：

```
✓ 成功解析 66/70 个官方 items (94.3%)
⚠️  解析失败的文件 (4/70):
   - appleEnchanted.json: Expected double-quoted property name...
   - golden_apple.json: Expected double-quoted property name...
   - pufferfish.json: Expected ',' or '}' after property value...
   - wheat_seeds.json: Expected ',' or '}' after property value...
```

**分析**：
- **94.3%成功率**：非常好，说明解析器兼容性良好
- **4个失败**：都是JSON5格式问题，属于预期失败

### 识别真正的Bug

**真正的Bug特征**：
- ✅ 标准JSON格式文件解析失败
- ✅ 支持的版本升级失败
- ✅ 标准组件转换错误

**预期失败特征**：
- ❌ JSON5格式错误（trailing commas）
- ❌ 不支持的版本（1.20.50等）
- ❌ 实验性或未文档化组件

## 维护建议

### 定期更新（建议每季度）

```bash
# 1. 检查官方更新
cd parser-runtime/test-data/bedrock-samples
git fetch --tags
git tag | tail -5

# 2. 更新到最新版本
git checkout <latest-version>

# 3. 运行测试
cd ../../..
npm run test:integration > integration-test-report.txt

# 4. 分析新增失败
# 对比上次测试结果，识别新增的失败case
```

### 处理新发现的问题

1. **优先级判断**：
   - 高：标准文件解析失败
   - 中：新版本组件缺失
   - 低：JSON5格式、实验性功能

2. **修复流程**：
   ```bash
   # 1. 创建issue记录问题
   # 2. 添加单元测试复现
   # 3. 修复代码
   # 4. 验证集成测试通过
   ```

3. **文档更新**：
   - 在 `docs/compatibility-notes.md` 记录已知问题
   - 更新版本支持列表

## CI/CD 集成

### GitHub Actions配置

项目的CI配置已自动支持submodules：

```yaml
# .github/workflows/ci.yml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    submodules: recursive  # 自动初始化test-data/bedrock-samples
```

### 测试策略

- **PR检查**：运行完整测试（单元+集成）
- **main分支**：运行完整测试 + 生成覆盖率报告
- **定时任务**：每周运行一次集成测试，监控官方更新

## 常见问题

### Q: Submodule未初始化怎么办？

```bash
# 错误：⚠️  bedrock-samples not found
./gradlew initTestData
```

### Q: 测试超时怎么办？

Jest配置了30秒超时，如果超时：
```bash
# 减少测试范围（在测试文件中调整slice数量）
files.slice(0, 30)  # 只测试前30个

# 或增加超时时间（jest.config.js）
testTimeout: 60000  # 60秒
```

### Q: 如何跳过集成测试？

```bash
# 仅运行单元测试
npm run test:unit

# Gradle中跳过npm测试
./gradlew build -x npmTest
```

### Q: 如何调试失败的case？

```typescript
// 在测试文件中添加console.log
try {
  const content = loadOfficialItem(filename);
  console.log('Parsing:', filename);
  console.log('Content length:', content.length);
  const result = parser.parseItem(content, `items/${filename}`);
} catch (e) {
  console.error('Failed:', filename, e.message);
  console.error('Stack:', e.stack);
}
```

## 相关文档

- [README.md](../README.md) - 项目总览
- [CLAUDE.md](../CLAUDE.md) - 开发指南
- [Architecture Migration](./architecture-migration-to-js-runtime.md) - 架构设计

---

**最后更新**: 2025-01-16
**维护者**: EaseCation Team
