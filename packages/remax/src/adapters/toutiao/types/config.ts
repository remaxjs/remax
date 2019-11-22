/** 页面配置文件 */
// reference: https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/general-configuration#pagejson
export interface PageConfig {
  /**
   * 默认值：#000000
   * 导航栏背景颜色，如"#000000"
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
   * 导航栏样式，仅支持 default/custom。
   * custom 模式可自定义导航栏，只保留右上角胶囊状的按钮
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
   * 默认值：false
   * 是否开启下拉刷新，详见页面相关事件处理函数。
   */
  enablePullDownRefresh?: boolean;
  /**
   * 默认值：50
   * 页面上拉触底事件触发时距页面底部距离，单位为 px
   */
  onReachBottomDistance?: number;
  /**
   * 默认值：false;
   * 设置为 true 则页面整体不能上下滚动；
   * 只在 page.json 中有效，无法在 app.json 中设置该项
   */
  disableScroll?: boolean;
  /**
   * 默认值：false
   * 禁止页面右滑手势返回
   */
  disableSwipeBack?: boolean;
  /**
   * 自定义组件配置
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
   * 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
   */
  iconPath?: string;
  /**
   * 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
   *
   */
  selectedIconPath?: string;
}

/** 全局配置文件 */
// reference: https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/general-configuration
export interface AppConfig {
  /**
   * 配置页面路径
   */
  pages: string[];
  /**
   * 配置默认页面的窗口表现
   */
  window?: {
    /**
     * 默认值：#000000
     * 导航栏背景颜色，如"#000000"
     */
    navigationBarBackgroundColor?: string;
    /**
     * 默认值: white
     * 导航栏标题颜色，仅支持 black/white，同时影响：标题颜色、右胶囊颜色、左返回箭头颜色
     */
    navigationBarTextStyle?: 'white' | 'black';
    /**
     * 导航栏标题文字内容
     */
    navigationBarTitleText?: string;
    /**
     * 默认值：default
     * 导航栏样式，仅支持 default/custom。
     * custom 模式可自定义导航栏，只保留右上角胶囊状的按钮，可以通过navigationBarTextStyle设置胶囊按钮的颜色
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
     */
    backgroundColorTop?: string;
    /**
     * 默认值：#ffffff
     * 底部窗口的背景色，仅 iOS 支持
     */
    backgroundColorBottom?: string;
    /**
     * 默认值：false
     * 是否开启下拉刷新，详见页面相关事件处理函数
     */
    enablePullDownRefresh?: boolean;
    /**
     * 默认值：50
     * 页面上拉触底事件触发时距页面底部距离，单位为 px。
     * 详见 Page.onReachBottom
     */
    onReachBottomDistance?: number;
    /**
     * 仅在 navigationStyle 为 default 时该字段生效，用来控制导航栏透明设置。
     * 默认 none，支持 always 一直透明 / auto 滑动自适应 / none 不透明
     */
    transparentTitle?: 'none' | 'always' | 'auto';
  };
  /**
   * 配置底部 tab 的表现
   */
  tabBar?: {
    /**
     * tab 上的文字默认颜色
     */
    color: string;
    /**
     * tab 上的文字选中时的颜色
     */
    selectedColor: string;
    /**
     * tab 的背景色
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
   * 需要跳转的小程序列表，相关 api 见tt.navigateToMiniProgram
   * 1.5.0
   */
  navigateToMiniProgramAppIdList?: string[];
  /**
   * 配置部分授权弹窗的副标题
   */
  permission?: Record<string, any>;
}
