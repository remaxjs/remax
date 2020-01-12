import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface OpenDataProps extends BaseProps {
  /** 开放数据类型 1.4.0 */
  type?:
    | 'groupName'
    | 'userNickName'
    | 'userAvatarUrl'
    | 'userGender'
    | 'userCity'
    | 'userProvince'
    | 'userCountry'
    | 'userLanguage';
  /** 当 type="groupName" 时生效, 群id 1.4.0 */
  openGid?: string;
  /** (default: en) 当 type="user*" 时生效，以哪种语言展示 userInfo 1.4.0 */
  lang?: 'en' | 'zh_CN' | 'zh_TW';
  /** 数据为空时的默认文案 2.8.1 */
  defaultText?: string;
  /** 用户头像为空时的默认图片，支持相对路径和网络图片路径 2.8.1 */
  defaultAvatar?: string;
  /** 群名称或用户信息为空时触发 2.8.1 */
  onError?: (event: any) => any;
}

export default createHostComponent<OpenDataProps>('open-data');
