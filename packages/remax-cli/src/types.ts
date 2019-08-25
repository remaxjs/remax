import { RemaxOptions } from './getConfig';

export interface Context {
  config: RemaxOptions;
  app: any;
  pages: { path: string; [key: string]: any }[];
}
