module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.tsx?$',
  testPathIgnorePatterns: ['/esm/', '/cjs/'],
  collectCoverageFrom: ['src/**/*.{ts,jsx}'],
  coveragePathIgnorePatterns: ['src/__tests__/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
