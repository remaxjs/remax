import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import url from 'postcss-url';
import { RemaxOptions } from '../../getConfig';

interface Asset {
  url: string;
}

export default (options: RemaxOptions) =>
  url({
    url: function(asset: Asset) {
      const srcPath = path.join(options.cwd, 'src', asset.url);
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
      return asset.url;
    },
    basePath: path.resolve(options.cwd, 'src'),
    assetsPath: path.resolve(options.cwd, options.output),
  });
