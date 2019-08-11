export default function readManifest(path: string, target: string) {
  delete require.cache[require.resolve(path)];
  const config = require(path) || require(path)[target];

  if (!config) {
    throw new Error(
      `config.js does not have default config or ${target} config`
    );
  }

  return config;
}
