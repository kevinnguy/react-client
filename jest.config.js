module.exports = {
  preset: '@testing-library/react-native',
  testEnvironment: 'node',
  projects: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['text', 'lcov', 'html'],
  coveragePathIgnorePatterns: ['.e2e.ts', '.e2e.tsx'],
  testMatch: ['**/__tests__/**/*.test.[j|t]s?(x)'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  moduleNameMapper: {
    '^.+.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    // from https://stackoverflow.com/a/59964555
    'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': ['babel-jest', { cwd: __dirname }],
  },
  setupFilesAfterEnv: ['src/__tests__/jest.setup.jsx'],
};
