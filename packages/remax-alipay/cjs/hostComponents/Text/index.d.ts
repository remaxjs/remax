import * as React from 'react';
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
declare const Text: React.ForwardRefExoticComponent<TextProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default Text;
