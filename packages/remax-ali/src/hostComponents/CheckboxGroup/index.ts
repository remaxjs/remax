import { createHostComponent } from '@remax/shared';

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export const CheckboxGroup = createHostComponent<CheckboxGroupProps>('checkbox-group');
