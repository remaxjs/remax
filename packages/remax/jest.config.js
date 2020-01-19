module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/esm/', '/cjs/'],
  testRegex: '.*\\.test\\.tsx?$',
  coveragePathIgnorePatterns: ['/src/__tests__/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
    __REMAX_HOST_COMPONENTS__: {},
    __REMAX_PX2RPX__: true,
    __REMAX_DEBUG__: false,
  },
};
