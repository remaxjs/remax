module.exports = {
  configWebpack: function(config) {
    const postCssOptions = config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .get('options');

    config.module
      .rule('css')
      .oneOf('normal')
      .uses.get('postcss-loader')
      .options({
        ...postCssOptions,
        plugins: [...postCssOptions.plugins, require('postcss-url')({ url: 'inline', maxSize: 15 })],
      });
  },
};
