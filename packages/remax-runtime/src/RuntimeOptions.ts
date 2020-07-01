import merge from 'lodash.merge';
import { Platform } from '@remax/types';
import PluginDriver from './PluginDriver';

interface RuntimeOptions {
  platform: Platform | '';
  pxToRpx: boolean;
  debug: boolean;
  hostComponents: any;
  pluginDriver: PluginDriver;
  pageEvents: Record<string, string[]>;
  appEvents: string[];
  history: any;
}

const defaultRuntimeOptions: RuntimeOptions = {
  platform: '',
  pxToRpx: true,
  hostComponents: {},
  debug: false,
  appEvents: [],
  pageEvents: {},
  pluginDriver: new PluginDriver([]),
  history: {},
};

let runtimeOptions = defaultRuntimeOptions;

export function apply(options: Partial<RuntimeOptions>) {
  runtimeOptions = merge(runtimeOptions, options);
}

export function get(key: keyof RuntimeOptions) {
  return runtimeOptions[key];
}

export function reset() {
  runtimeOptions = defaultRuntimeOptions;
}
