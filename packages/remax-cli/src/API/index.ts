import { hostComponents } from 'remax/macro';
import * as t from '@babel/types';
import { RemaxOptions, RemaxNodePlugin, ExtendsCLIOptions, Meta, HostComponent } from 'remax-types';
import { merge } from 'lodash';

class API {
  public plugins: RemaxNodePlugin[] = [];
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
  public extendsCLI(options: ExtendsCLIOptions) {
    let { cli } = options;
    this.plugins.forEach(plugin => {
      if (typeof plugin.extendsCLI === 'function') {
        cli = plugin.extendsCLI({ ...options, cli });
      }
    });

    return cli;
  }

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

  public getHostComponents() {
    return hostComponents;
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

  public registerAdapterPlugins(targetName: string, remaxConfig: RemaxOptions) {
    this.adapter.target = targetName;

    this.adapter.name = targetName;
    this.adapter.packageName = 'remax-' + targetName;

    const packagePath = this.adapter.packageName + '/node';

    delete require.cache[packagePath];
    let plugin = require(packagePath).default || require(packagePath);
    plugin = typeof plugin === 'function' ? plugin() : plugin;
    this.registerHostComponents(plugin.hostComponents);
    this.plugins.push(plugin);

    if (remaxConfig.one) {
      const onePath = 'remax-one/node';

      delete require.cache[onePath];
      const plugin = require(onePath).default || require(onePath);
      const one = plugin();
      this.registerHostComponents(one.hostComponents);
      this.plugins.push(one);
    }
  }

  public registerNodePlugins(remaxConfig: RemaxOptions) {
    remaxConfig.plugins.forEach(plugin => {
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
      hostComponents.set(key, components.get(key)!);
    }
  }
}

export default new API();
