import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export const TabItem: React.ComponentType<TabItemProps> = createHostComponent<TabItemProps>('tab-item');

export interface TabItemProps extends BaseProps {
  label?: string;
  name?: string;
  badgeType?: 'dot' | 'text';
  badgeText?: string;
}
