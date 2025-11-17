plugins {
    `java-library`
    `maven-publish`
}

group = "net.easecation"
version = "1.0.0"

repositories {
    mavenCentral()
}

dependencies {
    // GraalVM JS 引擎
    implementation("org.graalvm.polyglot:polyglot:23.1.2")
    implementation("org.graalvm.polyglot:js:23.1.2")

    // Jackson JSON
    api("com.fasterxml.jackson.core:jackson-annotations:2.18.0")
    api("com.fasterxml.jackson.core:jackson-databind:2.18.0")

    // Nullable 注解
    compileOnly("com.google.code.findbugs:jsr305:3.0.2")

    // 测试依赖
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.0")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.10.0")
}

// ========== Git Submodule 初始化 ==========

tasks.register<Exec>("initSubmodules") {
    group = "setup"
    description = "Initialize and update git submodules (minecraft-bedrock-json-schemas)"
    commandLine("git", "submodule", "update", "--init", "--recursive")
    workingDir = file(".")

    // 检查 submodule 是否已初始化
    doFirst {
        val schemasDir = file("schemas/minecraft-bedrock-json-schemas")
        if (schemasDir.exists() && schemasDir.listFiles()?.isNotEmpty() == true) {
            println("✓ Submodules already initialized")
        } else {
            println("⚙ Initializing git submodules...")
        }
    }
}

tasks.register<Exec>("initTestData") {
    group = "setup"
    description = "Initialize bedrock-samples submodule for integration testing"
    commandLine("git", "submodule", "update", "--init", "--recursive",
                "parser-runtime/test-data/bedrock-samples")
    workingDir = file(".")

    doFirst {
        val samplesDir = file("parser-runtime/test-data/bedrock-samples/behavior_pack")
        if (samplesDir.exists() && samplesDir.listFiles()?.isNotEmpty() == true) {
            println("✓ Test data already initialized (${samplesDir.absolutePath})")
        } else {
            println("⚙ Initializing official Mojang test samples...")
            println("   📦 Downloading bedrock-samples from https://github.com/Mojang/bedrock-samples")
        }
    }

    doLast {
        val itemsDir = file("parser-runtime/test-data/bedrock-samples/behavior_pack/items")
        val entitiesDir = file("parser-runtime/test-data/bedrock-samples/behavior_pack/entities")
        if (itemsDir.exists() && entitiesDir.exists()) {
            val itemsCount = itemsDir.listFiles()?.size ?: 0
            val entitiesCount = entitiesDir.listFiles()?.size ?: 0
            println("✓ Test data initialized successfully")
            println("   📊 Items: $itemsCount files")
            println("   📊 Entities: $entitiesCount files")
        }
    }
}

tasks.register("checkTestData") {
    group = "verification"
    description = "Check if test data is properly initialized"
    doLast {
        val samplesDir = file("parser-runtime/test-data/bedrock-samples/behavior_pack")
        if (!samplesDir.exists() || samplesDir.listFiles()?.isEmpty() == true) {
            throw GradleException("""
                ❌ Test data not initialized!

                Run: ./gradlew initTestData
                Or:  git submodule update --init --recursive parser-runtime/test-data/bedrock-samples
            """.trimIndent())
        }
        println("✓ Test data is properly initialized")
    }
}

// ========== NPM Workspaces 任务（在根目录执行）==========

tasks.register<Exec>("npmInstallRoot") {
    group = "npm"
    description = "Install npm dependencies in root workspace"
    commandLine("npm", "install")
    workingDir = file(".")  // 在 Monorepo 根目录执行
    dependsOn("initSubmodules")

    inputs.file("package.json")
    inputs.file("schema-types/package.json")
    inputs.file("parser-runtime/package.json")
    outputs.dir("node_modules")
    outputs.dir("schema-types/node_modules")
    outputs.dir("parser-runtime/node_modules")
}

tasks.register<Exec>("generateSchemaTypes") {
    group = "npm"
    description = "Generate TypeScript types from JSON schemas"
    commandLine("npm", "run", "generate:all", "--workspace=@easecation/schema-types")
    workingDir = file(".")
    dependsOn("npmInstallRoot")

    inputs.dir("schemas/minecraft-bedrock-json-schemas")
    inputs.dir("schema-types/src")
    inputs.file("schema-types/version-mapping.json")
    outputs.dir("schema-types/types")

    val typesDir = file("schema-types/types")

    // 如果types目录存在，跳过生成
    onlyIf {
        val shouldGenerate = !typesDir.exists()
        if (!shouldGenerate) {
            println("⏩ Skipping schema types generation (types directory already exists)")
            println("   📁 Location: ${typesDir.absolutePath}")
            println("   💡 To regenerate, delete the types directory or run: ./gradlew clean")
        }
        shouldGenerate
    }

    doFirst {
        println("⚙ Generating schema types from JSON schemas...")
    }
}

