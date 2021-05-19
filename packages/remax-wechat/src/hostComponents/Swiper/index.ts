import * as React from 'react';
import { BaseProps, GenericEvent } from '../../types/component';
import { createHostComponent } from '@remax/runtime';

export interface SwiperProps extends BaseProps {
  /** (default: false) 是否显示面板指示点 1.0.0  */
  indicatorDots?: boolean;
  /** (default: rgba(0, 0, 0, .3)) 指示点颜色 1.1.0  */
  indicatorColor?: string;
  /** (default: #000000) 当前选中的指示点颜色 1.1.0  */
  indicatorActiveColor?: string;
  /** (default: false) 是否自动切换 1.0.0  */
  autoplay?: boolean;
  /** (default: 0) 当前所在滑块的 index 1.0.0  */
  current?: number;
  /** (default: 5000) 自动切换时间间隔 1.0.0  */
  interval?: number;
  /** (default: 500) 滑动动画时长 1.0.0  */
  duration?: number;
  /** (default: false) 是否采用衔接滑动 1.0.0  */
  circular?: boolean;
  /** (default: false) 滑动方向是否为纵向 1.0.0  */
  vertical?: boolean;
  /** 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 1.9.0  */
  previousMargin?: string;
  /** 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 1.9.0  */
  nextMargin?: string;
  /** (default: 1) 同时显示的滑块数量 1.9.0  */
  displayMultipleItems?: number;
  /** (default: false) 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 1.9.0  */
  skipHiddenItemLayout?: boolean;
  /** 指定 swiper 切换缓动动画类型 2.6.5  */
  easingFunction?: 'default' | 'linear' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic';
  /** current 改变时会触发 change 事件，event.detail = {current, source} 1.0.0 */
  onChange?: (event: GenericEvent) => any;
  /** swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy} 2.4.3 */
  onTransition?: (event: GenericEvent) => any;
  /** 动画结束时会触发 animationfinish 事件，event.detail 同上 1.9.0 */
  onAnimationFinish?: (event: GenericEvent) => any;
  /** 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素 2.12.1 */
  snapToEdge?: boolean;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */
export const Swiper: React.ComponentType<SwiperProps> = createHostComponent<SwiperProps>('swiper');

Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  current: 0,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
  skipHiddenItemLayout: false,
  easingFunction: 'default',
  snapToEdge: false,
};
