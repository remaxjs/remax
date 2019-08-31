import factory from './factory';
import { CSSProperties } from 'react';

const RadioGroup = factory<RadioGroupProps>('radio-group');

export interface RadioGroupProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  onChange?: (event: any) => void; //  否 checkbox-group中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]} 1.0.0
  onClick?: (event: any) => void;
  animation?: Record<string, any>[];
}

export default RadioGroup;
