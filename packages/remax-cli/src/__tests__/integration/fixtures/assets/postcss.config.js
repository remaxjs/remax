module.exports = ({ options }) => ({
  plugins: {
    ...options.plugins,
    'postcss-url': { url: 'inline', maxSize: 15 },
  },
});
