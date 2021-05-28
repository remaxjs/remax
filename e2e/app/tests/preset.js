const merge = require('merge');
const ts_preset = require('ts-jest/jest-preset');
const puppeteer_preset = require('jest-puppeteer/jest-preset');

module.exports = merge.recursive(ts_preset, puppeteer_preset, {
  testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['./tests/setup.js'],
});
