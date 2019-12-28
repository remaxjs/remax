declare const getCurrentPages: any;
declare const getApp: any;

// node
interface Entries {
  app: string;
  pages: string[];
  images: string[];
}

type CLI = any;
type ExtendsCLIOptions = { cli: CLI };
type GetEntriesOptions = {
  remaxOptions: any;
  appManifest: any;
  getEntryPath: (entryPath: string) => string;
};
type ExtendsRollupConfigOptions = { rollupConfig: any };
type Meta = {
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

type ProcessPropsOptions = {
  componentName: string;
  props: string[];
  node?: any;
  additional?: boolean;
};

type ShouldHostComponentRegister = {
  componentName: string;
  additional?: boolean;
};

interface RemaxNodePluginConfig {
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
  extendsRollupConfig?: (options: ExtendsRollupConfigOptions) => any;
}

type RemaxNodePlugin = (options?: any) => RemaxNodePluginConfig;

// runtime
type ExtendsAppConfigOptions = { appConfig: any };
type ExtendsPageConfigOptions = { pageConfig: any };
type GetEventTargetId = { nativeEvent: any };
type GetEventCurrentTargetId = { nativeEvent: any };
type OnUpdateActionOptions = { container: any; action: any };
type OnUnloadOptions = { container: any };

interface RemaxRuntimePluginConfig {
  /**
   * 扩展原生 app 实例
   * @param options
   * @param options.appConfig 原生 app 实例
   * @return 返回扩展后的 app 实例
   *
   */
  extendsAppConfig?: (options: ExtendsAppConfigOptions) => any;
  /**
   * 扩展原生 page 实例
   * @param options
   * @param options.pageConfig 原生 page 实例
   * @return 返回扩展后的 page 实例
   *
   */
  extendsPageConfig?: (options: ExtendsPageConfigOptions) => any;
  /**
   * 获取事件的 target ID
   * @param options
   * @param options.nativeEvent 原生事件
   * @return 事件 target ID
   */
  getEventTargetId?: (options: GetEventTargetId) => string;
  /**
   * 获取事件的 current target ID
   * @param options
   * @param options.nativeEvent 原生事件
   * @return 事件 current target ID
   */
  getEventCurrentTargetId?: (options: GetEventCurrentTargetId) => string;
  /**
   * 自定义执行 setData 时发起的 update action
   * @param options
   * @param options.container 发起 setData 操作的 Container
   * @param options.action 其他插件处理过的 action 对象
   * @return 返回创建的 action
   *
   */
  onUpdateAction?: (options: OnUpdateActionOptions) => any;
  /**
   * Container 卸载时生命周期
   * @param options
   * @param options.container 被卸载的 Container
   */
  onUnload?: (options: OnUnloadOptions) => void;
}

type RemaxRuntimePlugin = (options?: any) => RemaxRuntimePluginConfig;
