import Container from './Container';

type ExtendsAppConfigOptions = { appConfig: any };
type ExtendsPageConfigOptions = { pageConfig: any };
type GetEventTargetId = { nativeEvent: any };
type GetEventCurrentTargetId = { nativeEvent: any };
type OnUpdateActionOptions = { container: Container; action: any };
type OnUnloadOptions = { container: Container };

export interface RemaxRuntimePlugin {
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

export type RemaxRuntimePluginConstructor = (
  options?: any
) => RemaxRuntimePlugin;

class API {
  public plugins: RemaxRuntimePlugin[] = [];

  public registerPlugins(plugins: RemaxRuntimePlugin[]) {
    this.plugins = [...this.plugins, ...plugins];
  }

  public extendsAppConfig(options: ExtendsAppConfigOptions) {
    return this.plugins.reduce((appConfig, plugin) => {
      if (typeof plugin.extendsAppConfig === 'function') {
        return plugin.extendsAppConfig({ appConfig });
      }

      return appConfig;
    }, options.appConfig);
  }

  public extendsPageConfig(options: ExtendsPageConfigOptions) {
    return this.plugins.reduce((pageConfig, plugin) => {
      if (typeof plugin.extendsPageConfig === 'function') {
        return plugin.extendsPageConfig({ pageConfig });
      }

      return pageConfig;
    }, options.pageConfig);
  }

  public getEventTargetId(options: GetEventTargetId) {
    let id = '';

    this.plugins.forEach(plugin => {
      if (typeof plugin.getEventTargetId === 'function') {
        id = plugin.getEventTargetId(options);
      }
    });

    return id;
  }

  public getEventCurrentTargetId(options: GetEventCurrentTargetId) {
    let id = '';

    this.plugins.forEach(plugin => {
      if (typeof plugin.getEventCurrentTargetId === 'function') {
        id = plugin.getEventCurrentTargetId(options);
      }
    });

    return id;
  }

  public onUpdateAction(options: OnUpdateActionOptions) {
    return this.plugins.reduce((action, plugin) => {
      if (typeof plugin.onUpdateAction === 'function') {
        return plugin.onUpdateAction({ ...options, action });
      }

      return action;
    }, options.action);
  }

  public onUnload(options: OnUnloadOptions) {
    this.plugins.forEach(plugin => {
      if (typeof plugin.onUnload === 'function') {
        plugin.onUnload(options);
      }
    });
  }
}

export default new API();
