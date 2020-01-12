import { Plugin } from 'rollup';
import { Entries } from '../../getEntries';
import MagicString from 'magic-string';
import API from '../../API';
import { readFileSync } from 'fs';
import { RemaxOptions } from '../../getConfig';

interface Options {
  entries: Entries;
  options: RemaxOptions;
}

export default ({ entries, options }: Options): Plugin => ({
  name: 'remax-runtime-plugins',
  load(id) {
    if (id !== entries.app) {
      return null;
    }

    const plugins = API.getRuntimePlugins(options);
    const code = readFileSync(id).toString();
    const magicString = new MagicString(code);

    magicString.prepend(`
    import { API as __REMAX_API } from 'remax';
    ${plugins
      .map((plugin, index) => `import __REMAX_PLUGIN_${index} from '${plugin}'`)
      .join(';')}

    const __REMAX_RUNTIME_PLUGIN_CONFIGS = [${plugins
      .map((_, index) => `__REMAX_PLUGIN_${index}()`)
      .join(',')}
    ];
    __REMAX_API.registerPlugins(__REMAX_RUNTIME_PLUGIN_CONFIGS);
`);

    return magicString.toString();
  },
});
