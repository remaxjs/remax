import factory from './factory';

export interface PickerProps {
  id?: string;
  range?: string[] | object[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
const Picker = factory<PickerProps>('picker');

export default Picker;
