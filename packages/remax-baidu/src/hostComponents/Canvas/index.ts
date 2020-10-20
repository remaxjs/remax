import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface CanvasProps extends BaseProps {
  /** canvas 组件的唯一标识符 */
  canvasId?: string;
  /** 当在 canvas 中移动且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 */
  disableScroll?: boolean;
  /** 手指触摸动作开始 */
  onTouchStart?: (event: any) => void;
  /** 手指触摸后移动 */
  onTouchMove?: (event: any) => void;
  /** 手指触摸动作结束 */
  onTouchEnd?: (event: any) => void;
  /** 手指触摸动作被打断，如来电提醒，弹窗 */
  onTouchCancel?: (event: any) => void;
  /** 手指长按 350ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
  onLongTap?: (event: any) => void;
  /** 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}  */
  onError?: (event: any) => void;
}

export const Canvas: React.ComponentType<CanvasProps> = createHostComponent<CanvasProps>('canvas');

Canvas.defaultProps = {
  disableScroll: false,
};
