import React, { FunctionComponent, forwardRef, CSSProperties } from 'react';
import propsAlias from './propsAlias';

export interface SwiperProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  indicatorDots?: boolean; // false	否	是否显示面板指示点	1.0.0
  indicatorColor?: string; // rgba(0, 0, 0, .3)	否	指示点颜色	1.1.0
  indicatorActiveColor?: string; // #000000	否	当前选中的指示点颜色	1.1.0
  autoplay?: boolean; // false	否	是否自动切换	1.0.0
  current?: number; // 0	否	当前所在滑块的 index	1.0.0
  interval?: number; // 5000	否	自动切换时间间隔	1.0.0
  duration?: number; // 500	否	滑动动画时长	1.0.0
  circular?: boolean; // false	否	是否采用衔接滑动	1.0.0
  vertical?: boolean; // false	否	滑动方向是否为纵向	1.0.0
  previousMargin?: string; // "0px"	否	前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值	1.9.0
  nextMargin?: string; // "0px"	否	后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值	1.9.0
  displayMultipleItems?: number; // 1	否	同时显示的滑块数量	1.9.0
  skipHiddenItemLayout?: boolean; // false	否	是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息	1.9.0
  easingFunction?: string; // "default"	否	指定 swiper 切换缓动动画类型	2.6.5
  onChange?: (event: any) => void; // 否	current 改变时会触发 change 事件，event.detail = {current, source}	1.0.0
  onTransition?: (event: any) => void; // 否	swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}	2.4.3
  onAnimationFinish?: (event: any) => void; // 否	动画结束时会触发 animationfinish 事件，event.detail 同上	1.9.0
  animation?: Record<string, any>[];
}

const SwiperRender: FunctionComponent<SwiperProps> = (props, ref) => {
  const { children, current, onChange, ...restProps } = props;
  const [innerCurrent, setCurrent] = React.useState(0);

  function handleChange(event: any) {
    setCurrent(event.detail.current);

    if (typeof onChange === 'function') {
      return onChange(event);
    }
  }

  const swiperProps = propsAlias({
    ...restProps,
    current: current === undefined ? innerCurrent : current,
    onChange: handleChange,
    ref,
  });

  return React.createElement('swiper', swiperProps, children);
};

const Swiper = forwardRef(SwiperRender);

Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
  skipHiddenItemLayout: false,
  easingFunction: 'default',
};

export default Swiper;
