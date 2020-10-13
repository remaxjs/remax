import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { TapEvent } from '../../types';
import alias from './props/alias';
import defaults from './props/default';

export interface ButtonProps extends React.AriaAttributes {
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
  /** 指定是否阻止本节点的祖先节点出现点击态 */
  hoverStopPropagation?: boolean;
  /** 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 */
  type?: 'submit' | 'reset';
  onTap?: (event: TapEvent) => void;
}

const Button: React.ComponentType<ButtonProps> = createHostComponent<ButtonProps>('button', alias, defaults);

export default Button;
