import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

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
   * - 微信小程序 & QQ 小程序
   * contact	打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息	1.1.0
   * share	触发用户转发，使用前建议先阅读使用指引	1.2.0
   * getPhoneNumber	获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息	1.2.0
   * getUserInfo	获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息	1.3.0
   * launchApp	打开 App，可以通过 app-parameter 属性设定向 App 传的参数	1.9.5
   * openSetting	打开授权设置页	2.0.7
   * feedback	打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容	2.1.0
   *
   * - QQ 小程序
   * openGroupProfile	呼起群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 app.json 中必须配置 groupIdList（数量不超过 10 个），表明可以打开群资料卡的群号	1.4.7
   * addFriend	添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功	1.0.0
   * addColorSign	添加彩签，点击后添加状态有用户提示，无回调	1.10.0
   * openPublicProfile	打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 app.json 中必须配置 publicIdList（目前只能配置 1 个），表明可以打开的公众号资料卡的号码	1.12.0
   * addGroupApp	添加群应用（只有管理员或群主有权操作，建议先调用 qq.getGroupInfo 获取当前用户是否为管理员，如果是管理员才显示该按钮），添加后给 button 绑定 bindaddgroupapp 事件接收回调数据	1.16.0
   * shareMessageToFriend	在自定义开放数据域组件中,向指定好友发起分享	1.17.0
   * addToFavorites	收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法	1.19.0
   */
  openType?:
    | 'contact'
    | 'share'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'launchApp'
    | 'openSetting'
    | 'feedback'
    | 'openGroupProfile'
    | 'addFriend'
    | 'addColorSign'
    | 'openPublicProfile'
    | 'addGroupApp'
    | 'shareMessageToFriend'
    | 'addToFavorites';
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
   * QQ 小程序 1.0.0
   * 打开 APP 时，应用的包名（Android）
   */
  appPackageName?: string;
  /**
   * QQ 小程序 1.0.0
   * 打开 APP 时，应用的 Bundle ID（iOS）
   */
  appBundleID?: string;
  /**
   * QQ 小程序 1.0.0
   * 打开 APP 时，应用在 QQ 互联中的 AppID
   */
  appConnectID?: string;
  /**
   * QQ 小程序 1.0.0
   * 添加好友时，对方的 openid
   */
  openId?: string;
  /**
   * QQ 小程序 1.0.0
   * 打开群资料卡时，传递的群号
   */
  groupId?: string;
  /**
   * QQ 小程序 1.12.0
   * 打开公众号资料卡时，传递的号码
   */
  publicId?: string;
  /**
   * QQ 小程序 1.4.4
   * 分享类型集合，标志位形式
   */
  shareType?: number;
  /**
   * QQ 小程序 1.15.0
   * 分享类型集合，数组形式
   */
  shareMode?: Array<'qq' | 'qzone' | 'quickToDialog' | 'wechatFriends' | 'wechatMoment' | 'recentContacts'>;
  /**
   * QQ 小程序 1.17.0
   * 发送对象的 FriendInfo
   */
  shareMessageFriendInfo?: any;
  /**
   * QQ 小程序 1.17.0
   * 转发标题，不传则默认使用当前小程序的昵称。
   */
  shareMessageTitle?: string;
  /**
   * QQ 小程序 1.17.0
   * 转发显示图片的链接，可以是网络图片路径（仅 QQ CDN 域名路径）或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4
   */
  shareMessageImg?: string;
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
  onGetUserInfo?: (event: GenericEvent) => any;
  /**
   * 1.5.0
   * 客服消息回调，open-type="contact"时有效
   */
  onContact?: (event: GenericEvent) => any;
  /**
   * 1.2.0
   * 获取用户手机号回调，open-type=getPhoneNumber时有效
   */
  onGetPhoneNumber?: (event: GenericEvent) => any;
  /**
   * 1.9.5
   * 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
   */
  onError?: (event: GenericEvent) => any;
  /**
   * 2.0.7
   * 在打开授权设置页后回调，open-type=openSetting时有效
   */
  onOpenSetting?: (event: GenericEvent) => any;
  /**
   * 2.4.4
   * 打开 APP 成功的回调，open-type=launchApp时有效
   */
  onLaunchApp?: (event: GenericEvent) => any;
  /**
   * QQ 小程序 1.0.0
   * 添加好友的回调
   */
  onAddFriend?: (event: GenericEvent) => any;
  /**
   * QQ 小程序 1.16.0
   * 添加群应用的回调
   */
  onAddGroupApp?: (event: GenericEvent) => any;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */
export const Button: React.ComponentType<ButtonProps> = createHostComponent<ButtonProps>('button');

Button.defaultProps = {
  hoverClassName: 'button-hover',
  hoverStartTime: 20,
  hoverStayTime: 70,
};
