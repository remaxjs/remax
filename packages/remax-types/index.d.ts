import yargs from 'yargs';
import Config from 'webpack-chain';
import * as t from '@babel/types';

export interface RemaxOptions {
  turboPages: string[];
  pxToRpx: boolean;
  cwd: string;
  progress: boolean;
  output: string;
  rootDir: string;
  compressTemplate?: boolean;
  UNSAFE_wechatTemplateDepth: number | { [key: string]: number };
  configWebpack?: (config: Config) => void;
  plugins: RemaxNodePlugin[];
  one?: boolean;
  notify?: boolean;
}

export type RemaxConfig = Partial<RemaxOptions>;

export interface Entries {
  app: string;
  pages: string[];
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
export type Meta = {
  global: string;
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
  ejs: {
    base?: string;
    page: string;
    jsHelper?: string;
  };
  staticEjs?: {
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
  componentName: string;
  additional?: boolean;
  phase: 'import' | 'jsx' | 'extra';
};

export interface HostComponent {
  props: string[];
  additional?: boolean;
  alias?: { [key: string]: string };
}

export interface NativeComponent {
  id: string;
  sourcePath: string;
  importers: string[];
  assets: string[];
}

export interface RemaxNodePlugin {
  /** 插件名称 */
  name: string;
  meta?: Meta;
  hostComponents?: Map<string, HostComponent>;
  /**
   * 扩展 CLI 命令
   */
  extendsCLI?: (options: ExtendsCLIOptions) => CLI;
  /**
   * 自定义组件属性
   * options.componentName 组件名称
   * options.props 组件属性
   * options.node 组件 babel JSXElement
   * options.additional 是否用户额外创建的 host 组件
   */
  processProps?: (options: ProcessPropsOptions) => string[];
  /**
   * 是否注册组件
   * options.componentName 组件名称
   * options.additional 是否是额外定义的组件
   * options.phase 组件被引入的阶段，import | jsx | extra
   */
  shouldHostComponentRegister?: (options: ShouldHostComponentRegister) => boolean;
}

export type RemaxNodePluginConstructor = (options?: any) => RemaxNodePlugin;
