// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'parsec-hooks',
        camel2DashComponentName: false,
        customName: name => {
          return `parsec-hooks/lib/${name.replace(/^(use)/, '').replace(/^\S/, s => s.toLowerCase())}Hooks`;
        },
      },
    ],
  ],
};
