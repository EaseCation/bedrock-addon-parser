package net.easecation.addonparser.loader;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.easecation.addonparser.dto.ParsedAddon;
import net.easecation.addonparser.runtime.JSRuntime;
import net.easecation.addonparser.runtime.JsonFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

/**
 * Addon 加载器
 *
 * <p>负责扫描 Addon 目录，读取 JSON 文件，调用 JS Runtime 解析
 *
 * @since 0.2.0
 */
public class AddonLoader {

    private final JSRuntime jsRuntime;
    private final ObjectMapper objectMapper;

    /**
     * 创建 AddonLoader 实例
     *
     * @param jsRuntime JS Runtime 实例
     */
    public AddonLoader(JSRuntime jsRuntime) {
        this.jsRuntime = jsRuntime;
        this.objectMapper = new ObjectMapper();
    }

    /**
     * 加载 Addon 目录
     *
     * @param addonPath Addon 根目录路径（通常是 behavior_pack 目录）
     * @return 解析后的 Addon
     * @throws IOException 如果读取文件或解析失败
     */
    public ParsedAddon loadAddon(Path addonPath) throws IOException {
        // 扫描所有 JSON 文件
        List<JsonFile> files = scanFiles(addonPath);

        // 序列化为 JSON
        String filesJson = objectMapper.writeValueAsString(files);

        // 调用 JS 引擎解析
        String resultJson = jsRuntime.parseAddon(filesJson);

        // 反序列化为 Java DTO
        return objectMapper.readValue(resultJson, ParsedAddon.class);
    }

    /**
     * 扫描 Addon 目录下的所有 JSON 文件
     *
     * @param basePath Addon 根目录
     * @return JSON 文件列表
     * @throws IOException 如果扫描失败
     */
    private List<JsonFile> scanFiles(Path basePath) throws IOException {
        if (!Files.exists(basePath)) {
            throw new IOException("Addon path does not exist: " + basePath);
        }

        if (!Files.isDirectory(basePath)) {
            throw new IOException("Addon path is not a directory: " + basePath);
        }

        // 递归扫描 .json 文件
        try (Stream<Path> paths = Files.walk(basePath)) {
            return paths
                    .filter(Files::isRegularFile)
                    .filter(p -> p.toString().endsWith(".json"))
                    // 排除 manifest.json（单独处理）
                    .filter(p -> !p.getFileName().toString().equals("manifest.json"))
                    .map(p -> {
                        try {
                            return JsonFile.of(basePath, p);
                        } catch (IOException e) {
                            throw new RuntimeException("Failed to read file: " + p, e);
                        }
                    })
                    .toList();
        }
    }

    /**
     * 获取使用的 JS Runtime 实例
     */
    public JSRuntime getJsRuntime() {
        return jsRuntime;
    }
}
