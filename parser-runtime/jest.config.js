module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // 全局超时配置
  testTimeout: 30000, // 30秒超时

  // 测试项目分组配置
  projects: [
    {
      displayName: 'unit',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/__tests__/*Parser.test.ts',
        '<rootDir>/__tests__/*Upgrader.test.ts',
        '<rootDir>/__tests__/*Converter.test.ts',
        '<rootDir>/__tests__/AddonParser.test.ts',
        '<rootDir>/__tests__/utils/**/*.test.ts'
      ],
      collectCoverageFrom: [
        'src/typescript/**/*.ts',
        '!src/typescript/**/*.d.ts',
        '!src/typescript/types/**'
      ]
    },
    {
      displayName: 'integration',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/__tests__/integration/**/*.test.ts'],
      collectCoverageFrom: [
        'src/typescript/**/*.ts',
        '!src/typescript/**/*.d.ts',
        '!src/typescript/types/**'
      ]
    }
  ],

  // 全局覆盖率配置
  collectCoverageFrom: [
    'src/typescript/**/*.ts',
    '!src/typescript/**/*.d.ts',
    '!src/typescript/types/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },

  moduleFileExtensions: ['ts', 'js', 'json'],
  verbose: true
};
