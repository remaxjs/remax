module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/lib/'],
  globals: {
    'ts-jest': {
      tsConfig: {
        module: 'ESNext',
      },
      babelConfig: {
        plugins: ['babel-plugin-macros', '@babel/plugin-transform-modules-commonjs'],
      },
    },
  },
};
