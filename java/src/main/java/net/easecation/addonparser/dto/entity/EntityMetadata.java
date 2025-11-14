package net.easecation.addonparser.dto.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

/**
 * Entity 元数据
 * 记录 Entity 的版本信息、升级路径、警告信息和源文件
 *
 * @since 0.2.0
 */
public record EntityMetadata(
    /**
     * 源版本（解析时的 format_version）
     * 例如："1.19.40"
     */
    @JsonProperty("sourceVersion") String sourceVersion,

    /**
     * 升级路径（版本列表）
     * 例如：["1.19.40", "1.19.50", "1.20.10", "1.20.81", "1.21.60"]
     */
    @JsonProperty("upgradePath") List<String> upgradePath,

    /**
     * 警告信息列表
     * 记录升级过程中的警告（如废弃组件、数据丢失等）
     */
    @JsonProperty("warnings") List<String> warnings,

    /**
     * 源文件路径
     * 例如："entities/custom_entity.json"
     */
    @JsonProperty("sourceFile") String sourceFile
) {
}
