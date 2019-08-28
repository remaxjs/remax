import * as React from 'react';
import factory from './factory';

export interface PickerViewProps {
  id?: string;
  className?: string;
  value?: number[];
  indicatorStyle?: React.CSSProperties;
  indicatorClass?: string;
  maskStyle?: React.CSSProperties;
  maskClass?: string;
  onChange?: (e: any) => void;
}
const PickerView = factory<PickerViewProps>('picker-view');

export default PickerView;
