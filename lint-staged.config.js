const micromatch = require('micromatch');

module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  '*.{md,js,jsx}': files => {
    const match = micromatch.not(files, ['**/__tests__/**/expected/**/*.js', '**/tests/fixtures/**/output.js']);
    return match.length > 1 ? [`prettier ${match.join(' ')} --write`, `git add ${match.join(' ')}`] : [];
  },
};
