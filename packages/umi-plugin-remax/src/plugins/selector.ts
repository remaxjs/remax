import postcss from 'postcss';

export default postcss.plugin('rewrite-page-selector', function(opts) {
  opts = opts || {};

  return function(root, result) {
    root.walkRules(rule => {
      // Transform each rule here
      if (rule.selector === 'page') {
        rule.selector = '#remax-page';
      }
    });
  };
});
