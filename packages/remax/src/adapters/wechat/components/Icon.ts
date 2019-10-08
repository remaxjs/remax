import factory from './factory';
import { BaseProps } from './baseTyping';

const Icon = factory<IconProps>('icon');

export interface IconProps extends BaseProps {
  /** icon的类型 1.0.0  */
  type:
    | 'success'
    | 'success_no_circle'
    | 'info'
    | 'warn'
    | 'waiting'
    | 'cancel'
    | 'download'
    | 'search'
    | 'clear';
  /** (default: 23) icon的大小 1.0.0  */
  size?: number | string;
  /** icon的颜色，同css的color 1.0.0  */
  color?: string;
}

export default Icon;
