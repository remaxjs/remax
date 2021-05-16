/** 页面配置文件 */
// reference: https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html
export interface PageConfig {
  /**
   * 默认值：#000000
   * 导航栏背景颜色，如 #000000
   */
  navigationBarBackgroundColor?: string;
  /**
   * 默认值：white
   * 导航栏标题颜色，仅支持 black / white
   */
  navigationBarTextStyle?: 'black' | 'white';
  /**
   * 导航栏标题文字内容
   */
  navigationBarTitleText?: string;
  /**
   * 默认值： default
   * 导航栏样式，仅支持以下值：
   * default 默认样式
   * custom 自定义导航栏，只保留右上角胶囊按钮
   * 微信客户端 7.0.0
   */
  navigationStyle?: 'default' | 'custom';
  /**
   * 默认值：#ffffff
   * 窗口的背景色
   */
  backgroundColor?: string;
  /**
   * 默认值：dark
   * 下拉 loading 的样式，仅支持 dark / light
   */
  backgroundTextStyle?: 'dark' | 'light';
  /**
   * 默认值：#ffffff
   * 顶部窗口的背景色，仅 iOS 支持
   * 微信客户端 6.5.16
   */
  backgroundColorTop?: string;
  /**
   * 默认值：#ffffff
   * 底部窗口的背景色，仅 iOS 支持
   * 微信客户端 6.5.16
   */
  backgroundColorBottom?: string;
  /**
   * 默认值：false
   * 是否开启当前页面下拉刷新。
   * 详见 Page.onPullDownRefresh
   */
  enablePullDownRefresh?: boolean;
  /**
   * 默认值：50
   * 页面上拉触底事件触发时距页面底部距离，单位为px。
   * 详见 Page.onReachBottom
   */
  onReachBottomDistance?: number;
  /**
   * 默认值：portrait
   * 屏幕旋转设置，支持 auto / portrait / landscape
   * 详见 响应显示区域变化	2.4.0 (auto) / 2.5.0 (landscape)
   */
  pageOrientation?: 'auto' | 'portrait' | 'landscape';
  /**
   * 默认值：false;
   * 设置为 true 则页面整体不能上下滚动。
   * 只在页面配置中有效，无法在 app.json 中设置
   */
  disableScroll?: boolean;
  /**
   * 页面自定义组件配置
   * 1.6.3
   */
  usingComponents?: Record<string, any>;
}

interface TabList {
  /**
   *页面路径，必须在 pages 中先定义
   */
  pagePath: string;
  /**
   * tab 上按钮文字
   */
  text: string;
  /**
   * 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
   * 当 position 为 top 时，不显示 icon。
   */
  iconPath?: string;
  /**
   * 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
   * 当 position 为 top 时，不显示 icon。
   *
   */
  selectedIconPath?: string;
}

