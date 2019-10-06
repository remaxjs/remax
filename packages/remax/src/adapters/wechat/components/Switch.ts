import factory from './factory';
import { CSSProperties } from 'react';

const Switch = factory<SwitchProps>('switch');

export interface SwitchProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** (default: false) 是否选中 1.0.0 */
  checked?: boolean;
  /** (default: false) 是否禁用 1.0.0 */
  disabled?: boolean;
  /** switch 样式，有效值：switch, checkbox 1.0.0 */
  type?: 'switch' | 'checkbox';
  /** #04BE02 switch 的颜色，同 css 的 color 1.0.0 */
  color?: string;
  onClick?: (event: any) => any;
  /** checked 改变时触发 change 事件，event.detail={ value} 1.0.0 */
  onChange?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default Switch;
