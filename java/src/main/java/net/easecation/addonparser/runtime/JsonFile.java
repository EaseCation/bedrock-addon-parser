package net.easecation.addonparser.runtime;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * 表示一个待解析的 JSON 文件
 *
 * @param path    相对路径，如 "blocks/custom_block.json"
 * @param content 文件内容（JSON 字符串）
 * @since 0.2.0
 */
public record JsonFile(
        @JsonProperty("path") String path,
        @JsonProperty("content") String content
) {
    /**
     * 从文件路径创建 JsonFile
     *
     * @param basePath 基础路径（通常是 behavior_pack 根目录）
     * @param filePath 文件的绝对路径
     * @return JsonFile 实例
     * @throws IOException 如果读取文件失败
     */
    public static JsonFile of(Path basePath, Path filePath) throws IOException {
        // 计算相对路径
        String relativePath = basePath.relativize(filePath)
                .toString()
                .replace('\\', '/');  // 统一使用 Unix 风格路径

        // 读取文件内容
        String content = Files.readString(filePath);

        return new JsonFile(relativePath, content);
    }
}
