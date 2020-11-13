const tracert = require('@alipay/remix-plugin-tracert').default;

module.exports = {
  plugins: [
    tracert({
      specialAlipay: true,
    }),
  ],
};
