import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface RadioProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** radio 标识。当该radio 选中时，radio-group 的 change 事件会携带radio的value */
  value?: string;
  /** (default: false) 当前是否选中 */
  checked?: boolean;
  /** (default: false) 是否禁用 */
  disabled?: boolean;
  /** (default: #09BB07) radio的颜色，同css的color */
  color?: string;
}

export default createHostComponent<RadioProps>('radio');
