import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface NavigationBarProps extends BaseProps {
  /** 导航条标题 2.9.0 */
  title?: string;
  /** 是否在导航条显示 loading 加载提示 2.9.0 */
  loading?: boolean;
  /** 导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 2.9.0 */
  frontColor?: '#ffffff' | '#000000';
  /** 导航条背景颜色值，有效值为十六进制颜色 2.9.0 */
  backgroundColor?: string;
  /** 改变导航栏颜色时的动画时长，默认为 0 （即没有动画效果） 2.9.0 */
  colorAnimationDuration?: number;
  /** 改变导航栏颜色时的动画方式，支持 linear 、 easeIn 、 easeOut 和 easeInOut 2.9.0 */
  colorAnimationTimingFunc?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
}
/**
 * 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html
 */
export const NavigationBar: React.ComponentType<NavigationBarProps> = createHostComponent<NavigationBarProps>(
  'navigation-bar'
);

NavigationBar.defaultProps = {
  loading: false,
  colorAnimationDuration: 0,
  colorAnimationTimingFunc: 'linear',
};
