module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/esm/', '/cjs/'],
  testRegex: '.*\\.test\\.tsx?$',
  coveragePathIgnorePatterns: ['/src/__tests__/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
