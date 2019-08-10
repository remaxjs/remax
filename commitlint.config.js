module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['cli', 'alipay', 'wechat', 'remax']],
  },
};
