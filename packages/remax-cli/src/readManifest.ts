export default function readManifest(path: string, target: string) {
  delete require.cache[require.resolve(path)];
  const config = require(path)[target] || require(path);

  if (!config) {
    throw new Error(
      `config.js does not have default config or ${target} config`
    );
  }

  return config;
}
