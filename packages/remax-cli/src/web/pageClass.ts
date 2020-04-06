import postcss from 'postcss';

export default postcss.plugin('postcss-remax-page-plugin', opts => {
  opts = opts || {};
  return (root, result) => {
    root.walkRules(rule => {
      if (rule.selector === 'page') {
        rule.selector = '.remax-page';
      }
    });
  };
});
