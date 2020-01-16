import * as React from 'react';
import createHostComponent from '../../createHostComponent';

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
const Text = createHostComponent<TextProps>('text');

export default Text;
