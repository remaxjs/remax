module.exports = {
  preset: 'ts-jest',
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
