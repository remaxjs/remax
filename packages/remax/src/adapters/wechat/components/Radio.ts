import factory from './factory';
import { CSSProperties } from 'react';

const Radio = factory<RadioProps>('radio');

export interface RadioProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value 1.0.0 */
  value?: string;
  /** (default: false) 当前是否选中 1.0.0 */
  checked?: boolean;
  /** (default: false) 是否禁用 1.0.0 */
  disabled?: boolean;
  /** (default: #09BB07) radio的颜色，同css的color 1.0.0 */
  color?: string;
  onClick?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default Radio;
