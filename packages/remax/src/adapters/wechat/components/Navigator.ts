import factory from './factory';

const Navigator = factory<NavigatorProps>('navigator');

export interface NavigatorProps {
  id?: string;
  target?: string; // self 否 在哪个目标上发生跳转，默认当前小程序 2.0.7
  url?: string; //  否 当前小程序内的跳转链接 1.0.0
  openType?: string; // navigate 否 跳转方式 1.0.0
  delta?: number; // 1 否 当 open-type 为 'navigateBack' 时有效，表示回退的层数 1.0.0
  appId?: string; //  否 当target="miniProgram"时有效，要打开的小程序 appId 2.0.7
  path?: string; //  否 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页 2.0.7
  extraData?: object; //  否 当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情 2.0.7
  version?: string; // release 否 当target="miniProgram"时有效，要打开的小程序版本 2.0.7
  hoverClass?: string; // navigator-hover 否 指定点击时的样式类，当hover-class="none"时，没有点击态效果 1.0.0
  hoverStopPropagation?: boolean; // false 否 指定是否阻止本节点的祖先节点出现点击态 1.5.0
  hoverStartTime?: number; // 50 否 按住后多久出现点击态，单位毫秒 1.0.0
  hoverStayTime?: number; // 600 否 手指松开后点击态保留时间，单位毫秒 1.0.0
  onSuccess?: (event: any) => void; //  否 当target="miniProgram"时有效，跳转小程序成功 2.0.7
  onFail?: (event: any) => void; //  否 当target="miniProgram"时有效，跳转小程序失败 2.0.7
  onComplete?: (event: any) => void; //  否 当target="miniProgram"时有效，跳转小程序完成 2.0.7
}

export default Navigator;
