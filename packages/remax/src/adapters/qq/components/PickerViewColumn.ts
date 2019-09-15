import factory from './factory';

const PickerViewColumn = factory<PickerViewColumnProps>('picker-view-column');

export interface PickerViewColumnProps {
  id?: string;
}

export default PickerViewColumn;
