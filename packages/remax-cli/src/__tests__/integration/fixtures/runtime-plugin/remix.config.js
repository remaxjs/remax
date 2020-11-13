module.exports = {
  dynamicPages: true,
  plugins: [
    {
      registerRuntimePlugin: () => require.resolve('./runtime'),
    },
  ],
};
