export interface Page {
  route: string;
  config: PageConfig;
}

export const enum RouterType {
  hash = 'hash',
  browser = 'browser',
}

export interface BootstrapOptions {
  async?: boolean;
  appComponent: React.ComponentType;
  appConfig: AppConfig;
  plugins?: any[];
  pageComponents: Array<() => Promise<{ default: React.ComponentType }> | React.ComponentType>;
  pages: Page[];
}

export interface TabItem {
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

export interface TabBarConfig {
  /**
   * 标题颜色
   */
  textColor?: string;
  /**
   * 选中标题颜色
   */
  selectedColor?: string;
  /**
   * 背景色
   */
  backgroundColor?: string;
  /**
   * 每个 tab 配置
   */
  items: TabItem[];
}

interface WindowConfig {
  /**
   * 页面默认标题
   */
  defaultTitle?: string;
  /**
   * 默认值：false
   * 是否开启全局的下拉刷新。
   */
  pullRefresh?: boolean;
  /**
   * 默认值：50
   * 页面触底事件触发时距页面底部距离，单位为 px。
   */
  onReachBottomDistance?: number;
}

/** 全局配置文件 */
export interface AppConfig {
  /**
   * 设置页面路径
   */
  pages: string[];
  window?: WindowConfig;
  /**
   * 设置底部 tab bar 的表现
   */
  tabBar?: TabBarConfig;
  router?: {
    type: RouterType;
  };
}

/** 页面配置文件 */
export type PageConfig = WindowConfig;
