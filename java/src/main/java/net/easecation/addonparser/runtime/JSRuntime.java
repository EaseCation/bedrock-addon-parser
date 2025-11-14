package net.easecation.addonparser.runtime;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.PolyglotAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * JavaScript Runtime 封装类
 *
 * <p>使用 GraalVM Polyglot API 执行 TypeScript 编译后的 JavaScript 代码。
 *
 * <p>功能：
 * <ul>
 *   <li>初始化 GraalVM JS 引擎</li>
 *   <li>加载编译后的 bundle.js</li>
 *   <li>调用 parseAddon 主函数</li>
 *   <li>提供沙箱隔离（禁用 IO、网络、JNI）</li>
 * </ul>
 *
 * <p>使用示例：
 * <pre>{@code
 * try (JSRuntime runtime = new JSRuntime()) {
 *     String result = runtime.parseAddon(filesJson);
 *     System.out.println(result);
 * }
 * }</pre>
 *
 * @since 0.2.0
 */
public class JSRuntime implements AutoCloseable {

    private static final String BUNDLE_RESOURCE_PATH = "/bundle.js";
    private static final String PARSE_ADDON_FUNCTION = "parseAddon";

    private final Context context;
    private final Value parseAddonFunction;

    /**
     * 使用默认配置初始化 JS Runtime
     *
     * @throws RuntimeException 如果初始化失败
     */
    public JSRuntime() {
        this(loadBundleFromClasspath());
    }

    /**
     * 从指定路径加载 bundle.js 并初始化
     *
     * @param bundlePath bundle.js 文件路径
     * @throws RuntimeException 如果初始化失败
     */
    public JSRuntime(Path bundlePath) {
        this(loadBundleFromPath(bundlePath));
    }

    /**
     * 从 JavaScript 源码初始化（用于测试）
     *
     * @param bundleContent JavaScript 源码内容
     * @throws RuntimeException 如果初始化失败
     */
    public JSRuntime(String bundleContent) {
        try {
            // 初始化 GraalVM Context，配置沙箱权限
            this.context = Context.newBuilder("js")
                    .allowExperimentalOptions(true)
                    .option("js.esm-eval-returns-exports", "true")
                    // 沙箱配置：禁用危险操作
                    .allowIO(false)                    // 禁用文件 IO
                    .allowNativeAccess(false)          // 禁用 JNI
                    .allowPolyglotAccess(PolyglotAccess.NONE)  // 禁用跨语言访问
                    .allowHostAccess(org.graalvm.polyglot.HostAccess.NONE)  // 禁用 Host 对象访问
                    .allowHostClassLookup(s -> false)  // 禁用 Host 类查找
                    .build();

            // 加载并执行 bundle.js
            Source source = Source.newBuilder("js", bundleContent, "bundle.js")
                    .mimeType("application/javascript")
                    .build();

            Value exports = context.eval(source);

            // 获取 parseAddon 函数
            // 根据 Webpack 配置，函数在 AddonBridgeRuntime.default.parseAddon
            Value runtime = exports.getMember("AddonBridgeRuntime");
            if (runtime == null || runtime.isNull()) {
                throw new RuntimeException("AddonBridgeRuntime not found in bundle.js");
            }

            Value defaultExport = runtime.getMember("default");
            if (defaultExport == null || defaultExport.isNull()) {
                throw new RuntimeException("default export not found in AddonBridgeRuntime");
            }

            this.parseAddonFunction = defaultExport.getMember(PARSE_ADDON_FUNCTION);

            if (parseAddonFunction == null || !parseAddonFunction.canExecute()) {
                throw new RuntimeException("parseAddon function not found or not executable");
            }

        } catch (IOException e) {
            throw new RuntimeException("Failed to load bundle.js", e);
        }
    }

    /**
     * 调用 JS 解析 Addon
     *
     * @param filesJson JSON 字符串（文件列表）
     * @return 标准化 JSON 字符串
     * @throws RuntimeException 如果解析失败
     */
    public String parseAddon(String filesJson) {
        try {
            // 调用 JS 函数
            Value result = parseAddonFunction.execute(filesJson);

            // 转换返回值为 Java String
            if (!result.isString()) {
                throw new RuntimeException("Expected string result from parseAddon, got: " + result.getClass().getName());
            }

            return result.asString();

        } catch (Exception e) {
            throw new RuntimeException("Failed to execute parseAddon", e);
        }
    }

    /**
     * 预热 JS 引擎（可选优化）
     *
     * <p>执行一次空解析，触发 JIT 编译，提升后续调用性能
     */
    public void warmup() {
        try {
            String dummyInput = "[]";
            parseAddon(dummyInput);
        } catch (Exception e) {
            // 预热失败不应阻止正常使用
            System.err.println("Warning: JSRuntime warmup failed: " + e.getMessage());
        }
    }

    /**
     * 从 classpath 加载 bundle.js
     */
    private static String loadBundleFromClasspath() {
        try (InputStream is = JSRuntime.class.getResourceAsStream(BUNDLE_RESOURCE_PATH)) {
            if (is == null) {
                throw new RuntimeException("bundle.js not found in classpath: " + BUNDLE_RESOURCE_PATH);
            }
            return new String(is.readAllBytes(), StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load bundle.js from classpath", e);
        }
    }

    /**
     * 从文件路径加载 bundle.js
     */
    private static String loadBundleFromPath(Path path) {
        try {
            return Files.readString(path, StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load bundle.js from path: " + path, e);
        }
    }

    /**
     * 关闭 GraalVM Context，释放资源
     */
    @Override
    public void close() {
        if (context != null) {
            context.close();
        }
    }
}
