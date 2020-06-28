interface TabItem {
  /**
   * 设置页面路径
   */
  url: string;
  /**
   * 名称
   */
  title: string;
  /**
   * 平常图标路径
   */
  image: string;
  /**
   * 高亮图标路径
   */
  activeImage?: string;
}

/** 全局配置文件 */
export interface AppConfig {
  /**
   * 设置页面路径
   */
  pages: string[];
  /**
   * 页面默认标题
   */
  title: string;
  /**
   * 默认值：false
   * 是否开启全局的下拉刷新。
   */
  pullToRefresh?: boolean;
  /**
   * 默认值：50
   * 页面触底事件触发时距页面底部距离，单位为 px。
   */
  reachBottomOffset?: number;
  /**
   * 默认值：hash
   * history 类型
   */
  historyType?: 'hash' | 'browser';
  /**
   * 设置底部 tab bar 的表现
   */
  tabBar?: {
    /**
     * 标题颜色
     */
    titleColor?: string;
    /**
     * 选中标题颜色
     */
    activeTitleColor?: string;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * 每个 tab 配置
     */
    items: TabItem[];
  };
}

/** 页面配置文件 */
export interface PageConfig {
  /**
   * 页面默认标题
   */
  title: string;
  /**
   * 默认值：false
   * 是否开启全局的下拉刷新。
   */
  pullToRefresh?: boolean;
  /**
   * 默认值：50
   * 页面触底事件触发时距页面底部距离，单位为 px。
   */
  reachBottomOffset?: number;
}
