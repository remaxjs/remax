module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    debug: true,
    command: 'npm run dev web -- -p 5678',
    protocol: 'http',
    port: 5678,
    launchTimeout: 30000,
  },
};
