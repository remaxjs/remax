import Container from './Container';

type ExtendsAppConfigOptions = { appConfig: any };
type ExtendsPageConfigOptions = { pageConfig: any };
type GetEventTargetId = { nativeEvent: any };
type GetEventCurrentTargetId = { nativeEvent: any };
type OnUpdateActionOptions = { container: Container; action: any };
type OnUnloadOptions = { container: Container };

export interface RemaxRuntimePluginConfig {
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

export type RemaxRuntimePlugin = (options?: any) => RemaxRuntimePluginConfig;

class API {
  public configs: RemaxRuntimePluginConfig[] = [];

  public installPlugins(pluginConfigs: RemaxRuntimePluginConfig[]) {
    this.configs = [...this.configs, ...pluginConfigs];
  }

  public extendsAppConfig(options: ExtendsAppConfigOptions) {
    return this.configs.reduce((appConfig, config) => {
      if (typeof config.extendsAppConfig === 'function') {
        return config.extendsAppConfig({ appConfig });
      }

      return appConfig;
    }, options.appConfig);
  }

  public extendsPageConfig(options: ExtendsPageConfigOptions) {
    return this.configs.reduce((pageConfig, config) => {
      if (typeof config.extendsPageConfig === 'function') {
        return config.extendsPageConfig({ pageConfig });
      }

      return pageConfig;
    }, options.pageConfig);
  }

  public getEventTargetId(options: GetEventTargetId) {
    let id = '';

    this.configs.forEach(config => {
      if (typeof config.getEventTargetId === 'function') {
        id = config.getEventTargetId(options);
      }
    });

    return id;
  }

  public getEventCurrentTargetId(options: GetEventCurrentTargetId) {
    let id = '';

    this.configs.forEach(config => {
      if (typeof config.getEventCurrentTargetId === 'function') {
        id = config.getEventCurrentTargetId(options);
      }
    });

    return id;
  }

  public onUpdateAction(options: OnUpdateActionOptions) {
    return this.configs.reduce((action, config) => {
      if (typeof config.onUpdateAction === 'function') {
        return config.onUpdateAction({ ...options, action });
      }

      return action;
    }, options.action);
  }

  public onUnload(options: OnUnloadOptions) {
    this.configs.forEach(config => {
      if (typeof config.onUnload === 'function') {
        config.onUnload(options);
      }
    });
  }
}

export default new API();
