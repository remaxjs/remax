import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface NavigatorProps extends BaseProps {
  url: string;
  delta?: number;
  openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack';
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

const Navigator = createHostComponent<NavigatorProps>('navigator');

export default Navigator;
