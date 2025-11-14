package net.easecation.addonparser.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.annotation.Nullable;
import java.util.List;

/**
 * 解析后的 Addon（标准化格式）
 *
 * @since 0.2.0
 */
public record ParsedAddon(
        @JsonProperty("blocks") List<StandardBlock> blocks,
        @JsonProperty("items") List<StandardItem> items,
        @JsonProperty("entities") List<StandardEntity> entities,
        @JsonProperty("metadata") AddonMetadata metadata
) {
    /**
     * Addon 元数据
     */
    public record AddonMetadata(
            @JsonProperty("addonName") @Nullable String addonName,
            @JsonProperty("description") @Nullable String description,
            @JsonProperty("warnings") List<String> warnings,
            @JsonProperty("totalFiles") int totalFiles
    ) {
    }
}
