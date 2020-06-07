module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'remix',
        {
          'throw-if-namespace': false,
        },
      ],
    ],
  };
};
