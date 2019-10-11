const commandExistsSync = require('command-exists').sync;
if (commandExistsSync('patch-package')) {
  var spawn = require('child_process').spawn

  const cmd = spawn('patch-package');
  cmd.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  cmd.stderr.on('data', function (data) {
    console.log(data.toString());
  });
}