module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-remax',
        {
          'throw-if-namespace': false,
        },
      ],
    ],
  };
};
