import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface RtcRoomItemProps extends BaseProps {
  type?: 'local' | 'remote';
  userId?: string;
}

export const RtcRoomItem: React.ComponentType<RtcRoomItemProps> = createHostComponent<RtcRoomItemProps>(
  'rtc-room-item'
);
