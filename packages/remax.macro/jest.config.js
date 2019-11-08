module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/lib/'],
  globals: {
    'ts-jest': {
      tsConfig: {
        module: 'ESNext',
      },
      babelConfig: {
        plugins: [
          'babel-plugin-macros',
          '@babel/plugin-transform-modules-commonjs',
        ],
      },
    },
  },
};
