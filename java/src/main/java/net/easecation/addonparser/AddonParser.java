package net.easecation.addonparser;

import net.easecation.addonparser.dto.ParsedAddon;
import net.easecation.addonparser.loader.AddonLoader;
import net.easecation.addonparser.runtime.JSRuntime;

import java.io.IOException;
import java.nio.file.Path;

/**
 * Bedrock Addon Parser 主入口 API
 * <p>
 * 提供简化的静态方法，用于解析 Minecraft Bedrock Addon。
 * 支持自动版本升级（1.19.0 → 1.21.60）和标准化输出。
 *
 * @author EaseCation Team
 * @version 1.0.0
 */
public class AddonParser {

    /**
     * 解析 Addon 目录
     * <p>
     * 这是最简单的使用方式，适用于大多数场景。
     * 内部会自动创建 JSRuntime 实例，解析完成后自动关闭。
     *
     * @param addonPath Addon 根目录（behavior_pack）
     * @return 解析结果，包含 blocks、items、entities
     * @throws IOException 如果文件读取失败
     */
    public static ParsedAddon parse(Path addonPath) throws IOException {
        try (JSRuntime runtime = new JSRuntime()) {
            AddonLoader loader = new AddonLoader(runtime);
            return loader.loadAddon(addonPath);
        }
    }

    /**
     * 创建可配置的 Builder
     * <p>
     * 用于高级配置场景，例如：
     * <ul>
     *   <li>复用 JSRuntime 实例（批量解析）</li>
     *   <li>启用预热（提升性能）</li>
     *   <li>严格模式（遇到错误抛出异常）</li>
     * </ul>
     *
     * @return Builder 实例
     */
    public static Builder builder() {
        return new Builder();
    }

    /**
     * Builder 模式配置类
     */
    public static class Builder {
        private JSRuntime runtime;
        private boolean warmup = false;

        /**
         * 使用自定义 JS Runtime（支持复用）
         * <p>
         * 适用于批量解析多个 Addon 的场景。
         *
         * @param runtime 自定义 JSRuntime 实例
         * @return this
         */
        public Builder runtime(JSRuntime runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * 启用预热（提升性能）
         * <p>
         * 预热会执行一次空解析，初始化 GraalVM 上下文。
         * 建议在批量解析前启用。
         *
         * @param warmup 是否启用预热
         * @return this
         */
        public Builder warmup(boolean warmup) {
            this.warmup = warmup;
            return this;
        }

        /**
         * 解析 Addon 目录
         *
         * @param addonPath Addon 根目录（behavior_pack）
         * @return 解析结果
         * @throws IOException 如果文件读取失败
         */
        public ParsedAddon parse(Path addonPath) throws IOException {
            if (runtime != null) {
                // 使用自定义 runtime
                if (warmup) {
                    runtime.warmup();
                }
                AddonLoader loader = new AddonLoader(runtime);
                return loader.loadAddon(addonPath);
            } else {
                // 使用临时 runtime
                try (JSRuntime tempRuntime = new JSRuntime()) {
                    if (warmup) {
                        tempRuntime.warmup();
                    }
                    AddonLoader loader = new AddonLoader(tempRuntime);
                    return loader.loadAddon(addonPath);
                }
            }
        }
    }
}
