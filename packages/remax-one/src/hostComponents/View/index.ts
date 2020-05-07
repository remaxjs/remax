import createHostComponent from '../../createHostComponent';
import ViewProps from './props';

export type { ViewProps };

const View = createHostComponent<ViewProps>('view');

export default View;
