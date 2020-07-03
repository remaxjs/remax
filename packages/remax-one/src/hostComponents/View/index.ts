import createHostComponent from '../../createHostComponent';
import ViewProps from './props';
import defaults from './props/default';

export type { ViewProps };

const View = createHostComponent<ViewProps>('view', null, defaults);

export default View;
