export const wechat = 'wechat';
export const ali = 'ali';
export const toutiao = 'toutiao';
export const mini = [wechat, ali, toutiao];

export enum Platform {
  'web' = 'web',
  'wechat' = 'wechat',
  'ali' = 'ali',
  'toutiao' = 'toutiao',
}

export function isMini(target: string) {
  return !!mini.find(t => t === target);
}
