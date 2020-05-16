import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface TextProps extends BaseProps {
  selectable?: boolean;
  space?: string | boolean;
  decode?: boolean;
}

export const Text = createHostComponent<TextProps>('text');
