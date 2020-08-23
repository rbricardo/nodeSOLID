module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  testMatch: ['**/src/useCases/**/__tests__/**/*.test.ts']
}
