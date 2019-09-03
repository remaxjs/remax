import * as React from 'react';
import factory from './factory';

export interface TextProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  selectable?: boolean;
  space?: string;
  decode?: boolean;
  numberOfLines?: number;
}
const Text = factory<TextProps>('text');

export default Text;
