module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    debug: true,
    command: 'http-server --cors --port=8888 -s',
    port: 8888,
    launchTimeout: 60000
  },
};
