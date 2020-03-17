module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        'remax',
        {
          'throw-if-namespace': false,
        },
      ],
    ],
  };
};
