const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: {
    ...strictEslint.rules,
    'prefer-destructuring': 0,
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': 1,
    'consistent-return': 0,
  },
  globals: {
    ...strictEslint.globals,
    App: true,
    my: true,
    wx: true,
    getApp: true,
  },
};
