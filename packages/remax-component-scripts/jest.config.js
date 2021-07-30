module.exports = {
  preset: 'ts-jest',
  testRegex: '.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/lib/'],
  coveragePathIgnorePatterns: ['/src/tests/'],
  setupFilesAfterEnv: ['./setup.js'],
};
