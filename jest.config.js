module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  testMatch: ['**/src/useCases/**/__tests__/**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: "__test__/coverage",
  collectCoverageFrom: ['src/**']
};