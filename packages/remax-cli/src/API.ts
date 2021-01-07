import * as t from '@babel/types';
import type { Plugin, Meta, HostComponent, Platform, Options } from '@remax/types';
import { slash } from '@remax/shared';
import { merge } from 'lodash';
import Config from 'webpack-chain';
import { RuleConfig } from './build/webpack/config/css';
import yargs from 'yargs';
import Store from '@remax/build-store';
import { builtinPlugins } from './builtinPlugins';

export default class API {
  public plugins: Plugin[] = [];
  public adapter = {
    name: '',
    target: '',
    packageName: '',
    options: {},
  };
  public meta = {
    global: '',
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

  public getMeta() {
    let meta: Meta = {
      global: '',
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
      ejs: {
        page: '',
      },
    };

    this.plugins.forEach(plugin => {
      meta = merge(meta, plugin.meta || {});
    });

    return meta;
  }

  public processProps(componentName: string, props: string[], additional?: boolean, node?: t.JSXElement) {
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

  onBuildStart(config: Options) {
    this.plugins.forEach(plugin => {
      if (typeof plugin.onBuildStart === 'function') {
        plugin.onBuildStart({ config });
      }
    });
  }

  onAppConfig(config: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onAppConfig === 'function') {
        acc = plugin.onAppConfig({ config: acc });
      }
      return acc;
    }, config);
  }

  onPageConfig({ page, config }: { page: string; config: any }) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onPageConfig === 'function') {
        acc = plugin.onPageConfig({ page, config: acc });
      }
      return acc;
    }, config);
  }

  configWebpack(params: { config: Config; webpack: any; addCSSRule: (ruleConfig: RuleConfig) => void }) {
    this.plugins.forEach(plugin => {
      if (typeof plugin.configWebpack === 'function') {
        plugin.configWebpack(params);
      }
    });
  }

  configBabel(params: { config: any }) {
    this.plugins.forEach(plugin => {
      if (typeof plugin.configBabel === 'function') {
        plugin.configBabel(params);
      }
    });
  }

  extendCLI(cli: yargs.Argv) {
    this.plugins.forEach(plugin => {
      if (typeof plugin.extendCLI === 'function') {
        plugin.extendCLI({ cli });
      }
    });
  }

  onPageTemplate({ template, page }: { template: string; page: string }) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onPageTemplate === 'function') {
        acc = plugin.onPageTemplate({ template, page });
      }
      return acc;
    }, template);
  }

  getRuntimePluginFiles() {
    return this.plugins
      .map(plugin => {
        if (typeof plugin.registerRuntimePlugin === 'function') {
          return slash(plugin.registerRuntimePlugin());
        }
      })
      .filter(Boolean);
  }

  loadBuiltinPlugins(options: Options) {
    const plugins = builtinPlugins(options).reduce((acc: Plugin[], plugin) => {
      acc.push(plugin.init({}, options));
      return acc;
    }, []);
    this.registerPlugins(plugins);
  }

  public registerAdapterPlugins(targetName: Platform) {
    this.adapter.target = targetName;
    this.adapter.packageName = '@remax/' + targetName;

    const packagePath = this.adapter.packageName + '/node';

    let plugin = require(packagePath).default || require(packagePath);
    plugin = typeof plugin === 'function' ? plugin() : plugin;
    Store.skipHostComponents = plugin.skipHostComponents;
    this.registerHostComponents(plugin.hostComponents);
    this.plugins.push(plugin);
  }

  public registerPlugins(plugins: Plugin[]) {
    plugins?.forEach(plugin => {
      if (plugin) {
        this.registerHostComponents(plugin.hostComponents);
        this.plugins.push(plugin);
      }
    });
  }

  private registerHostComponents(components?: Map<string, HostComponent>) {
    if (!components) {
      return;
    }

    for (const key of components.keys()) {
      Store.registeredHostComponents.set(key, components.get(key)!);
    }
  }
}
