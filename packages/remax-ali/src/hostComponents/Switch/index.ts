import { createHostComponent } from '@remax/runtime';

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

export const Switch = createHostComponent<SwitchProps>('switch') as React.ComponentType<SwitchProps>;
