import yargs from 'yargs';
import * as t from '@babel/types';
import { PluginImpl, RollupOptions } from 'rollup';

export { PluginImpl, RollupOptions };

export interface RemaxOptions {
  compiler: 'default' | 'static';
  cssModules: boolean | RegExp;
  pxToRpx: boolean;
  cwd: string;
  progress: boolean;
  output: string;
  rootDir: string;
  compressTemplate?: boolean;
  UNSAFE_wechatTemplateDepth: number | { [key: string]: number };
  alias?: {
    [key: string]: string;
  };
  postcss?: {
    options?: {
      [key: string]: any;
    };
    url?: {
      inline?: boolean;
      maxSize?: number;
      filter?: boolean;
      useHash?: boolean;
      hashOptions?: 'method' | 'shrink' | 'append';
    };
    plugins?: PluginImpl[];
  };
  rollupOptions?: RollupOptions | ((options: RollupOptions) => RollupOptions);
  plugins: RemaxNodePlugin[];
  notify?: boolean;
}

export type RemaxConfig = Partial<RemaxOptions>;

export interface Entries {
  app: string;
  pages: string[];
  images: string[];
}

export interface AppConfigPlugins {
  [key: string]: {
    version: string;
    provider: string;
  };
}

export interface AppConfig {
  pages: string[];
  subpackages?: Array<{
    root: string;
    pages: string[];
    plugins?: AppConfigPlugins;
  }>;
  subPackages?: Array<{
    root: string;
    pages: string[];
    plugins?: AppConfigPlugins;
  }>;
  tabBar?: {
    items?: Array<{ icon: string; activeIcon: string }>;
    list?: Array<{ iconPath: string; selectedIconPath: string }>;
  };
  plugins?: AppConfigPlugins;
}

export type CLI = yargs.Argv;
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

export type MetaOptions = {
  remaxOptions: RemaxOptions;
};

export type ProcessPropsOptions = {
  componentName: string;
  props: string[];
  node?: t.JSXElement;
  additional?: boolean;
};

export type ShouldHostComponentRegister = {
  remaxOptions: RemaxOptions;
  componentName: string;
  additional?: boolean;
  phase: 'import' | 'jsx' | 'extra';
};

export type HostComponent = {
  props: string[];
  additional?: boolean;
  alias?: { [key: string]: string };
};

export type HostComponents = Map<string, HostComponent>;

export interface RemaxNodePlugin {
  meta?: Meta | ((options: MetaOptions) => Meta);
  hostComponents?: HostComponents;
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
