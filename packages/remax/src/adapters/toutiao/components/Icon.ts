import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface IconProps extends BaseProps {
  type:
    | 'info'
    | 'warn'
    | 'waiting'
    | 'cancel'
    | 'download'
    | 'search'
    | 'clear'
    | 'success'
    | 'success_no_circle'
    | 'loading';
  size?: number;
  color?: string;
}
const Icon = createHostComponent<IconProps>('icon');

export default Icon;
