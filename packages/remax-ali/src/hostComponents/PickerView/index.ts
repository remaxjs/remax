import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface PickerViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: number[];
  indicatorStyle?: React.CSSProperties;
  indicatorClassName?: string;
  maskStyle?: React.CSSProperties;
  maskClassName?: string;
  onChange?: (e: any) => void;
}
const PickerView = createHostComponent<PickerViewProps>('picker-view');

export default PickerView;
