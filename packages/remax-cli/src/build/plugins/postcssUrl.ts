import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import purl from 'postcss-url';
import { RemaxOptions } from 'remax-types';
import winPath from '../../winPath';

interface Asset {
  url: string;
  absolutePath: string;
}

export default function postcssUrl(options: RemaxOptions) {
  function copy(asset: Asset) {
    const srcPath = path.join(options.cwd, options.rootDir, asset.url);
    const destPath = path.join(options.cwd, options.output, asset.url);

    fs.exists(srcPath, exists => {
      if (!exists) {
        return;
      }
      mkdirp(path.dirname(destPath), () => {
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    });

    if (/^\.{1,2}\/|^\w+\//.test(asset.url)) {
      return winPath(
        `/${path.relative(
          path.resolve(options.cwd, options.rootDir),
          asset.absolutePath
        )}`
      );
    }

    return asset.url;
  }

  return purl({
    ...(options.postcss?.url ?? {}),
    url: options.postcss?.url?.inline ? 'inline' : copy,
    maxSize: options.postcss?.url?.maxSize ?? 8,
    fallback: copy,
    basePath: path.resolve(options.cwd, options.rootDir),
    assetsPath: path.resolve(options.cwd, options.output),
  });
}