tasks.register<Exec>("npmBuildSchema") {
    group = "npm"
    description = "Build schema-types (compile TypeScript)"
    commandLine("npm", "run", "build:schema")
    workingDir = file(".")
    dependsOn("generateSchemaTypes")

    inputs.dir("schema-types/src")
    inputs.dir("schema-types/types")
    outputs.dir("schema-types/dist")
}

tasks.register<Exec>("npmBuildRuntime") {
    group = "npm"
    description = "Build parser-runtime (TypeScript + Webpack)"
    commandLine("npm", "run", "build:runtime")
    workingDir = file(".")
    dependsOn("npmInstallRoot", "npmBuildSchema")

    inputs.dir("parser-runtime/src")
    inputs.dir("schema-types/types")  // 依赖 schema-types
    outputs.file("parser-runtime/dist/bundle.js")
}

tasks.register<Copy>("copyBundle") {
    group = "build"
    description = "Copy bundle.js from parser-runtime to Java resources"
    from("parser-runtime/dist/bundle.js")
    into("java/src/main/resources")
    dependsOn("npmBuildRuntime")
}

tasks.register<Exec>("npmTest") {
    group = "npm"
    description = "Run TypeScript tests (parser-runtime)"
    commandLine("npm", "run", "test:runtime")
    workingDir = file(".")
    dependsOn("npmInstallRoot", "npmBuildSchema", "initTestData")
}

tasks.register<Exec>("npmClean") {
    group = "npm"
    description = "Clean npm build artifacts"
    commandLine("npm", "run", "clean")
    workingDir = file(".")
}

// ========== Gradle 生命周期集成 ==========

tasks.named("compileJava") {
    dependsOn("copyBundle")  // 确保 bundle.js 先生成并复制
}

tasks.named("processResources") {
    dependsOn("copyBundle")
}

tasks.named("test") {
    dependsOn("npmTest")     // Java 测试前先运行 TS 测试
}

tasks.named("build") {
    dependsOn("copyBundle")
}

tasks.named("clean") {
    dependsOn("npmClean")
}

// ========== 共享测试资源配置 ==========

sourceSets {
    main {
        java {
            srcDir("java/src/main/java")
        }
        resources {
            srcDir("java/src/main/resources")
        }
    }
    test {
        java {
            srcDir("java/src/test/java")
        }
        resources {
            srcDir("test-resources")  // 使用 Monorepo 根目录的共享测试资源
        }
    }
}

tasks.processResources {
    duplicatesStrategy = DuplicatesStrategy.INCLUDE
}

// ========== Maven 发布配置 ==========

java {
    withJavadocJar()
    withSourcesJar()
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

tasks.named<Jar>("sourcesJar") {
    dependsOn("copyBundle")
    duplicatesStrategy = DuplicatesStrategy.INCLUDE
}

tasks.named("javadocJar") {
    dependsOn("copyBundle")
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            groupId = "net.easecation"
            artifactId = "bedrock-addon-parser"
            version = project.version.toString()

            from(components["java"])

            pom {
                name.set("Bedrock Addon Parser")
                description.set("Minecraft Bedrock addon parser with automatic version upgrade support")
                url.set("https://github.com/EaseCation/bedrock-addon-parser")

                licenses {
                    license {
                        name.set("MIT License")
                        url.set("https://opensource.org/licenses/MIT")
                    }
                }

                developers {
                    developer {
                        id.set("easecation")
                        name.set("EaseCation Team")
                        email.set("support@easecation.net")
                    }
                }

                scm {
                    connection.set("scm:git:git://github.com/EaseCation/bedrock-addon-parser.git")
                    developerConnection.set("scm:git:ssh://github.com/EaseCation/bedrock-addon-parser.git")
                    url.set("https://github.com/EaseCation/bedrock-addon-parser")
                }
            }
        }
    }
}

// ========== 测试配置 ==========

tasks.test {
    useJUnitPlatform()
}
