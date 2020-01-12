import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface OfficialAccountProps extends BaseProps {
  /** 组件加载成功时触发 */
  onLoad?: (event: any) => any;
  /** 组件加载失败时触发 */
  onError?: (event: any) => any;
}

export default createHostComponent<OfficialAccountProps>('official-account');
