module.exports = {
  preset: 'ts-jest',
  testRegex: '.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/lib/'],
  coveragePathIgnorePatterns: ['/src/__tests__/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['./tests/setup.ts'],
};
