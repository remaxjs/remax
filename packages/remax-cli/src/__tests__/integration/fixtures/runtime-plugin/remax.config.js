module.exports = {
  plugins: [
    {
      registerRuntimePlugin: () => require.resolve('./runtime'),
    },
  ],
};
