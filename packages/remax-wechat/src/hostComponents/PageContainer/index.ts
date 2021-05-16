import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface PageContainerProps extends BaseProps {
  /** 是否显示容器组件 2.16.0 */
  show?: boolean;
  /** 动画时长，单位毫秒 2.16.0 */
  duration?: number;
  /** z-index 层级 2.16.0 */
  zIndex?: number;
  /** 是否显示遮罩层 2.16.0 */
  overlay?: boolean;
  /** 弹出位置，可选值为 top bottom right center 2.16.0 */
  position?: 'top' | 'bottom' | 'right' | 'center';
  /** 是否显示圆角 2.16.0 */
  round?: boolean;
  /** 是否在下滑一段距离后关闭 2.16.0 */
  closeOnSlideDown?: boolean;
  /** 自定义遮罩层样式 2.16.0 */
  overlayStyle?: string;
  /** 自定义弹出层样式 2.16.0 */
  customStyle?: string;
  /** 进入前触发 2.16.0 */
  onBeforeEnter?: (event: GenericEvent) => any;
  /** 进入中触发 2.16.0 */
  onEnter?: (event: GenericEvent) => any;
  /** 进入后触发 2.16.0 */
  onAfterEnter?: (event: GenericEvent) => any;
  /** 离开前触发 2.16.0 */
  onBeforeLeave?: (event: GenericEvent) => any;
  /** 离开中触发 2.16.0 */
  onLeave?: (event: GenericEvent) => any;
  /** 离开后触发 2.16.0 */
  onAfterLeave?: (event: GenericEvent) => any;
  /** 点击遮罩层触发 2.16.0 */
  onClickOverlay?: (event: GenericEvent) => any;
}
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
 */
export const PageContainer: React.ComponentType<PageContainerProps> = createHostComponent<PageContainerProps>(
  'page-container'
);

PageContainer.defaultProps = {
  show: false,
  duration: 300,
  zIndex: 100,
  overlay: true,
  position: 'bottom',
  round: false,
  closeOnSlideDown: false,
};
