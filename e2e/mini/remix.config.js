const greet = () => ({
  extendCLI({ cli }) {
    cli.command(
      'greet',
      'say hello',
      yargs => {
        yargs.option('name', {
          describe: 'name',
          alias: 'n',
          type: 'string',
          required: true,
        });
      },
      argv => {
        console.log('hello ' + argv.name);
      }
    );
  },
});

module.exports = {
  dynamicPages: ['pages/index/index', 'pages/insert-before/index', 'pages/native-component/index', 'packageA/**/*'],
  plugins: [greet()],
};
