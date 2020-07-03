import createHostComponent from '../../createHostComponent';
import { NavigatorProps } from './props';
import defaults from './props/default';

export type { NavigatorProps };

export default createHostComponent<NavigatorProps>('navigator', null, defaults);
