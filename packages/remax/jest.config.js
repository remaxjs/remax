module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/lib/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
