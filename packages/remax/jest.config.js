module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/esm/', '/cjs/'],
  testRegex: '.*\\.test\\.tsx?$',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
