import * as React from 'react';
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
declare const PickerView: React.ForwardRefExoticComponent<PickerViewProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default PickerView;
