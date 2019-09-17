import factory from './factory';
import { CSSProperties } from 'react';

const Icon = factory<IconProps>('icon');

export interface IconProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  type: string; //  是 icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear 1.0.0
  size?: number | string; // 23 否 icon的大小 1.0.0
  color?: string; //  否 icon的颜色，同css的color 1.0.0
  animation?: Array<Record<string, any>>;
  onClick?: (event: any) => any;
}

export default Icon;
