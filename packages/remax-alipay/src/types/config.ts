interface WindowConfig {
  /**
   * 页面默认标题
   */
  defaultTitle?: string;
  /**
   * 是否允许下拉刷新。
   * 默认NO, 备注：下拉刷新生效的前提是allowsBounceVertical 值为 YES
   */
  pullRefresh?: 'NO' | 'YES';
  /**
   * 是否允许向下拉拽。
   * 默认 YES, 支持 YES / NO
   */
  allowsBounceVertical?: 'YES' | 'NO';
  /**
   * 导航栏透明设置。
   * 默认 none，支持 always 一直透明 / auto 滑动自适应 / none 不透明
   */
  transparentTitle?: 'none' | 'always' | 'auto';
  /**
   * 是否允许导航栏点击穿透。
   * 默认 NO，支持 YES / NO
   */
  titlePenetrate?: 'YES' | 'NO';
  /**
   * 是否进入时显示导航栏的 loading。
   * 默认 NO，支持 YES / NO
   */
  showTitleLoading?: 'YES' | 'NO';
  /**
   * 导航栏图片地址
   */
  titleImage?: string;
  /**
   * 导航栏背景色，十进制颜色值（0-255）
   */
  titleBarColor?: string;
  /**
   * 页面的背景色，十进制颜色值（0-255）
   */
  backgroundColor?: string;
  /**
   * 下拉露出显示的背景图底色，十进制颜色值（0-255）
   */
  backgroundImageColor?: string;
  /**
   * 下拉露出显示的背景图链接
   */
  backgroundImageUrl?: string;
  /**
   * iOS 用，是否支持手势返回。默认 NO，支持 YES / NO
   */
  gestureBack?: 'YES' | 'NO';
  /**
   * Android 用，是否显示 WebView 滚动条。
   * 默认 YES，支持 YES / NO
   */
  enableScrollBar?: 'YES' | 'NO';
  /**
   * 页面上拉触底时触发时距离页面底部的距离，单位为px。
   * 相关文档页面事件处理函数
   * 1.19.0
   * 目前 iOS 在 page.json 下设置无效，只能全局设置。
   */
  onReachBottomDistance?: number;
}

/** 页面配置文件 */
// reference: https://opendocs.alipay.com/mini/framework/page-json
export interface PageConfig extends WindowConfig {
  /**
   * 设置导航栏额外图标，目前支持设置属性 icon，值为图标 url（以 https/http 开头）或 base64 字符串，大小建议 30*30 px
   * 基础库 1.3.0
   */
  optionMenu?: Record<string, any>;
  /**
   * 设置导航栏图标主题。
   * “default”为蓝色图标，“light”为白色图标
   * 支付宝客户端 10.1.52
   */
  barButtonTheme?: 'default' | 'light';
}

interface TabItem {
  /**
   * 设置页面路径
   */
  pagePath: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 平常图标路径
   */
  icon: string;
  /**
   * 高亮图标路径
   */
  activeIcon?: string;
}

/** 全局配置文件 */
// reference: https://opendocs.alipay.com/mini/framework/app-json
export interface AppConfig {
  /**
   * 设置页面路径
   */
  pages: string[];
  /**
   * 设置默认页面的窗口表现
   */
  window?: WindowConfig;
  /**
   * 设置底部 tabbar 的表现
   */
  tabBar?: {
    /**
     * 文字颜色
     */
    textColor?: string;
    /**
     * 选中文字颜色
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
  };
}
