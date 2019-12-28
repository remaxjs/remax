import yargs from 'yargs';
import { hostComponents } from 'remax/macro';
import * as t from '@babel/types';
import * as path from 'path';
import { flatten, merge } from 'lodash';
import { RollupOptions } from 'rollup';
import { RemaxOptions } from '../getConfig';
import { AppConfig, Entries, searchFile } from '../getEntries';
import { existsSync } from 'fs';

export type CLI = typeof yargs;
export type ExtendsCLIOptions = { cli: CLI };
export type GetEntriesOptions = {
  remaxOptions: RemaxOptions;
  appManifest: AppConfig;
  getEntryPath: (entryPath: string) => string;
};
export type ExtendsRollupConfigOptions = { rollupConfig: RollupOptions };
export type Meta = {
  template: {
    extension: string;
    tag: string;
    src: string;
  };
  style: string;
  jsHelper?: {
    extension: string;
    tag: string;
    src: string;
  };
  include: {
    tag: string;
    src: string;
  };
  ejs: {
    base?: string;
    page: string;
    jsHelper?: string;
  };
};

export type ProcessPropsOptions = {
  componentName: string;
  props: string[];
  node?: t.JSXElement;
  additional?: boolean;
};

export type ShouldHostComponentRegister = {
  componentName: string;
  additional?: boolean;
  phase: 'import' | 'jsx' | 'extra';
};

export interface RemaxNodePluginConfig {
  meta?: Meta;
  hostComponents?: any;
  /**
   * 扩展 CLI 命令
   * @param options
   * @param options.cli yargs 对象
   * @return 返回扩展后的 yargs 对象
   */
  extendsCLI?: (options: ExtendsCLIOptions) => CLI;
  /**
   * 定义 rollup 入口文件
   * @param options
   * @param options.remaxOptions Remax Config 参数
   * @param options.appManifest app.config.js|ts 内容
   * @param options.getEntryPath 读取 entry 路径
   * @return entries 对象，其中包含：
   * entreis.app app 文件路径
   * entreis.pages pages 文件路径数组
   * entreis.images 额外的图片文件路径数组（通常为定义在 config 文件中的 tabbar 的 icon）
   */
  getEntries?: (options: GetEntriesOptions) => Entries;
  /**
   * 自定义组件属性
   * @param options
   * @param options.componentName 组件名称
   * @param options.props 组件属性
   * @param options.node 组件 babel JSXElement
   * @param options.additional 是否用户额外创建的 host 组件
   * @return 组件对应的属性
   */
  processProps?: (options: ProcessPropsOptions) => string[];
  /**
   * 是否注册组件
   * @param options
   * @param options.componentName 组件名称
   * @param options.additional 是否是额外定义的组件
   * @param options.phase 组件被引入的阶段，import | jsx | extra
   */
  shouldHostComponentRegister?: (
    options: ShouldHostComponentRegister
  ) => boolean;
  /**
   * 扩展 Rollup Config
   * @param options
   * @param options.rollupConfig Remax 生成的 Rollup Options 对象
   * @return 扩展后的 Rollup Options 对象
   *
   */
  extendsRollupConfig?: (options: ExtendsRollupConfigOptions) => RollupOptions;
}

export type RemaxNodePlugin = (options?: any) => RemaxNodePluginConfig;

class API {
  public configs: RemaxNodePluginConfig[] = [];
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
    this.configs.forEach(config => {
      if (typeof config.extendsCLI === 'function') {
        cli = config.extendsCLI({ ...options, cli });
      }
    });

    return cli;
  }

  public getMeta() {
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

    this.configs.forEach(config => {
      meta = merge(meta, config.meta || {});
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
    this.configs.forEach(config => {
      if (typeof config.getEntries === 'function') {
        const currentEntries = config.getEntries({
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
    this.configs.forEach(config => {
      if (typeof config.processProps === 'function') {
        nextProps = config.processProps({
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
    componentName: string,
    phase: 'import' | 'jsx' | 'extra',
    additional?: boolean
  ) {
    return this.configs.reduce((result, config) => {
      if (typeof config.shouldHostComponentRegister === 'function') {
        return config.shouldHostComponentRegister({
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
    this.configs.forEach(config => {
      if (typeof config.extendsRollupConfig === 'function') {
        rollupConfig = config.extendsRollupConfig({ ...options, rollupConfig });
      }
    });

    return rollupConfig;
  }

  public installAdapterPlugins(adapterName: string) {
    this.adapter.name = adapterName;
    this.adapter.packageName = 'remax-' + adapterName;

    const packagePath = this.adapter.packageName + '/node';

    delete require.cache[packagePath];
    const pluginFn = require(packagePath).default || require(packagePath);

    if (typeof pluginFn === 'function') {
      const config = pluginFn();

      this.installHostComponents(config.hostComponents);

      this.configs.push(config);
    }
  }

  public installNodePlugins(remaxConfig: RemaxOptions) {
    remaxConfig.plugins.forEach(plugin => {
      const [name, options] = flatten([plugin]);
      const pluginFn: RemaxNodePlugin | null = this.getNodePlugin(
        name,
        remaxConfig
      );

      if (typeof pluginFn === 'function') {
        const config = pluginFn(options);

        this.installHostComponents(config.hostComponents);

        this.configs.push(config);
      }
    });
  }

  public getRuntimePlugins(remaxConfig: RemaxOptions) {
    return remaxConfig.plugins
      .map(plugin => {
        const [id] = flatten([plugin]);
        const packageName = id.startsWith('remax-plugin')
          ? id
          : 'remax-plugin-' + id;

        return packageName + '/runtime';
      })
      .filter(packageName => {
        const packagePath = path.join(
          remaxConfig.cwd,
          'node_modules',
          packageName
        );

        return existsSync(packagePath + '.js');
      })
      .concat(this.adapter.packageName + '/runtime');
  }

  private installHostComponents(components?: Map<string, any>) {
    if (!components) {
      return;
    }

    for (const key of components.keys()) {
      hostComponents.set(key, components.get(key));
    }
  }

  private getNodePlugin(id: string | Function, remaxConfig: RemaxOptions) {
    if (typeof id === 'string') {
      const packageName = id.startsWith('remax-plugin')
        ? id
        : 'remax-plugin-' + id;
      const packagePath = path.join(
        remaxConfig.cwd,
        'node_modules',
        packageName,
        'node'
      );

      if (!existsSync(packagePath + '.js')) {
        return null;
      }

      delete require.cache[packagePath];
      return require(packagePath);
    }
  }
}

export default new API();
