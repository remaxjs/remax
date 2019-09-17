import factory from './factory';
import { CSSProperties } from 'react';

const ScrollView = factory('scroll-view');

export interface ScrollViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  scrollX?: boolean; // false 否 允许横向滚动 1.0.0
  scrollY?: boolean; // false 否 允许纵向滚动 1.0.0
  upperThreshold?: number | string; // 50 否 距顶部/左边多远时，触发 scrolltoupper 事件 1.0.0
  lowerThreshold?: number | string; // 50 否 距底部/右边多远时，触发 scrolltolower 事件 1.0.0
  scrollTop?: number | string; //  否 设置竖向滚动条位置 1.0.0
  scrollLeft?: number | string; //  否 设置横向滚动条位置 1.0.0
  scrollIntoView?: string; //  否 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 1.0.0
  scrollWithAnimation?: boolean; // false 否 在设置滚动条位置时使用动画过渡 1.0.0
  enableBackToTop?: boolean; // false 否 iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 1.0.0
  enableFlex?: boolean; // false 否 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。 2.7.3
  onScrollToUpper?: (event: any) => any; //  否 滚动到顶部/左边时触发 1.0.0
  onScrollToLower?: (evnt: any) => void; //  否 滚动到底部/右边时触发 1.0.0
  onScroll?: (event: any) => any; //  否 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} 1.0.0
  onClick?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default ScrollView;
