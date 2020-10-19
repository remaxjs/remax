import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface OpenDataProps extends BaseProps {
  type?: 'userNickName' | 'userAvatarUrl' | 'userGender';
}

export const OpenData: React.ComponentType<OpenDataProps> = createHostComponent<OpenDataProps>('open-data');

OpenData.defaultProps = {
  type: 'userNickName',
};
