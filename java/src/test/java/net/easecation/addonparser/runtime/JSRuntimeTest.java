package net.easecation.addonparser.runtime;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * JSRuntime 测试类
 *
 * 验证 GraalVM 集成和 bundle.js 执行
 */
class JSRuntimeTest {
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private JSRuntime runtime;

    @BeforeEach
    void setUp() throws Exception {
        runtime = new JSRuntime();
    }

    @AfterEach
    void tearDown() {
        if (runtime != null) {
            runtime.close();
        }
    }

    @Test
    void testRuntimeInitialization() {
        assertNotNull(runtime, "JSRuntime should be initialized");
    }

    @Test
    void testParseEmptyFiles() throws Exception {
        // 准备空文件列表
        List<JsonFile> files = new ArrayList<>();

        // 调用 parseAddon
        String result = runtime.parseAddon(files);

        // 验证结果
        assertNotNull(result, "Result should not be null");

        // 解析 JSON
        JsonNode parsed = MAPPER.readTree(result);
        assertTrue(parsed.has("blocks"), "Result should have blocks field");
        assertTrue(parsed.has("items"), "Result should have items field");
        assertTrue(parsed.has("entities"), "Result should have entities field");
        assertTrue(parsed.has("metadata"), "Result should have metadata field");

        // 验证为空
        assertEquals(0, parsed.get("blocks").size(), "Blocks should be empty");
        assertEquals(0, parsed.get("items").size(), "Items should be empty");
        assertEquals(0, parsed.get("entities").size(), "Entities should be empty");

        // 验证元数据
        JsonNode metadata = parsed.get("metadata");
        assertEquals(0, metadata.get("totalFiles").asInt(), "Total files should be 0");
    }

    @Test
    void testParseSimpleBlock() throws Exception {
        // 准备测试数据 - v1.19.40 simple block
        String blockJson = """
            {
              "format_version": "1.19.40",
              "minecraft:block": {
                "description": {
                  "identifier": "test:simple_block"
                },
                "components": {
                  "minecraft:destroy_time": 3.0,
                  "minecraft:explosion_resistance": 15.0,
                  "minecraft:friction": 0.6
                }
              }
            }
            """;

        List<JsonFile> files = new ArrayList<>();
        files.add(new JsonFile("blocks/simple_block.json", blockJson));

        // 调用 parseAddon
        String result = runtime.parseAddon(files);

        // 解析结果
        JsonNode parsed = MAPPER.readTree(result);

        // 验证 Block 被成功解析
        JsonNode blocks = parsed.get("blocks");
        assertEquals(1, blocks.size(), "Should parse 1 block");

        JsonNode block = blocks.get(0);
        assertEquals("test:simple_block", block.get("identifier").asText(), "Identifier should match");
        assertEquals(3.0, block.get("hardness").asDouble(), "Hardness should be 3.0");
        assertEquals(15.0, block.get("explosionResistance").asDouble(), "Explosion resistance should be 15.0");
        assertEquals(0.6, block.get("friction").asDouble(), "Friction should be 0.6");

        // 验证元数据
        JsonNode metadata = block.get("metadata");
        assertEquals("1.19.40", metadata.get("sourceVersion").asText(), "Source version should be 1.19.40");
        assertEquals("blocks/simple_block.json", metadata.get("sourceFile").asText(), "Source file should match");

        // 验证升级路径
        JsonNode upgradePath = metadata.get("upgradePath");
        assertTrue(upgradePath.size() > 1, "Upgrade path should have multiple versions");
        assertEquals("1.21.60", upgradePath.get(upgradePath.size() - 1).asText(), "Final version should be 1.21.60");
    }

