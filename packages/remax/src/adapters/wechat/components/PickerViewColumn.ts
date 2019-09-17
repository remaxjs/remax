import factory from './factory';

const PickerViewColumn = factory<PickerViewColumnProps>('picker-view-column');

export interface PickerViewColumnProps {
  readonly dataset?: DOMStringMap;
  id?: string;
}

export default PickerViewColumn;
