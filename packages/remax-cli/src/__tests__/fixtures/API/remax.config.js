const cli = require('remax-plugin-cli');
const entries = require('remax-plugin-entries');
const rollupConfig = require('remax-plugin-rollup-config');
const props1 = require('remax-plugin-props1');
const props2 = require('remax-plugin-props2');

module.exports = {
  plugins: [cli(), entries(), rollupConfig(), props1(), props2()],
};
