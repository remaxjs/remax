import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

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

export default createHostComponent<IconProps>('icon');
