module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    debug: true,
    command: 'npm run serve',
    port: 5678,
    launchTimeout: 60000,
  },
};
