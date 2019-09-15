import factory from './factory';
import { CSSProperties } from 'react';

const Progress = factory<ProgressProps>('progress');

export interface ProgressProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  percent?: number; //  否 百分比0~100 1.0.0
  showInfo?: boolean; // false 否 在进度条右侧显示百分比 1.0.0
  borderRadius?: number | string; // 0 否 圆角大小 2.3.1
  fontSize?: number | string; // 16 否 右侧百分比字体大小 2.3.1
  strokeWidth?: number | string; // 6 否 进度条线的宽度 1.0.0
  color?: string; // #09BB07 否 进度条颜色（请使用activeColor） 1.0.0
  activeColor?: string; // #09BB07 否 已选择的进度条的颜色 1.0.0
  backgroundColor?: string; // #EBEBEB 否 未选择的进度条的颜色 1.0.0
  active?: boolean; // false 否 进度条从左往右的动画 1.0.0
  activeMode?: string; // backwards 否 backwards: 动画从头播；forwards：动画从上次结束点接着播 1.7.0
  onClick?: (event: any) => any;
  onActiveEnd?: (event: any) => any; //  否 动画完成事件 2.4.1
  animation?: Array<Record<string, any>>;
}

export default Progress;
