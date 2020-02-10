import { hostComponents } from 'remax/macro';
import * as t from '@babel/types';
import {
  AppConfig,
  RemaxOptions,
  RemaxNodePlugin,
  ExtendsCLIOptions,
  ExtendsRollupConfigOptions,
  Entries,
  Meta,
  MetaOptions,
} from 'remax-types';
import { merge } from 'lodash';
import { searchFile } from '../getEntries';

class API {
  public plugins: RemaxNodePlugin[] = [];
  public adapter = {
    name: '',
    packageName: '',
    options: {},
  };
  public meta = {
    template: {
      extension: '',
      tag: '',
      src: '',
    },
    style: '',
    jsHelper: {
      extension: '',
      tag: '',
      src: '',
    },
    include: {
      tag: '',
      src: '',
    },
  };
  public extendsCLI(options: ExtendsCLIOptions) {
    let { cli } = options;
    this.plugins.forEach(plugin => {
      if (typeof plugin.extendsCLI === 'function') {
        cli = plugin.extendsCLI({ ...options, cli });
      }
    });

    return cli;
  }

  public getMeta(options: MetaOptions) {
    let meta: Meta = {
      template: {
        extension: '',
        tag: '',
        src: '',
      },
      style: '',
      jsHelper: {
        extension: '',
        tag: '',
        src: '',
      },
      include: {
        tag: '',
        src: '',
      },
      ejs: {
        page: '',
      },
    };

    this.plugins.forEach(plugin => {
      let pluginMeta = plugin.meta || {};
      if (typeof pluginMeta === 'function') {
        pluginMeta = pluginMeta(options);
      }

      meta = merge(meta, pluginMeta);
    });

    return meta;
  }

  public getHostComponents() {
    return hostComponents;
  }

  public getEntries(
    entries: Entries,
    appManifest: AppConfig,
    remaxOptions: RemaxOptions
  ) {
    this.plugins.forEach(plugin => {
      if (typeof plugin.getEntries === 'function') {
        const currentEntries = plugin.getEntries({
          remaxOptions,
          appManifest,
          getEntryPath: (entryPath: string) => searchFile(entryPath, true),
        });

        entries.app = currentEntries.app || entries.app;
        entries.pages = [...entries.pages, ...currentEntries.pages];
        entries.images = [...entries.images, ...currentEntries.images];
      }
    });

    return entries;
  }

  public processProps(
    componentName: string,
    props: string[],
    additional?: boolean,
    node?: t.JSXElement | undefined
  ) {
    let nextProps = props;
    this.plugins.forEach(plugin => {
      if (typeof plugin.processProps === 'function') {
        nextProps = plugin.processProps({
          componentName,
          props: nextProps,
          additional,
          node,
        });
      }
    });

    return nextProps;
  }

  public shouldHostComponentRegister(
    remaxOptions: RemaxOptions,
    componentName: string,
    phase: 'import' | 'jsx' | 'extra',
    additional?: boolean
  ) {
    return this.plugins.reduce((result, plugin) => {
      if (typeof plugin.shouldHostComponentRegister === 'function') {
        return plugin.shouldHostComponentRegister({
          remaxOptions,
          componentName,
          additional,
          phase,
        });
      }

      return result;
    }, true);
  }

  public extendsRollupConfig(options: ExtendsRollupConfigOptions) {
    let { rollupConfig } = options;
    this.plugins.forEach(plugin => {
      if (typeof plugin.extendsRollupConfig === 'function') {
        rollupConfig = plugin.extendsRollupConfig({ ...options, rollupConfig });
      }
    });

    return rollupConfig;
  }

  public registerAdapterPlugins(adapterName: string) {
    this.adapter.name = adapterName;
    this.adapter.packageName = 'remax-' + adapterName;

    const packagePath = this.adapter.packageName + '/node';

    delete require.cache[packagePath];
    let plugin = require(packagePath).default || require(packagePath);
    plugin = typeof plugin === 'function' ? plugin() : plugin;
    this.registerHostComponents(plugin.hostComponents);
    this.plugins.push(plugin);
  }

  public registerNodePlugins(remaxConfig: RemaxOptions) {
    remaxConfig.plugins.forEach(plugin => {
      if (plugin) {
        this.registerHostComponents(plugin.hostComponents);
        this.plugins.push(plugin);
      }
    });
  }

  private registerHostComponents(components?: Map<string, any>) {
    if (!components) {
      return;
    }

    for (const key of components.keys()) {
      hostComponents.set(key, components.get(key));
    }
  }
}

export default new API();
