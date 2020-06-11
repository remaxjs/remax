module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    debug: true,
    command: 'yarn build && NODE_ENV=development yarn tiny river',
    port: 8888,
    launchTimeout: 60000,
    waitOnScheme: {
      delay: 30000,
    }
  },
};
