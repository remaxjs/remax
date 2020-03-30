import * as fs from 'fs';
import * as path from 'path';
import { Plugin } from 'rollup';
import * as platform from '../platform';
import API from '../../API';

export default function resolvePlatform(): Plugin {
  return {
    name: 'resolve-platform',
    load(id) {
      const target = API.adapter.target;
      const ext = path.extname(id);
      const extRegExp = new RegExp(`${ext}$`);

      let targetFile = id.replace(extRegExp, `.${target}${ext}`);

      if (fs.existsSync(targetFile)) {
        this.addWatchFile(targetFile);
        return fs.readFileSync(targetFile).toString();
      }

      if (platform.isMini(target)) {
        targetFile = id.replace(extRegExp, `.mini${ext}`);

        if (fs.existsSync(targetFile)) {
          this.addWatchFile(targetFile);
          return fs.readFileSync(targetFile).toString();
        }
      }

      return null;
    },
  };
}
