import { createHostComponent } from '@remax/shared';

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  name?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export const RadioGroup = createHostComponent<RadioGroupProps>('radio-group');
