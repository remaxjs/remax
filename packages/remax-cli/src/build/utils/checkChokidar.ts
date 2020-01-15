import path from 'path';

let isFirstCheckFailed = true;
export const checkChokidar = () => {
  try {
    require(path.resolve(process.cwd(), './node_modules/chokidar'));
    return true;
  } catch (e) {
    if (isFirstCheckFailed) {
      isFirstCheckFailed = false;
      console.log('\n 安装 `chokidar` 获得更好的开发体验～～ 😎\n\n > npm install chokidar --save \n');
    }
    return false;
  }
};
