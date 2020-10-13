import * as React from 'react';
import { TapEvent } from '../../../types';

export { default as defaults } from './default';
export { default as alias } from './alias';

interface CommonProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 是否禁用 */
  disabled?: boolean;
  /** 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 */
  hoverClassName?: string;
  /** 按住后多久出现点击态，单位毫秒 */
  hoverStartTime?: number;
  /** 手指松开后点击态保留时间，单位毫秒 */
  hoverStayTime?: number;
  /** 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 */
  type?: 'submit' | 'reset';
}

export interface ButtonProps extends CommonProps, React.AriaAttributes {
  onTap?: (event: TapEvent) => void;
}

export interface ButtonWebProps extends CommonProps, React.HTMLAttributes<HTMLButtonElement> {
  onTap?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onLongTap?: (event: React.TouchEvent<HTMLButtonElement>) => void;
}
