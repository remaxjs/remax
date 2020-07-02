import createHostComponent from '../../createHostComponent';
import ViewProps, { defaults } from './props';

export type { ViewProps };

const View = createHostComponent<ViewProps>('view', null, defaults);

export default View;
