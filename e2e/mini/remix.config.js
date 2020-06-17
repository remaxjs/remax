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
  turboPages: ['pages/turbo-page/index'],
  plugins: [greet()],
};