    @Test
    void testParseMultipleBlocks() throws Exception {
        // 准备多个 Block 文件
        String block1Json = """
            {
              "format_version": "1.19.40",
              "minecraft:block": {
                "description": {
                  "identifier": "test:block1"
                },
                "components": {
                  "minecraft:destroy_time": 1.0
                }
              }
            }
            """;

        String block2Json = """
            {
              "format_version": "1.19.50",
              "minecraft:block": {
                "description": {
                  "identifier": "test:block2"
                },
                "components": {
                  "minecraft:destructible_by_mining": {
                    "seconds_to_destroy": 2.0
                  }
                }
              }
            }
            """;

        List<JsonFile> files = new ArrayList<>();
        files.add(new JsonFile("blocks/block1.json", block1Json));
        files.add(new JsonFile("blocks/block2.json", block2Json));

        // 调用 parseAddon
        String result = runtime.parseAddon(files);

        // 解析结果
        JsonNode parsed = MAPPER.readTree(result);

        // 验证
        JsonNode blocks = parsed.get("blocks");
        assertEquals(2, blocks.size(), "Should parse 2 blocks");

        assertEquals("test:block1", blocks.get(0).get("identifier").asText());
        assertEquals("test:block2", blocks.get(1).get("identifier").asText());

        assertEquals(1.0, blocks.get(0).get("hardness").asDouble());
        assertEquals(2.0, blocks.get(1).get("hardness").asDouble());
    }

    @Test
    void testParseInvalidJson() throws Exception {
        // 准备无效的 JSON
        List<JsonFile> files = new ArrayList<>();
        files.add(new JsonFile("blocks/invalid.json", "invalid json"));

        // 调用 parseAddon
        String result = runtime.parseAddon(files);

        // 解析结果
        JsonNode parsed = MAPPER.readTree(result);

        // 无效文件应该被跳过
        assertEquals(0, parsed.get("blocks").size(), "Invalid file should be skipped");

        // 应该有警告信息
        JsonNode warnings = parsed.get("metadata").get("warnings");
        assertTrue(warnings.size() > 0, "Should have warnings");
    }

    @Test
    void testLightEmissionNormalization() throws Exception {
        // 测试光照归一化：v1.19.50 的 light_emission (0-15) → StandardBlock lightEmission (0.0-1.0)
        String blockJson = """
            {
              "format_version": "1.19.50",
              "minecraft:block": {
                "description": {
                  "identifier": "test:glowing_block"
                },
                "components": {
                  "minecraft:light_emission": 15
                }
              }
            }
            """;

        List<JsonFile> files = new ArrayList<>();
        files.add(new JsonFile("blocks/glowing_block.json", blockJson));

        // 调用 parseAddon
        String result = runtime.parseAddon(files);

        // 解析结果
        JsonNode parsed = MAPPER.readTree(result);
        JsonNode block = parsed.get("blocks").get(0);

        // 验证光照归一化：15 → 1.0
        double lightEmission = block.get("lightEmission").asDouble();
        assertEquals(1.0, lightEmission, 0.001, "Light emission should be normalized to 1.0");
    }

    @Test
    void testPerformance() throws Exception {
        // 性能测试：解析 10 个 Block 应该在 1 秒内完成
        List<JsonFile> files = new ArrayList<>();
        String blockTemplate = """
            {
              "format_version": "1.19.40",
              "minecraft:block": {
                "description": {
                  "identifier": "test:block_%d"
                },
                "components": {
                  "minecraft:destroy_time": 1.0
                }
              }
            }
            """;

        for (int i = 0; i < 10; i++) {
            files.add(new JsonFile("blocks/block_" + i + ".json", String.format(blockTemplate, i)));
        }

        long start = System.currentTimeMillis();
        String result = runtime.parseAddon(files);
        long duration = System.currentTimeMillis() - start;

        // 验证结果
        JsonNode parsed = MAPPER.readTree(result);
        assertEquals(10, parsed.get("blocks").size(), "Should parse 10 blocks");

        // 验证性能
        assertTrue(duration < 1000, "Parsing 10 blocks should take less than 1 second (actual: " + duration + "ms)");
        System.out.println("Performance test: " + duration + "ms for 10 blocks");
    }
}
