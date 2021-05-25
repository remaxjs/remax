import * as React from 'react';
import { BaseProps, GenericEvent } from '../../types/component';
import { createHostComponent } from '@remax/runtime';

export interface VoipRoomProps extends BaseProps {
  /** 进入房间用户的 openid 2.11.0 */
  openId: string;
  /** 对话窗口类型，自身传入 camera，其它用户传入 video	 2.11.0 */
  mode?: 'camera' | 'video';
  /** 仅在 mode 为 camera 时有效，前置或后置，值为front, back	 2.11.0 */
  devicePosition?: 'front' | 'back';
  /** 创建对话窗口失败时触发	 2.11.0 */
  onError?: (event: GenericEvent) => any;
}

/**
 * 多人音视频对话。需用户授权 scope.camera、scope.record。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */
export const VoipRoom: React.ComponentType<VoipRoomProps> = createHostComponent<VoipRoomProps>('voip-room');
VoipRoom.defaultProps = {
  mode: 'camera',
  devicePosition: 'front',
};
