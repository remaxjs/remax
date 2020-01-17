import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface ButtonProps extends BaseProps {
  /**
   * 1.0.0
   * default	默认大小
   * mini	小尺寸
   */
  size?: 'default' | 'mini';
  /**
   * 1.0.0
   * primary	绿色
   * default	白色
   * warn	红色
   */
  type?: 'primary' | 'default' | 'warn';

  /**
   * 1.0.0
   * 按钮是否镂空，背景色透明
   */
  plain?: boolean;
  /**
   * 1.0.0
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 1.0.0
   * 名称前是否带 loading 图标
   */
  loading?: boolean;
  /**
   * 1.0.0
   * submit	提交表单
   * reset	重置表单
   */
  formType?: 'submit' | 'reset';
  /**
   * 1.1.0
   * contact	打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，具体说明	1.1.0
   * share	触发用户转发，使用前建议先阅读使用指引	1.2.0
   * getPhoneNumber	获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，具体说明	1.2.0
   * getUserInfo	获取用户信息，可以从bindgetuserinfo回调中获取到用户信息	1.3.0
   * launchApp	打开APP，可以通过app-parameter属性设定向APP传的参数具体说明	1.9.5
   * openSetting	打开授权设置页	2.0.7
   * feedback	打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容	2.1.0
   */
  openType?:
    | 'contact'
    | 'share'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'launchApp'
    | 'openSetting'
    | 'feedback';
  /**
   * 1.0.0
   * 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果
   */
  hoverClassName?: string;
  /**
   * 1.5.0
   * 指定是否阻止本节点的祖先节点出现点击态
   */
  hoverStopPropagation?: boolean;
  /**
   * 1.0.0
   * 按住后多久出现点击态，单位毫秒
   */
  hoverStartTime?: number;
  /**
   * 1.0.0
   * 手指松开后点击态保留时间，单位毫秒
   */
  hoverStayTime?: number;
  /**
   * 1.3.0
   * en	英文
   * zh_CN	简体中文
   * zh_TW	繁体中文
   */
  lang?: 'en' | 'zh_CN' | 'zh_TW';
  /**
   * 1.4.0
   * 会话来源，open-type="contact"时有效
   */
  sessionFrom?: string;
  /**
   * 1.5.0
   * 会话内消息卡片标题，open-type="contact"时有效
   */
  sendMessageTitle?: string;
  /**
   * 1.5.0
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
   */
  sendMessagePath?: string;
  /**
   * 1.5.0
   * 会话内消息卡片图片，open-type="contact"时有效
   */
  sendMessageImg?: string;
  /**
   * 1.9.5
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
   */
  appParameter?: string;
  /**
   * 1.5.0
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
   * 用户点击后可以快速发送小程序消息，open-type="contact"时有效
   */
  showMessageCard?: boolean;
  /**
   * 1.3.0
   * 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，
   * open-type="getUserInfo"时有效
   */
  onGetUserInfo?: (event: any) => any;
  /**
   * 1.5.0
   * 客服消息回调，open-type="contact"时有效
   */
  onContact?: (event: any) => any;
  /**
   * 1.2.0
   * 获取用户手机号回调，open-type=getPhoneNumber时有效
   */
  onGetPhoneNumber?: (event: any) => any;
  /**
   * 1.9.5
   * 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
   */
  onError?: (event: any) => any;
  /**
   * 2.0.7
   * 在打开授权设置页后回调，open-type=openSetting时有效
   */
  onOpenSetting?: (event: any) => any;
  /**
   * 2.4.4
   * 打开 APP 成功的回调，open-type=launchApp时有效
   */
  onLaunchApp?: (event: any) => any;
}

export default createHostComponent<ButtonProps>('button');
