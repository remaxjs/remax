module.exports = {
  configWebpack: function(config) {
    const postCssOptions = config.module
      .rule('styles')
      .use('postcss')
      .get('options');

    config.module
      .rule('styles')
      .uses.get('postcss')
      .options({
        ...postCssOptions,
        plugins: [...postCssOptions.plugins, require('postcss-url')({ url: 'inline', maxSize: 15 })],
      });
  },
};
