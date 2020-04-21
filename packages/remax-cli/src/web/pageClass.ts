import postcss from 'postcss';
import output from '../build/utils/output';

export default postcss.plugin('postcss-remax-page-plugin', opts => {
  opts = opts || {};
  return (root, result) => {
    root.walkRules(rule => {
      if (rule.selector === 'page') {
        output.warn(
          '如果要兼容 web 应用，请不要在样式中使用 page 选择器，具体请参考 https://remaxjs.org/guide/one/web#样式'
        );
        rule.selector = '.remax-page';
      }
    });
  };
});
