import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface TextProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  selectable?: boolean;
  space?: string;
  decode?: boolean;
  numberOfLines?: number;
  onTap?: (e: any) => void;
  onClick?: (e: any) => void;
}

export const Text = createHostComponent<TextProps>('text') as React.ComponentType<TextProps>;
