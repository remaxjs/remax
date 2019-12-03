module.exports = function(api) {
  api.cache(true);

  return {
    plugins: ['loop-optimizer'],
    presets: [
      [
        'remax',
        {
          typescript: {
            allowNamespaces: true,
          },
          'class-properties': {
            loose: true,
          },
          decorators: {
            legacy: true,
          },
        },
      ],
    ],
  };
};
