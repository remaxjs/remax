import factory from './factory';

const OfficialAccount = factory<OfficialAccountProps>('official-account');

export interface OfficialAccountProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  /** 组件加载成功时触发 */
  onLoad?: (event: any) => any;
  /** 组件加载失败时触发 */
  onError?: (event: any) => any;
}

export default OfficialAccount;
