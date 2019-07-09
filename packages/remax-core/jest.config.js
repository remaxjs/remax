module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/lib/'],
  testRegex: '.*\\.test\\.tsx?$',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
