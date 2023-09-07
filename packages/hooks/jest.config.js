module.exports = {
  preset: 'ts-jest/presets/js-with-ts', // 预设配置
  testEnvironment: 'jsdom', // 运行环境，默认为node
  clearMocks: true, // 每次运行之前清除所有模拟的属性
  testPathIgnorePatterns: ['/node_modules/'], // 正则匹配，命中的测试文件不进行测试
  modulePathIgnorePatterns: ['<rootDir>/package.json'],
  resetMocks: false,  // 每次运行之前重置所有模拟的属性
  setupFiles: ['./jest.setup.js', 'jest-localstorage-mock'], // 运行某些代码以配置或设置测试环境的模块的路径列表。每个 setupFile 将在每个测试文件中运行一次
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // 换句话说，setupFilesAfterEnv 模块适用于在每个测试文件中重复的代码。安装测试框架后，Jest 全局变量、jest 对象和期望都可以在模块中访问
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }], // 从正则表达式到transformers路径的映射
  },
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}',
    '!**/demo/**',
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ],// 需要生成测试报告的测试用例
  transformIgnorePatterns: ['^.+\\.js$'], // 转换忽略匹配像，如果以js结尾的测试文件则忽略
};
