import Container, { SpliceUpdate, normalizeRawNode } from './Container';
import VNode from './VNode';

export type NormalizeRawNode = typeof normalizeRawNode;
export type Dispatch = Pick<Container, 'dispatch'>;

export interface AdapterConfig {
  platform: string;
  containerPrepareUpdateAction: (
    updateQueue: SpliceUpdate,
    normalizeNode: NormalizeRawNode,
    root: VNode
  ) => any;
  containerClearUpdate: (dispatch: Dispatch) => boolean;
}

class Adapter {
  /**
   * 配置使用的 adapter
   */
  public configure(config: AdapterConfig) {
    this.validateConfig(config);

    this.injectIsPlatform(config);

    // Container
    this.injectContainerPrepareUpdateAction(config);
    this.injectContainerClearUpdate(config);
  }

  /**
   * ---------------------------------------------
   *
   * Adapter 方法及属性，暴露给 remax 及 remax-cli 使用
   *
   * ---------------------------------------------
   */

  public platform = '';

  /**
   * 作用域：Container
   * 生成 action 用于 setData 更新虚拟 dom
   */
  public containerPrepareUpdateAction(
    updateQueue: SpliceUpdate,
    normalizeNode: NormalizeRawNode,
    root: VNode
  ) {
    throw new Error('未实现 Adapter 方法：containerPrepareUpdateAction');
  }

  /**
   * 作用域：Container
   * 清除 update 操作
   */
  public containerClearUpdate(dispatch: Dispatch) {
    return true;
  }

  /**
   * --------------------------------------------------------------
   *
   * 内部 inject 方法，将 AdapterConfig 中的实现 inject 进入 Adapter
   *
   * --------------------------------------------------------------
   */

  private injectIsPlatform(config: AdapterConfig) {
    this.platform = config.platform;
  }

  private injectContainerPrepareUpdateAction(config: AdapterConfig) {
    this.containerPrepareUpdateAction = config.containerPrepareUpdateAction;
  }

  private injectContainerClearUpdate(config: AdapterConfig) {
    if (typeof config.containerClearUpdate !== 'function') {
      return;
    }

    this.containerClearUpdate = config.containerClearUpdate;
  }

  /**
   * -----------
   *
   * 帮助方法
   *
   * -----------
   */

  private validateConfig(config: AdapterConfig) {
    if (!config.platform) {
      throw new Error('Adapter Config 未配置 paltform 字段');
    }

    if (typeof config.containerPrepareUpdateAction !== 'function') {
      throw new Error(
        'Adapter Config 未配置 containerPrepareUpdateAction 方法'
      );
    }
  }
}

const adapter = new Adapter();

export default adapter;
