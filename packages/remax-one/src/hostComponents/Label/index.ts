import createHostComponent from '../../createHostComponent';
import { LabelProps } from './props';

export type { LabelProps };

export default createHostComponent<LabelProps>('label', { htmlFor: 'for' });
