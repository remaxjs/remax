import factory from './factory';

export interface PickerViewProps {
  value?: number[];
  indicatorStyle: string;
  maskStyle?: string;
  onChange?: (e: any) => void;
}

const PickerView = factory<PickerViewProps>('picker-view');

export default PickerView;
