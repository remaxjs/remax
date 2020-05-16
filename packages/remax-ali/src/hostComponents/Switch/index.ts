import { createHostComponent } from '@remax/shared';

export interface SwitchProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  controlled?: boolean;
  onChange?: (e: any) => void;
}

export const Switch = createHostComponent<SwitchProps>('switch');
