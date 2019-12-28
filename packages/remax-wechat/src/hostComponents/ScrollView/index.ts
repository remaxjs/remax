import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

const componentName = 'scroll-view';

const ScrollViewRender: React.FunctionComponent<ScrollViewProps> = (
  props,
  ref
) => {
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

const ScrollView = React.forwardRef(ScrollViewRender);

ScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50,
};

export default createHostComponent<ScrollViewProps>(componentName, ScrollView);

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
  onScrollToLower?: (evnt: any) => void;
  /** 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} 1.0.0 */
  onScroll?: (event: any) => any;
}
