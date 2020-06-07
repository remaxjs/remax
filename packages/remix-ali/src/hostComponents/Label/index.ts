import { createHostComponent } from '@alipay/remix-shared';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
  className?: string;
}

export const Label = createHostComponent<LabelProps>('label');
