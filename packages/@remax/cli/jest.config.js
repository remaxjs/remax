module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/lib/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
