import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface OfficialAccountProps extends BaseProps {
  /** 组件加载成功时触发 */
  onLoad?: (event: GenericEvent) => any;
  /** 组件加载失败时触发 */
  onError?: (event: GenericEvent) => any;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html
 */
export const OfficialAccount: React.ComponentType<OfficialAccountProps> = createHostComponent<OfficialAccountProps>(
  'official-account'
);
