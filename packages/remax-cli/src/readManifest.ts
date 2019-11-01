import esm from 'esm';
import fs from 'fs';

// eslint-disable-next-line
require = esm(module, {
  cjs: {
    dedefault: true,
  },
});

export default function readManifest(path: string, target: string) {
  if (fs.existsSync(path)) {
    delete require.cache[require.resolve(path)];
    const config = require(path)[target] || require(path);

    if (!config) {
      throw new Error(
        `${path} does not have default config or ${target} config`
      );
    }

    return config;
  }

  return {};
}
