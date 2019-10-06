import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import url from 'postcss-url';
import { RemaxOptions } from '../../getConfig';

interface Asset {
  url: string;
  absolutePath: string;
}

export default function postcssUrl(options: RemaxOptions) {
  return url({
    url: function(asset: Asset) {
      const srcPath = path.join(options.cwd, options.rootDir, asset.url);
      const destPath = path.join(options.cwd, options.output, asset.url);

      fs.exists(srcPath, exists => {
        if (exists) {
          mkdirp(path.dirname(destPath), () => {
            fs.copyFile(srcPath, destPath, error => {
              if (error) {
                console.error(error);
              }
            });
          });
        }
      });
      if (!/^\//.test(asset.url) && !/^\w+:\/\//.test(asset.url)) {
        return `/${path.relative(
          path.resolve(options.cwd, options.rootDir),
          asset.absolutePath
        )}`;
      }
      return asset.url;
    },
    basePath: path.resolve(options.cwd, options.rootDir),
    assetsPath: path.resolve(options.cwd, options.output),
  });
}
