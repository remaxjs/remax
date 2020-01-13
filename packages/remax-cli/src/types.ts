import { RemaxOptions } from 'remax-types';

export interface Context {
  config: RemaxOptions;
  app: any;
  pages: Array<{ path: string; [key: string]: any }>;
}
export interface Env {
  [key: string]: string | Function | undefined;
}
