const path = require('path');

module.exports = {
  plugins: [
    {
      unstable_onEntries({ entries }) {
        entries.pages.push({
          name: 'pages/foo',
          filename: path.join(__dirname, './src/pages/index.js'),
        });
        return entries;
      },
    },
  ],
};
