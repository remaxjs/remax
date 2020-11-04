const request = require('request');
const fs = require('fs');
const path = require('path');

const readDir = fs.readdirSync(path.join(__dirname, "../packages"));

const packages = readDir.map(s => {
  return require(path.join(__dirname, '../packages', s, 'package.json')).name;
});

function getPackageVersion (packageName) {
  const url = `https://registry.npmjs.com/${packageName}/latest`;
  request.get(url, (err, resp, body) => {
    console.log(packageName, JSON.parse(body).version);
  });
}

packages.forEach(getPackageVersion);
