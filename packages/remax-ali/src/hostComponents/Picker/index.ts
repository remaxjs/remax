import { createHostComponent } from '@remax/shared';

export interface PickerProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  name?: string;
  className?: string;
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
export const Picker = createHostComponent<PickerProps>('picker');
