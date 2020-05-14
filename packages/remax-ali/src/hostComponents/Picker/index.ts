import createHostComponent from '../../createHostComponent';

export interface PickerProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
export default createHostComponent<PickerProps>('picker');
