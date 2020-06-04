import createHostComponent from '../../createHostComponent';
import { NavigatorProps } from './props';

export type { NavigatorProps };

export default createHostComponent<NavigatorProps>('navigator', {
  wechat: {
    'wechat-target': 'self',
    'wechat-open-type': 'navigate',
    'wechat-delta': 1,
    hoverClassName: 'navigator-hover',
    'wechat-hover-stop-propagation': false,
    hoverStartTime: 50,
    hoverStayTime: 600,
  },
});
