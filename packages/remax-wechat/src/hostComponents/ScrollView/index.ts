import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

const componentName = 'scroll-view';

const ScrollViewRender: React.ForwardRefRenderFunction<any, ScrollViewProps> = (props, ref) => {
  const { children, scrollTop, onScroll, ...restProps } = props;
  const [innerScrollTop, forceUpdateScrollTop] = React.useState(scrollTop);
  const scrollTopRef = React.useRef(innerScrollTop);

  function handleScroll(event: any) {
    scrollTopRef.current = event?.detail?.scrollTop;

    if (typeof onScroll === 'function') {
      onScroll(event);
    }
  }

  React.useEffect(() => {
    scrollTopRef.current = scrollTop;
    forceUpdateScrollTop(scrollTop);
  }, [scrollTop]);

  const scrollViewProps = {
    ...restProps,
    onScroll: handleScroll,
    scrollTop: scrollTopRef.current,
    ref,
  };

  return React.createElement(componentName, scrollViewProps, children);
};

const RemaxScrollView = React.forwardRef(ScrollViewRender);

RemaxScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50,
  scrollX: false,
  scrollY: false,
  scrollWithAnimation: false,
  enableBackToTop: false,
  enableFlex: false,
  scrollAnchoring: false,
  refresherEnabled: false,
  refresherThreshold: 45,
  refresherDefaultStyle: 'black',
  refresherBackground: '#fff',
  refresherTriggered: false,
};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html
 */
export const ScrollView = createHostComponent<ScrollViewProps>(componentName, RemaxScrollView);

export interface ScrollViewProps extends BaseProps {
  /** (default: false) 允许横向滚动 1.0.0 */
  scrollX?: boolean;
  /** (default: false) 允许纵向滚动 1.0.0 */
  scrollY?: boolean;
  /** (default: 50) 距顶部/左边多远时，触发 scrolltoupper 事件 1.0.0 */
  upperThreshold?: number | string;
  /** (default: 50) 距底部/右边多远时，触发 scrolltolower 事件 1.0.0 */
  lowerThreshold?: number | string;
  /** 设置竖向滚动条位置 1.0.0 */
  scrollTop?: number | string;
  /** 设置横向滚动条位置 1.0.0 */
  scrollLeft?: number | string;
  /** 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 1.0.0 */
  scrollIntoView?: string;
  /** (default: false) 在设置滚动条位置时使用动画过渡 1.0.0 */
  scrollWithAnimation?: boolean;
  /** (default: false) iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 1.0.0 */
  enableBackToTop?: boolean;
  /** (default: false) 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。 2.7.3 */
  enableFlex?: boolean;
  /** 滚动到顶部/左边时触发 1.0.0 */
  onScrollToUpper?: (event: any) => any;
  /** 滚动到底部/右边时触发 1.0.0 */
  onScrollToLower?: (event: any) => void;
  /** 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} 1.0.0 */
  onScroll?: (event: any) => any;
  /** 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。	2.8.2 */
  scrollAnchoring?: boolean;
  /** 开启自定义下拉刷新	2.10.1 */
  refresherEnabled?: boolean;
  /** 设置自定义下拉刷新阈值	2.10.1 */
  refresherThreshold?: number;
  /** 设置自定义下拉刷新默认样式，支持设置 black | white | none， none 表示不使用默认样式	2.10.1 */
  refresherDefaultStyle?: string;
  /** 设置自定义下拉刷新区域背景颜色	2.10.1 */
  refresherBackground?: string;
  /** 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发	2.10.1 */
  refresherTriggered?: boolean;
  /** 自定义下拉刷新控件被下拉	2.10.1 */
  onRefresherPulling?: (event: any) => void;
  /** 自定义下拉刷新被触发	2.10.1 */
  onRefresherRefresh?: (event: any) => void;
  /**	自定义下拉刷新被复位	2.10.1 */
  onRefresherRestore?: (event: any) => void;
  /** 自定义下拉刷新被中止 2.10.1 */
  onRefresherAbort?: (event: any) => void;
}
