const path = require('path');
const fse = require('fs-extra');
const request = require('request');
const download = require('download');
const childProcess = require('child_process');

const cwd = process.cwd();

async function cloneTemplate(templatePath, clonePath, flag) {
  const packageJson = await new Promise((resolve, reject) => {
    flag = flag || 'latest';
    request.get(
      {
        url: `http://registry.npm.alibaba-inc.com/${templatePath}/${flag}`,
        json: true,
      },
      function (err, _, response) {
        if (err) reject(err);
        resolve(response);
      }
    );
  });
  await download(packageJson.dist.tarball, clonePath, {
    extract: true,
  });

  const zipPath = path.join(clonePath, 'package');
  fse.copySync(zipPath, clonePath);
  fse.removeSync(zipPath);
}

async function main() {
  const projectPath = path.resolve(cwd, 'e2e/sample');
  const PROJECT_TEMPLATE = '@alipay/remix-sample';
  await cloneTemplate(PROJECT_TEMPLATE, projectPath); // clone

  fse.writeFileSync(path.join(projectPath, '.gitignore'), '/**');
  childProcess.spawn('ayarn', {
    cwd: path.join(__dirname, '../'),
    stdio: 'inherit',
  });
}

main();
