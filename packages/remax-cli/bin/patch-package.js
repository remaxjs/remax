const commandExistsSync = require('command-exists').sync;
if (commandExistsSync('patch-package')) {
  const exec = require('child_process').exec

  const cmd = exec('patch-package');
  cmd.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  cmd.stderr.on('data', function (data) {
    console.log(data.toString());
  });
}