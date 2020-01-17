import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface NavigatorProps extends BaseProps {
  url: string;
  delta?: number;
  openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack';
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

export default createHostComponent<NavigatorProps>('navigator');
