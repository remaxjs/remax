import factory from './factory';
import { CSSProperties } from 'react';

const Switch = factory<SwitchProps>('switch');

export interface SwitchProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  checked?: boolean; // false 否 是否选中 1.0.0
  disabled?: boolean; // false 否 是否禁用 1.0.0
  type?: string; // switch 否 样式，有效值：switch, checkbox 1.0.0
  color?: string; // #04BE02 否 switch 的颜色，同 css 的 color 1.0.0
  onClick?: (event: any) => void;
  onChange?: (event: any) => void; //  否 checked 改变时触发 change 事件，event.detail={ value} 1.0.0
  animation?: Record<string, any>[];
}

export default Switch;
