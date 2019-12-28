import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface PickerViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: number[];
  indicatorStyle?: React.CSSProperties;
  indicatorClass?: string;
  maskStyle?: React.CSSProperties;
  maskClass?: string;
  onChange?: (e: any) => void;
}
const PickerView = createHostComponent<PickerViewProps>('picker-view');

export default PickerView;
