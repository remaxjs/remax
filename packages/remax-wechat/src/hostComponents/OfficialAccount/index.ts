import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface OfficialAccountProps extends BaseProps {
  /** 组件加载成功时触发 */
  onLoad?: (event: any) => any;
  /** 组件加载失败时触发 */
  onError?: (event: any) => any;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html
 */
export const OfficialAccount = createHostComponent<OfficialAccountProps>('official-account');