/** 全局配置文件 */
// reference: https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html
export interface AppConfig {
  /**
   * 小程序默认启动首页
   */
  entryPagePath?: string;
  /**
   * 页面路径列表
   */
  pages: string[];
  /**
   * 全局的默认窗口表现
   */
  window?: {
    /**
     * 默认值：#000000
     * 导航栏背景颜色，如 #000000
     */
    navigationBarBackgroundColor?: string;
    /**
     * 默认值: white
     * 导航栏标题颜色，仅支持 black / white
     */
    navigationBarTextStyle?: 'white' | 'black';
    /**
     * 导航栏标题文字内容
     */
    navigationBarTitleText?: string;
    /**
     * 默认值：default
     * 导航栏样式，仅支持以下值：
     * default 默认样式
     * custom 自定义导航栏，只保留右上角胶囊按钮。参见注 2。
     * 微信客户端 6.6.0
     */
    navigationStyle?: 'default' | 'custom';
    /**
     * 默认值：#ffffff
     * 窗口的背景色
     */
    backgroundColor?: string;
    /**
     * 默认值：dark
     * 下拉 loading 的样式，仅支持 dark / light
     */
    backgroundTextStyle?: 'dark' | 'light';
    /**
     * 默认值：#ffffff
     * 顶部窗口的背景色，仅 iOS 支持
     * 微信客户端 6.5.16
     */
    backgroundColorTop?: string;
    /**
     * 默认值：#ffffff
     * 底部窗口的背景色，仅 iOS 支持
     * 微信客户端 6.5.16
     */
    backgroundColorBottom?: string;
    /**
     * 默认值：false
     * 是否开启全局的下拉刷新。
     * 详见 Page.onPullDownRefresh
     */
    enablePullDownRefresh?: boolean;
    /**
     * 默认值：50
     * 页面上拉触底事件触发时距页面底部距离，单位为 px。
     * 详见 Page.onReachBottom
     */
    onReachBottomDistance?: number;
    /**
     * 默认值：portrait
     * 屏幕旋转设置，支持 auto / portrait / landscape
     * 详见 响应显示区域变化
     * 2.4.0 (auto) / 2.5.0 (landscape)
     */
    pageOrientation?: 'auto' | 'portrait' | 'landscape';
  };
  /**
   * 底部 tab 栏的表现
   */
  tabBar?: {
    /**
     * tab 上的文字默认颜色，仅支持十六进制颜色
     */
    color: string;
    /**
     * tab 上的文字选中时的颜色，仅支持十六进制颜色
     */
    selectedColor: string;
    /**
     * tab 的背景色，仅支持十六进制颜色
     */
    backgroundColor: string;
    /**
     * 默认值：black
     * tabbar 上边框的颜色， 仅支持 black / white
     */
    borderStyle?: 'black' | 'white';
    /**
     * tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
     */
    list: TabList[];
    /**
     * 默认值：bottom
     * tabBar 的位置，仅支持 bottom / top
     */
    position?: 'bottom' | 'top';
    /**
     * 默认值：false
     * 自定义 tabBar，见详情
     * 2.5.0
     */
    custom?: boolean;
  };
  /**
   * 网络超时时间
   */
  networkTimeout?: {
    /**
     * 默认值：60000
     * wx.request 的超时时间，单位：毫秒。
     */
    request?: number;
    /**
     * 默认值：60000
     * wx.connectSocket 的超时时间，单位：毫秒。
     */
    connectSocket?: number;
    /**
     * 默认值：60000
     * wx.uploadFile 的超时时间，单位：毫秒。
     */
    uploadFile?: number;
    /**
     * 默认值：60000
     * wx.downloadFile 的超时时间，单位：毫秒。
     */
    downloadFile?: number;
  };
  /**
   * 是否开启 debug 模式，默认关闭
   */
  debug?: boolean;
  /**
   * 是否启用插件功能页，默认关闭
   * 2.1.0
   */
  functionalPages?: boolean;
  /**
   * 分包结构配置
   * 1.7.3
   */
  subpackages?: Array<{
    root: string;
    name?: string;
    pages: string[];
    independent?: boolean;
  }>;
  /**
   * Worker 代码放置的目录
   * 1.9.90
   */
  workers?: string;
  /**
   * 需要在后台使用的能力，如「音乐播放」
   */
  requiredBackgroundModes?: string[];
  /**
   * 使用到的插件
   * 1.9.6
   */
  plugins?: Record<string, any>;
  /**
   * 分包预下载规则
   * 2.3.0
   */
  preloadRule?: Record<string, any>;
  /**
   * iPad 小程序是否支持屏幕旋转，默认关闭
   * 2.3.0
   */
  resizable?: boolean;
  /**
   * 需要跳转的小程序列表，详见 wx.navigateToMiniProgram
   * 2.4.0
   */
  navigateToMiniProgramAppIdList?: string[];
  /**
   * 全局自定义组件配置
   * 开发者工具 1.02.1810190
   */
  usingComponents?: Record<string, any>;
  /**
   * 小程序接口权限相关设置
   * 微信客户端 7.0.0
   */
  permission?: Record<string, any>;
  /**
   * 指明 sitemap.json 的位置
   */
  sitemapLocation?: string;
  /**
   * 指定使用升级后的weui样式
   * 2.8.0
   */
  style?: string;
  /**
   * 指定需要引用的扩展库
   * 2.2.1
   */
  useExtendedLib?: Record<string, any>;
  /**
   * 在小程序中可以使用云开发
   */
  cloud?: boolean;
  /**
   * 微信消息用小程序打开
   * 微信客户端7.0.9,iOS 暂不支持
   */
  entranceDeclare?: Record<string, any>;
  /**
   * 小程序支持 DarkMode
   * 2.11.0
   */
  darkmode?: boolean;
  /**
   * 指明 theme.json 的位置，darkmode为true为必填
   * 开发者工具 1.03.2004271
   */
  themeLocation?: string;
  /**
   * 配置自定义组件代码按需注入
   * 2.11.1
   */
  lazyCodeLoading?: string;
  /**
   * 单页模式相关配置
   * 2.12.0
   */
  singlePage?: {
    /**
     * 默认自动调整，若原页面是自定义导航栏，则为 float，否则为 squeezed
     */
    navigationBarFit?: 'float' | 'squeezed';
  };
}
