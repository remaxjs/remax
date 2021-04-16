import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface TextProps extends BaseProps {
  selectable?: boolean;
  space?: string | boolean;
  decode?: boolean;
}

export const Text: React.ComponentType<TextProps> = createHostComponent<TextProps>('text');

Text.defaultProps = {
  selectable: false,
  space: false,
  decode: false,
};
