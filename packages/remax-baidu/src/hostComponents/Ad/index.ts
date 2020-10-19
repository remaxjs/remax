import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface AdProps extends BaseProps {
  appid?: string;
  apid?: string;
  type?: 'feed' | 'banner';
  updatetime?: string;
  onError?: (event: GenericEvent) => void;
  onLoad?: (event: GenericEvent) => void;
  onClose?: (event: GenericEvent) => void;
  onStatus?: (event: GenericEvent) => void;
}

export const Ad: React.ComponentType<AdProps> = createHostComponent<AdProps>('ad');

Ad.defaultProps = {
  type: 'feed',
};
