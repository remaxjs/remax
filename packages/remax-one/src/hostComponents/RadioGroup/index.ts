import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { InputEvent } from '../../types';

export interface RadioGroupProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** checkbox-group中选中项发生改变时触发 change 事件 */
  onChange?: (event: InputEvent) => void;
  name?: string;
}

export default createHostComponent<RadioGroupProps>('radio-group');
