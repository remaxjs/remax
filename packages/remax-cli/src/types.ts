import { RemaxOptions } from 'remax-types';

export interface Context {
  config: RemaxOptions;
  app: any;
  pages: Array<{ path: string; [key: string]: any }>;
}

export interface Entry {
  [entryName: string]: string;
}

export interface CompileOptions {
  cwd?: string;
  sourceDir?: string;
  mode?: 'development' | 'production';
  watch?: boolean;
  target?: PlatformList;
  entry: Entry;
  homepage?: string;
}

export enum PlatformGlobal {
  wechat = 'wx',
  toutiao = 'tt',
}

export type PlatformList = 'wechat' | 'toutiao';
