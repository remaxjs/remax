import createHostComponent from '../../createHostComponent';
import ViewProps from './props';

export type { ViewProps };

const View = createHostComponent<ViewProps>('view', {
  wechat: {
    hoverClassName: 'none',
    'wechat-hover-stop-propagation': false,
    hoverStartTime: 50,
    hoverStayTime: 400,
  },
});

export default View;
