import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface TextProps extends BaseProps {
  space?: false | 'ensp' | 'emsp' | 'nbsp';
  selectable?: boolean;
}

export const Text: React.ComponentType<TextProps> = createHostComponent<TextProps>('text');

Text.defaultProps = {
  space: false,
  selectable: false,
};
