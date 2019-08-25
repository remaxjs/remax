import { Plugin } from 'rollup';

const SUFFIX_CONFIG_PATTERN = /\.config.js$/;

export default function removeSrc(): Plugin {
  return {
    name: 'remove-config',
    generateBundle(_, bundle) {
      const files = Object.keys(bundle);
      files.map(file => {
        if (SUFFIX_CONFIG_PATTERN.test(file)) {
          delete bundle[file];
        }
      });
    },
  };
}
