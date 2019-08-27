import factory from './factory';

export interface PickerViewProps {
  id?: string;
  value?: number[];
  indicatorStyle?: string;
  indicatorClass?: string;
  maskStyle?: string;
  maskClass?: string;
  onChange?: (e: any) => void;
}
const PickerView = factory<PickerViewProps>('picker-view');

export default PickerView;
