export interface AdapterConfig {
  platform: string;
}

class Adapter {
  /**
   * 配置使用的 adapter
   */
  public configure(config: AdapterConfig) {
    this.validateConfig(config);
    this.injectIsPlatform(config);
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
   * --------------------------------------------------------------
   *
   * 内部 inject 方法，将 AdapterConfig 中的实现 inject 进入 Adapter
   *
   * --------------------------------------------------------------
   */

  private injectIsPlatform(config: AdapterConfig) {
    this.platform = config.platform;
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
  }
}

const adapter = new Adapter();

export default adapter;
