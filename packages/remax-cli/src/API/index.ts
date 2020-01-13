import yargs from 'yargs';
import { hostComponents } from 'remax/macro';
import * as t from '@babel/types';
import { merge } from 'lodash';
import { RollupOptions } from 'rollup';
import { RemaxOptions } from '../getConfig';
import { AppConfig, Entries, searchFile } from '../getEntries';

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

export interface RemaxNodePlugin {
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

export type RemaxNodePluginConstructor = (options?: any) => RemaxNodePlugin;

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

    this.plugins.forEach(plugin => {
      meta = merge(meta, plugin.meta || {});
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
    componentName: string,
    phase: 'import' | 'jsx' | 'extra',
    additional?: boolean
  ) {
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
