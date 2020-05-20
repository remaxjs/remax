module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    debug: true,
    command: 'tiny river',
    port: 8888,
    launchTimeout: 30000,
  },
};
