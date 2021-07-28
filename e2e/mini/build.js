const { buildMiniComponent } = require('@remax/cli');

const buildMap = [
  {
    target: 'ali',
    output: 'alipay/components',
    rootDir: 'src',
    pxToRpx: true,
    input: {
      greet: 'greet/index',
      greet2: 'greet2/index',
    },
  },
  {
    target: 'wechat',
    output: 'wechat/components',
    rootDir: 'src',
    pxToRpx: true,
    input: {
      greet: 'greet/index',
    },
  },
];

buildMap.forEach(it => {
  buildMiniComponent({
    cwd: process.cwd(),
    ...it,
  });
});
