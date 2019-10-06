import factory from './factory';
import { CSSProperties } from 'react';

const RadioGroup = factory<RadioGroupProps>('radio-group');

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]} 1.0.0 */
  onChange?: (event: any) => any;
  onClick?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default RadioGroup;
