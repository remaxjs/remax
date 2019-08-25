export default function readManifest(path: string, target: string) {
  delete require.cache[require.resolve(path)];
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const config = require(path)[target] || require(path);

  if (!config) {
    throw new Error(`${path} does not have default config or ${target} config`);
  }

  return config;
}
