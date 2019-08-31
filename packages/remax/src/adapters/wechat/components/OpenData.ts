import factory from './factory';

const OpenData = factory<OpenDataProps>('open-data');

export interface OpenDataProps {
  type?: string; //  否 开放数据类型 1.4.0
  openGid?: string; //  否 当 type="groupName" 时生效, 群id 1.4.0
  lang?: string; // en 否 当 type="user*" 时生效，以哪种语言展示 userInfo 1.4.0
  defaultText?: string; //  否 数据为空时的默认文案 2.8.1
  defaultAvatar?: string; //  否 用户头像为空时的默认图片，支持相对路径和网络图片路径 2.8.1
  onError?: (event: any) => void; //  否 群名称或用户信息为空时触发 2.8.1
}

export default OpenData;
