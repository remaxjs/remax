import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface NavigatorProps extends BaseProps {
  target?: 'self' | 'miniProgram';
  url?: string;
  openType?: 'navigate' | 'redirect' | 'switchTab' | 'navigateBack' | 'reLaunch' | 'exit';
  delta?: number;
  appId?: string;
  path?: string;
  extraData?: Record<string, unknown>;
  version?: 'develop' | 'trial' | 'release';
  hoverClass?: string;
  hoverStopPropagation?: boolean;
  hoverStartTime?: number;
  hoverStayTime?: number;
  onSuccess?: (event: GenericEvent) => void;
  onFail?: (event: GenericEvent) => void;
  onComplete?: (event: GenericEvent) => void;
}

export const Navigator: React.ComponentType<NavigatorProps> = createHostComponent<NavigatorProps>('navigator');

Navigator.defaultProps = {
  target: 'self',
  openType: 'navigate',
  version: 'release',
  hoverClass: 'navigator-hover',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 600,
};
