export const wechat = 'wechat';
export const alipay = 'alipay';
export const toutiao = 'toutiao';
export const h5 = 'h5';
export const mini = [wechat, alipay, toutiao];

export type PlatformTarget = 'wechat' | 'alipay' | 'toutiao' | 'h5';

export function isMini(target: string) {
  return !!mini.find(t => t === target);
}
