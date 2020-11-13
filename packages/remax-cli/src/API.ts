import * as t from '@babel/types';
import { Plugin, Meta, HostComponent, Platform } from '@remax/types';
import { slash } from '@remax/shared';
import { merge } from 'lodash';
import Config from 'webpack-chain';
import { RuleConfig } from './build/webpack/config/css';
import yargs from 'yargs';
import Store from '@remax/build-store';

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

  public shouldHostComponentRegister(componentName: string, phase: 'import' | 'jsx' | 'extra', additional?: boolean) {
    return this.plugins.reduce((result, plugin) => {
      if (typeof plugin.shouldHostComponentRegister === 'function') {
        return plugin.shouldHostComponentRegister({
          componentName,
          additional,
          phase,
        });
      }

      return result;
    }, true);
  }

  onAppConfig(config: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.onAppConfig === 'function') {
        acc = plugin.onAppConfig({ config: acc });
      }
      return acc;
    }, config);
  }

  // 内部hook
  _onEntries(entries: any) {
    return this.plugins.reduce((acc, plugin) => {
      if (typeof plugin.unstable_onEntries === 'function') {
        acc = plugin.unstable_onEntries({ entries: acc });
      }
      return acc;
    }, entries);
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

  public registerAdapterPlugins(targetName: Platform) {
    this.adapter.target = targetName;
    this.adapter.packageName = '@alipay/remix-' + targetName;

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
