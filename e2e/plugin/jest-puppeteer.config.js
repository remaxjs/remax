module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    debug: true,
    command: 'cd miniapptools_dist/main && http-server --cors --port=8989 -s',
    port: 8989,
    launchTimeout: 60000,
  },
};
