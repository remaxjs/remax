import yargs from 'yargs';
import WebpackConfig from 'webpack-chain';
import * as t from '@babel/types';

export enum Platform {
  'web' = 'web',
  'wechat' = 'wechat',
  'ali' = 'ali',
  'toutiao' = 'toutiao',
}

export interface Options {
  turboPages?: string[];
  pxToRpx: boolean;
  cwd: string;
  progress: boolean;
  output: string;
  rootDir: string;
  compressTemplate?: boolean;
  UNSAFE_wechatTemplateDepth: number | { [key: string]: number };
  configWebpack?: (params: { config: WebpackConfig; webpack: any }) => void;
  plugins: Plugin[];
  port?: number;
  one?: boolean;
  notify?: boolean;
  watch?: boolean;
  target?: Platform;
  analyze?: boolean;
  minimize?: boolean;
}

export type Config = Partial<Options>;

export interface EntryInfo {
  name: string;
  filename: string;
}

export interface Entries {
  app: EntryInfo;
  pages: EntryInfo[];
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
  remaxOptions: Options;
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

export interface Plugin {
  /** 插件名称 */
  meta?: Meta;
  hostComponents?: Map<string, HostComponent>;
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

  onBuildStart?: (params: { config: Options }) => void;

  /**
   * 修改 webpack 配置
   */
  configWebpack?: (params: { config: WebpackConfig }) => void;

  /**
   * 修改 babel 配置
   */
  configBabel?: (params: { config: any }) => void;

  /**
   * 注册运行时插件
   */
  registerRuntimePlugin?: () => string;

  /**
   * 修改应用配置
   */
  onAppConfig?: (params: { config: any }) => any;

  /**
   * 修改页面配置
   */
  onPageConfig?: (params: { config: any; page: string }) => any;
}

export type PluginConstructor = (options?: any) => Plugin;
