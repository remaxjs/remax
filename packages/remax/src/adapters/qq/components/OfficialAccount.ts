import factory from './factory';

const OfficialAccount = factory<OfficialAccountProps>('official-account');

export interface OfficialAccountProps {
  id?: string;
  onLoad?: (event: any) => any; // 组件加载成功时触发
  onError?: (event: any) => any; // 组件加载失败时触发
}

export default OfficialAccount;
