const jestConfig = require('./jest.config');

module.exports = {
  ...jestConfig,
  testEnvironment: './detox/env',
  testRunner: 'jest-circus/runner',
  testTimeout: 200000,
  testMatch: ['**/__tests__/**/*.e2e.*'],
  reporters: ['detox/reporter'],
  verbose: true,
  setupFilesAfterEnv: ['detox/setup.jsx'],
  collectCoverage: false,
};
