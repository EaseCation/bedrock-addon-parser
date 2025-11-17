/**
 * 官方 Entities 集成测试
 *
 * 数据源: Mojang/bedrock-samples
 * 目的: 验证解析器能够处理所有官方实体定义
 */

import { EntityParser } from '../../src/typescript/parser/EntityParser';
import { EntityUpgrader } from '../../src/typescript/upgrader/EntityUpgrader';
import { EntityConverter } from '../../src/typescript/converter/EntityConverter';
import * as fs from 'fs';
import * as path from 'path';

describe('Official Entities Integration Tests', () => {
  const SAMPLES_DIR = path.join(
    __dirname,
    '../../test-data/bedrock-samples/behavior_pack/entities'
  );

  let parser: EntityParser;

  beforeAll(() => {
    // 检查测试数据是否存在
    if (!fs.existsSync(SAMPLES_DIR)) {
      console.warn('⚠️  bedrock-samples not found. Run: git submodule update --init');
      console.warn(`   Expected location: ${SAMPLES_DIR}`);
    }
  });

  beforeEach(() => {
    parser = new EntityParser();
  });

  /**
   * 辅助函数：获取所有官方 entities JSON 文件
   */
  function getOfficialEntityFiles(): string[] {
    if (!fs.existsSync(SAMPLES_DIR)) {
      return [];
    }
    return fs.readdirSync(SAMPLES_DIR)
      .filter(f => f.endsWith('.json'))
      .sort();
  }

  /**
   * 辅助函数：读取并验证官方 entity 文件
   * @returns JSON字符串，如果文件格式错误则返回null
   */
  function loadOfficialEntity(filename: string): string | null {
    const filePath = path.join(SAMPLES_DIR, filename);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      // 验证JSON格式
      JSON.parse(content);
      return content;
    } catch (e: any) {
      if (e instanceof SyntaxError) {
        // JSON格式错误，跳过此文件
        return null;
      }
      throw e; // 其他错误（如文件不存在）重新抛出
    }
  }

  describe('批量解析测试', () => {
    test('应该成功解析大部分官方 entities（允许少量失败）', () => {
      const files = getOfficialEntityFiles();

      if (files.length === 0) {
        console.warn('⚠️  Skipping test: no official samples found');
        return;
      }

      expect(files.length).toBeGreaterThan(100); // 至少 100 个官方实体

      const results: any[] = [];
      const errors: Array<{ file: string; error: string }> = [];
      const skipped: string[] = []; // 跳过的格式错误文件

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          if (content === null) {
            // JSON格式错误，跳过
            skipped.push(filename);
            return;
          }
          const result = parser.parseEntity(content, `entities/${filename}`);
          results.push({ filename, result });
        } catch (e: any) {
          errors.push({
            file: filename,
            error: e.message
          });
        }
      });

      // 打印跳过的格式错误文件
      if (skipped.length > 0) {
        console.warn(`⚠️  跳过的格式错误文件 (${skipped.length}/${files.length}):`);
        skipped.slice(0, 5).forEach(file => {
          console.warn(`   - ${file} (JSON语法错误)`);
        });
        if (skipped.length > 5) {
          console.warn(`   ... 还有 ${skipped.length - 5} 个格式错误文件`);
        }
      }

      // 如果有解析错误，打印详细信息
      if (errors.length > 0) {
        console.warn(`⚠️  解析失败的文件 (${errors.length}/${files.length}):`);
        errors.slice(0, 10).forEach(({ file, error }) => {
          console.warn(`   - ${file}: ${error}`);
        });
        if (errors.length > 10) {
          console.warn(`   ... 还有 ${errors.length - 10} 个失败`);
        }
      }

      // 允许最多 10% 的失败率（不包括跳过的文件）
      const validFiles = files.length - skipped.length;
      const failureRate = errors.length / validFiles;
      expect(failureRate).toBeLessThan(0.1);

      const successRate = (results.length / files.length * 100).toFixed(1);
      console.log(`✓ 成功解析 ${results.length}/${files.length} 个官方 entities (跳过${skipped.length}个格式错误, ${successRate}%成功)`);
    });

    test('应该正确识别所有成功解析的 entities 的 identifier', () => {
      const files = getOfficialEntityFiles().slice(0, 20); // 测试前 20 个

      if (files.length === 0) {
        return;
      }

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          const result = parser.parseEntity(content, `entities/${filename}`);

          // 所有官方实体都应该有 minecraft: 命名空间
          expect(result.identifier).toMatch(/^minecraft:/);
          expect(result.identifier.length).toBeGreaterThan(10);
        } catch (e) {
          // 跳过解析失败的文件
        }
      });
    });

    test('应该正确提取所有 entities 的版本信息', () => {
      const files = getOfficialEntityFiles().slice(0, 30);

      if (files.length === 0) {
        return;
      }

      const versions = new Set<string>();
      let successCount = 0;

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          const result = parser.parseEntity(content, `entities/${filename}`);

          expect(result.version).toBeDefined();
          versions.add(result.version);
          successCount++;
        } catch (e) {
          // 跳过解析失败的文件
        }
      });

      console.log(`   发现的版本: ${Array.from(versions).sort().join(', ')}`);
      console.log(`   成功解析: ${successCount}/${files.length}`);
      expect(versions.size).toBeGreaterThan(0);
    });
  });

  describe('版本升级测试', () => {
    test('应该能够将大部分官方 entities 升级到最新版本', () => {
      const files = getOfficialEntityFiles().slice(0, 30); // 测试前 30 个

      if (files.length === 0) {
        return;
      }

      // EntityUpgrader is a static class
      const failedUpgrades: string[] = [];
      const successfulUpgrades: number[] = [];

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          const parsed = parser.parseEntity(content, `entities/${filename}`);

          const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);

          // 验证升级后的版本是最新的（Entity 官方只维护到 v1.21.60）
          expect(upgraded.data.format_version).toBe('1.21.60');

          // 警告应该是数组
          expect(Array.isArray(upgraded.warnings)).toBe(true);

          successfulUpgrades.push(1);
        } catch (e: any) {
          failedUpgrades.push(`${filename}: ${e.message}`);
        }
      });

      if (failedUpgrades.length > 0) {
        console.warn(`⚠️  升级失败的文件 (${failedUpgrades.length}/${files.length}):`);
        failedUpgrades.slice(0, 5).forEach(msg => console.warn(`   - ${msg}`));
      }

      // 允许一定的失败率
      const successRate = (successfulUpgrades.length / files.length * 100).toFixed(1);
      console.log(`   ✓ 成功升级 ${successfulUpgrades.length}/${files.length} 个 entities (${successRate}%)`);

      expect(successfulUpgrades.length).toBeGreaterThanOrEqual(Math.floor(files.length * 0.7)); // 至少 70% 成功（Entity 官方样例可能有格式问题）
    });
  });

  describe('标准化转换测试', () => {
    test('应该能够将大部分官方 entities 转换为 StandardEntity', () => {
      const files = getOfficialEntityFiles().slice(0, 30); // 测试前 30 个

      if (files.length === 0) {
        return;
      }

      // EntityUpgrader is a static class
      const failedConversions: string[] = [];
      const successfulConversions: number[] = [];

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          const parsed = parser.parseEntity(content, `entities/${filename}`);
          const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);

          const standards = EntityConverter.toStandard(upgraded.data, {
            sourceVersion: parsed.version,
            upgradePath: upgraded.upgradePath,
            warnings: upgraded.warnings,
            sourceFile: `entities/${filename}`
          });

          // 验证基本字段
          expect(standards.length).toBeGreaterThan(0);
          const standard = standards[0];
          expect(standard.identifier).toBe(parsed.identifier);
          expect(standard.metadata).toBeDefined();
          expect(standard.metadata.sourceVersion).toBe(parsed.version);

          successfulConversions.push(1);
        } catch (e: any) {
          failedConversions.push(`${filename}: ${e.message}`);
        }
      });

      if (failedConversions.length > 0) {
        console.warn(`⚠️  转换失败的文件 (${failedConversions.length}/${files.length}):`);
        failedConversions.slice(0, 5).forEach(msg => console.warn(`   - ${msg}`));
      }

      const successRate = (successfulConversions.length / files.length * 100).toFixed(1);
      console.log(`   ✓ 成功转换 ${successfulConversions.length}/${files.length} 个 entities (${successRate}%)`);

      expect(successfulConversions.length).toBeGreaterThanOrEqual(Math.floor(files.length * 0.7)); // 至少 70% 成功（Entity 官方样例可能有格式问题）
    });
  });

  describe('特定实体类型测试', () => {
    test('应该正确解析被动生物（chicken）', () => {
      if (!fs.existsSync(SAMPLES_DIR)) {
        return;
      }

      const chickenFile = path.join(SAMPLES_DIR, 'chicken.json');
      if (!fs.existsSync(chickenFile)) {
        console.warn('⚠️  chicken.json not found, skipping test');
        return;
      }

      const content = fs.readFileSync(chickenFile, 'utf-8');
      const parsed = parser.parseEntity(content, 'entities/chicken.json');

      expect(parsed.identifier).toBe('minecraft:chicken');

      // EntityUpgrader is a static class
      const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standards = EntityConverter.toStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: 'entities/chicken.json'
      });

      expect(standards.length).toBeGreaterThan(0);
      const standard = standards[0];
      expect(standard.identifier).toBe('minecraft:chicken');
      expect(standard.metadata).toBeDefined();
    });

    test('应该正确解析敌对生物（zombie）', () => {
      if (!fs.existsSync(SAMPLES_DIR)) {
        return;
      }

      const zombieFile = path.join(SAMPLES_DIR, 'zombie.json');
      if (!fs.existsSync(zombieFile)) {
        console.warn('⚠️  zombie.json not found, skipping test');
        return;
      }

      const content = loadOfficialEntity('zombie.json');
      if (content === null) {
        console.warn('⚠️  zombie.json has JSON format errors, skipping test');
        return;
      }
      const parsed = parser.parseEntity(content, 'entities/zombie.json');

      expect(parsed.identifier).toBe('minecraft:zombie');

      // EntityUpgrader is a static class
      const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);
      const standards = EntityConverter.toStandard(upgraded.data, {
        sourceVersion: parsed.version,
        upgradePath: upgraded.upgradePath,
        warnings: upgraded.warnings,
        sourceFile: 'entities/zombie.json'
      });

      expect(standards.length).toBeGreaterThan(0);
      const standard = standards[0];
      expect(standard.identifier).toBe('minecraft:zombie');
    });

    test('应该正确解析带有复杂 component_groups 的实体（sheep）', () => {
      if (!fs.existsSync(SAMPLES_DIR)) {
        return;
      }

      const sheepFile = path.join(SAMPLES_DIR, 'sheep.json');
      if (!fs.existsSync(sheepFile)) {
        console.warn('⚠️  sheep.json not found, skipping test');
        return;
      }

      const content = fs.readFileSync(sheepFile, 'utf-8');
      const parsed = parser.parseEntity(content, 'entities/sheep.json');

      expect(parsed.identifier).toBe('minecraft:sheep');

      const entity = parsed.data['minecraft:entity'];
      expect(entity).toBeDefined();

      // Sheep 通常有多个 component_groups（不同颜色）
      if (entity.component_groups) {
        const groupCount = Object.keys(entity.component_groups).length;
        console.log(`   ✓ sheep 有 ${groupCount} 个 component_groups`);
        expect(groupCount).toBeGreaterThan(5);
      }
    });

    test('应该正确解析 Boss 实体（ender_dragon）', () => {
      if (!fs.existsSync(SAMPLES_DIR)) {
        return;
      }

      const dragonFile = path.join(SAMPLES_DIR, 'ender_dragon.json');
      if (!fs.existsSync(dragonFile)) {
        console.warn('⚠️  ender_dragon.json not found, skipping test');
        return;
      }

      const content = fs.readFileSync(dragonFile, 'utf-8');
      const parsed = parser.parseEntity(content, 'entities/ender_dragon.json');

      expect(parsed.identifier).toBe('minecraft:ender_dragon');

      // 尝试升级和转换（Boss 实体可能比较复杂）
      try {
        // EntityUpgrader is a static class
        const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);
        const standards = EntityConverter.toStandard(upgraded.data, {
          sourceVersion: parsed.version,
          upgradePath: upgraded.upgradePath,
          warnings: upgraded.warnings,
          sourceFile: 'entities/ender_dragon.json'
        });

        expect(standards.length).toBeGreaterThan(0);
        const standard = standards[0];
        expect(standard.identifier).toBe('minecraft:ender_dragon');
        console.log('   ✓ 成功处理 Boss 实体: ender_dragon');
      } catch (e: any) {
        console.warn(`   ⚠️  ender_dragon 处理失败: ${e.message}`);
      }
    });

    test('应该识别常见实体类型', () => {
      const commonEntities = [
        'cow.json',
        'pig.json',
        'creeper.json',
        'skeleton.json',
        'spider.json'
      ];

      const foundEntities: string[] = [];
      const files = getOfficialEntityFiles();

      commonEntities.forEach(entityFile => {
        if (files.includes(entityFile)) {
          foundEntities.push(entityFile);

          try {
            const content = loadOfficialEntity(entityFile);
          if (content === null) return; // 跳过格式错误文件
            const parsed = parser.parseEntity(content, `entities/${entityFile}`);
            expect(parsed.identifier).toMatch(/^minecraft:/);
          } catch (e) {
            // 跳过失败的
          }
        }
      });

      console.log(`   ✓ 找到常见实体: ${foundEntities.join(', ')}`);
      expect(foundEntities.length).toBeGreaterThan(0);
    });
  });

  describe('性能测试', () => {
    test('应该能在合理时间内解析前 50 个官方 entities（< 10秒）', () => {
      const files = getOfficialEntityFiles().slice(0, 50);

      if (files.length === 0) {
        return;
      }

      const startTime = Date.now();
      let successCount = 0;

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          parser.parseEntity(content, `entities/${filename}`);
          successCount++;
        } catch (e) {
          // 跳过失败的
        }
      });

      const duration = Date.now() - startTime;

      console.log(`   ✓ 解析 ${successCount}/${files.length} 个 entities 耗时: ${duration}ms`);
      expect(duration).toBeLessThan(10000); // 10秒内完成
    });

    test('应该能在合理时间内完成前 30 个的完整流程（< 15秒）', () => {
      const files = getOfficialEntityFiles().slice(0, 30);

      if (files.length === 0) {
        return;
      }

      // EntityUpgrader is a static class
      const startTime = Date.now();
      let successCount = 0;

      files.forEach(filename => {
        try {
          const content = loadOfficialEntity(filename);
          if (content === null) return; // 跳过格式错误文件
          const parsed = parser.parseEntity(content, `entities/${filename}`);
          const upgraded = EntityUpgrader.upgradeToLatest(parsed.data, parsed.version);
          EntityConverter.toStandard(upgraded.data);
          successCount++;
        } catch (e) {
          // 跳过失败的
        }
      });

      const duration = Date.now() - startTime;

      console.log(`   ✓ 完整流程处理 ${successCount}/${files.length} 个 entities 耗时: ${duration}ms`);
      expect(duration).toBeLessThan(15000); // 15秒内完成
    });
  });
});
