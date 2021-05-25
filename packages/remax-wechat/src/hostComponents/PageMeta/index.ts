import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface PageMetaProps extends BaseProps {
  /** 下拉背景字体、loading 图的样式，仅支持 dark 和 light 2.9.0 */
  backgroundTextStyle?: 'dark' | 'light';
  /** 窗口的背景色，必须为十六进制颜色值 2.9.0 */
  backgroundColor?: string;
  /** 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 2.9.0 */
  backgroundColorTop?: string;
  /** 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 2.9.0 */
  backgroundColorBottom?: string;
  /** 页面内容的背景色，用于页面中的空白部分和页面大小变化 resize 动画期间的临时空闲区域 2.12.1 */
  rootBackgroundColor?: string;
  /** 滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置 2.9.0 */
  scrollTop?: string;
  /** 滚动动画时长 2.9.0 */
  scrollDuration?: number;
  /** 页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点 2.9.0 */
  pageStyle?: string;
  /** 页面 page 的字体大小，可以设置为 system ，表示使用当前用户设置的微信字体大小 2.11.0 */
  pageFontSize?: string;
  /** 页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 1rem 等于这个字体大小；自小程序版本 2.11.0 起，也可以设置为 system 2.9.0 */
  rootFontSize?: string;
  /** 页面的方向，可为 auto portrait 或 landscape 2.12.0 */
  pageOrientation?: 'auto' | 'portrait' | 'landscape';
  /** 页面尺寸变化时会触发 resize 事件， event.detail = { size: { windowWidth, windowHeight } } 2.9.0 */
  onResize?: (event: GenericEvent) => any;
  /** 页面滚动时会触发 scroll 事件， event.detail = { scrollTop } 2.9.0 */
  onScroll?: (event: GenericEvent) => any;
  /** 如果通过改变 scroll-top 属性来使页面滚动，页面滚动结束后会触发 scrolldone 事件 2.9.0 */
  onScrollDone?: (event: GenericEvent) => any;
}
/**
 * 页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 navigation-bar 组件一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html
 */
export const PageMeta: React.ComponentType<PageMetaProps> = createHostComponent<PageMetaProps>('page-meta');

PageMeta.defaultProps = {
  scrollDuration: 300,
};
