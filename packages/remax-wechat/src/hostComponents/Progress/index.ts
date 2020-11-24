import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface ProgressProps extends BaseProps {
  /** 百分比0~100 1.0.0 */
  percent?: number;
  /** 在进度条右侧显示百分比 1.0.0 */
  showInfo?: boolean;
  /** 圆角大小 2.3.1 */
  borderRadius?: number | string;
  /** (default: 16) 右侧百分比字体大小 2.3.1 */
  fontSize?: number | string;
  /** (default: 6) 进度条线的宽度 1.0.0 */
  strokeWidth?: number | string;
  /** (default: #09BB07) 进度条颜色（请使用activeColor） 1.0.0 */
  color?: string;
  /** (default: #09BB07) 已选择的进度条的颜色 1.0.0 */
  activeColor?: string;
  /** (default: #EBEBEB) 未选择的进度条的颜色 1.0.0 */
  backgroundColor?: string;
  /** (default: false) 进度条从左往右的动画 1.0.0 */
  active?: boolean;
  /** (default: backwards) backwards: 动画从头播；forwards：动画从上次结束点接着播 1.7.0 */
  activeMode?: 'backwards' | 'forwards';
  /**
   * 进度增加1%所需毫秒数	2.8.2
   */
  duration?: number;
  /** 动画完成事件 2.4.1 */
  onActiveEnd?: (event: GenericEvent) => any;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */
export const Progress: React.ComponentType<ProgressProps> = createHostComponent<ProgressProps>('progress');

Progress.defaultProps = {
  showInfo: false,
  borderRadius: 0,
  fontSize: 16,
  strokeWidth: 6,
  color: '#09BB07',
  activeColor: '#09BB07',
  backgroundColor: '#EBEBEB',
  active: false,
  activeMode: 'backwards',
  duration: 30,
};
