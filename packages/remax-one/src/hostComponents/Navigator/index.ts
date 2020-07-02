import createHostComponent from '../../createHostComponent';
import { NavigatorProps, defaults } from './props';

export type { NavigatorProps };

export default createHostComponent<NavigatorProps>('navigator', null, defaults);
