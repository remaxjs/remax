module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['cli', 'alipay', 'wechat', 'remax']],
    'type-enum': [2, 'always', ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'deps']],
  },
};
