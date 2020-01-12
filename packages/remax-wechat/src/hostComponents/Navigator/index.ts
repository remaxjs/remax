import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

const Navigator: React.ComponentType<NavigatorProps> = createHostComponent<
  NavigatorProps
>('navigator');

export interface NavigatorProps extends BaseProps {
  /** (default: self) 在哪个目标上发生跳转，默认当前小程序 2.0.7 */
  target?: 'self' | 'miniProgram';
  /** 当前小程序内的跳转链接 1.0.0 */
  url?: string;
  /** (default: navigate) 跳转方式 1.0.0 */
  openType?:
    | 'navigate'
    | 'redirect'
    | 'switchTab'
    | 'reLaunch'
    | 'navigateBack'
    | 'exit';
  /** (default: 1) 当 open-type 为 'navigateBack' 时有效，表示回退的层数 1.0.0 */
  delta?: number;
  /** 当target="miniProgram"时有效，要打开的小程序 appId 2.0.7 */
  appId?: string;
  /** 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页 2.0.7 */
  path?: string;
  /** 当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情 2.0.7 */
  extraData?: object;
  /** (default: release) 当target="miniProgram"时有效，要打开的小程序版本 2.0.7 */
  version?: 'develop' | 'trial' | 'release';
  /** (default: navigator-hover) 指定点击时的样式类，当hover-class="none"时，没有点击态效果 1.0.0 */
  hoverClass?: string;
  /** (default: false) 指定是否阻止本节点的祖先节点出现点击态 1.5.0 */
  hoverStopPropagation?: boolean;
  /** (default: 50) 按住后多久出现点击态，单位毫秒 1.0.0 */
  hoverStartTime?: number;
  /** (default: 600) 手指松开后点击态保留时间，单位毫秒 1.0.0 */
  hoverStayTime?: number;
  /** 当target="miniProgram"时有效，跳转小程序成功 2.0.7 */
  onSuccess?: (event: any) => any;
  /** 当target="miniProgram"时有效，跳转小程序失败 2.0.7 */
  onFail?: (event: any) => any;
  /** 当target="miniProgram"时有效，跳转小程序完成 2.0.7 */
  onComplete?: (event: any) => any;
}

Navigator.defaultProps = {
  openType: 'navigate',
};

export default Navigator;
