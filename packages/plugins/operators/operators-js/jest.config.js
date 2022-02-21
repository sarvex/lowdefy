export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/src/test',
    '<rootDir>/src/index.js',
    '<rootDir>/src/operatorsBuild.js',
    '<rootDir>/src/operatorsClient.js',
    '<rootDir>/src/operatorsServer.js',
    '<rootDir>/src/types.js',
  ],
  coverageReporters: [['lcov', { projectRoot: '../../../..' }], 'text', 'clover'],
  errorOnDeprecated: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/src/test'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { configFile: '../../../../.swcrc.test' }],
  },
};
