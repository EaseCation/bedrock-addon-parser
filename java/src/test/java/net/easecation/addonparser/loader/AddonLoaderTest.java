package net.easecation.addonparser.loader;

import net.easecation.addonparser.dto.ParsedAddon;
import net.easecation.addonparser.runtime.JSRuntime;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.*;

/**
 * AddonLoader 测试类
 */
class AddonLoaderTest {

    /**
     * 创建简单的 JS Runtime（用于测试）
     */
    private JSRuntime createSimpleRuntime() {
        String js = """
                var AddonBridgeRuntime = {
                    default: {
                        parseAddon: function(filesJson) {
                            var files = JSON.parse(filesJson);
                            return JSON.stringify({
                                blocks: [],
                                items: [],
                                entities: [],
                                metadata: {
                                    totalFiles: files.length,
                                    warnings: []
                                }
                            });
                        }
                    }
                };
                """;
        return new JSRuntime(js);
    }

    /**
     * 测试空 Addon 加载
     */
    @Test
    void testLoadEmptyAddon(@TempDir Path tempDir) throws Exception {
        try (JSRuntime runtime = createSimpleRuntime()) {
            AddonLoader loader = new AddonLoader(runtime);

            // 加载空目录
            ParsedAddon addon = loader.loadAddon(tempDir);

            assertNotNull(addon);
            assertEquals(0, addon.blocks().size());
            assertEquals(0, addon.items().size());
            assertEquals(0, addon.entities().size());
            assertEquals(0, addon.metadata().totalFiles());
        }
    }

    /**
     * 测试包含文件的 Addon 加载
     */
    @Test
    void testLoadAddonWithFiles(@TempDir Path tempDir) throws Exception {
        // 创建测试文件
        Path blocksDir = tempDir.resolve("blocks");
        Files.createDirectories(blocksDir);
        Files.writeString(blocksDir.resolve("test_block.json"), "{}");

        Path itemsDir = tempDir.resolve("items");
        Files.createDirectories(itemsDir);
        Files.writeString(itemsDir.resolve("test_item.json"), "{}");

        try (JSRuntime runtime = createSimpleRuntime()) {
            AddonLoader loader = new AddonLoader(runtime);

            ParsedAddon addon = loader.loadAddon(tempDir);

            assertNotNull(addon);
            assertEquals(2, addon.metadata().totalFiles());
        }
    }

    /**
     * 测试文件路径正确传递
     */
    @Test
    void testFilePathPassing(@TempDir Path tempDir) throws Exception {
        // 创建测试文件
        Path blocksDir = tempDir.resolve("blocks");
        Files.createDirectories(blocksDir);
        Files.writeString(blocksDir.resolve("custom.json"), "{\"test\": true}");

        // 创建验证路径的 JS Runtime
        String js = """
                var AddonBridgeRuntime = {
                    default: {
                        parseAddon: function(filesJson) {
                            var files = JSON.parse(filesJson);
                            var hasCorrectPath = files.some(f => f.path === 'blocks/custom.json');
                            return JSON.stringify({
                                blocks: [],
                                items: [],
                                entities: [],
                                metadata: {
                                    totalFiles: files.length,
                                    warnings: hasCorrectPath ? [] : ['Incorrect path']
                                }
                            });
                        }
                    }
                };
                """;

        try (JSRuntime runtime = new JSRuntime(js)) {
            AddonLoader loader = new AddonLoader(runtime);

            ParsedAddon addon = loader.loadAddon(tempDir);

            assertNotNull(addon);
            assertEquals(0, addon.metadata().warnings().size(),
                    "Should have correct file paths");
        }
    }

    /**
     * 测试 manifest.json 被排除
     */
    @Test
    void testManifestExcluded(@TempDir Path tempDir) throws Exception {
        // 创建 manifest.json
        Files.writeString(tempDir.resolve("manifest.json"), "{}");

        // 创建其他文件
        Path blocksDir = tempDir.resolve("blocks");
        Files.createDirectories(blocksDir);
        Files.writeString(blocksDir.resolve("test.json"), "{}");

        try (JSRuntime runtime = createSimpleRuntime()) {
            AddonLoader loader = new AddonLoader(runtime);

            ParsedAddon addon = loader.loadAddon(tempDir);

            // 应该只有 1 个文件（manifest.json 被排除）
            assertEquals(1, addon.metadata().totalFiles());
        }
    }

    /**
     * 测试不存在的路径
     */
    @Test
    void testNonExistentPath() {
        try (JSRuntime runtime = createSimpleRuntime()) {
            AddonLoader loader = new AddonLoader(runtime);

            Path nonExistent = Path.of("/non/existent/path");

            assertThrows(Exception.class, () -> {
                loader.loadAddon(nonExistent);
            });
        }
    }
}
