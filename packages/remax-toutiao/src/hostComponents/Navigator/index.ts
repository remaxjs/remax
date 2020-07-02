import { createHostComponent } from '@remax/shared';

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

export const Navigator = createHostComponent<NavigatorProps>('navigator');

Navigator.defaultProps = {
  openType: 'navigate',
  hoverClassName: 'navigator-hover',
  hoverStartTime: 50,
  hoverStayTime: 400,
  hoverStopPropagation: false,
};
