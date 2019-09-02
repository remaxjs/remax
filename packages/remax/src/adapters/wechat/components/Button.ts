import factory from './factory';
import { CSSProperties } from 'react';

const Button = factory<ButtonProps>('button');

export interface ButtonProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  size?: string; // default 否 按钮的大小 1.0.0
  type?: string; // default 否 按钮的样式类型 1.0.0
  plain?: boolean; // false 否 按钮是否镂空，背景色透明 1.0.0
  disabled?: boolean; // false 否 是否禁用 1.0.0
  loading?: boolean; // false 否 名称前是否带 loading 图标 1.0.0
  formType?: string; //  否 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 1.0.0
  openType?: string; //  否 微信开放能力 1.1.0
  hoverClass?: string; // button-hover 否 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 1.0.0
  hoverStopPropagation?: boolean; // false 否 指定是否阻止本节点的祖先节点出现点击态 1.5.0
  hoverStartTime?: number; // 20 否 按住后多久出现点击态，单位毫秒 1.0.0
  hoverStayTime?: number; // 70 否 手指松开后点击态保留时间，单位毫秒 1.0.0
  lang?: string; // en 否 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 1.3.0
  sessionFrom?: string; //  否 会话来源，open-type="contact"时有效 1.4.0
  sendMessageTitle?: string; // 当前标题 否 会话内消息卡片标题，open-type="contact"时有效 1.5.0
  sendMessagePath?: string; // 当前分享路径 否 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 1.5.0
  sendMessageImg?: string; // 截图 否 会话内消息卡片图片，open-type="contact"时有效 1.5.0
  appParameter?: string; //  否 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 1.9.5
  showMessageCard?: boolean; // false 否 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 1.5.0
  onClick?: (event: any) => any;
  onGetUserInfo?: (event: any) => any; // 否 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效 1.3.0
  onContact?: (event: any) => any; // 否 客服消息回调，open-type="contact"时有效 1.5.0
  onGetPhoneNumber?: (event: any) => any; // 否 获取用户手机号回调，open-type=getPhoneNumber时有效 1.2.0
  onError?: (event: any) => any; // 否 当使用开放能力时，发生错误的回调，open-type=launchApp时有效 1.9.5
  onOpenSetting?: (event: any) => any; //  否 在打开授权设置页后回调，open-type=openSetting时有效 2.0.7
  onLaunchApp?: (event: any) => any; //  否 打开 APP 成功的回调，open-type=launchApp时有效 2.4.4
  animation?: Record<string, any>[];
}

export default Button;
