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

function merge(...options: Array<Partial<RuntimeOptions>>) {
  return options.reduce<RuntimeOptions>((acc, option) => {
    acc.appEvents = option.appEvents || acc.appEvents;
    acc.debug = option.debug ?? acc.debug;
    acc.history = option.history || acc.history;
    acc.hostComponents = option.hostComponents || acc.hostComponents;
    acc.pluginDriver = option.pluginDriver || acc.pluginDriver;
    acc.pageEvents = option.pageEvents || acc.pageEvents;
    acc.platform = option.platform || acc.platform;
    acc.pxToRpx = option.pxToRpx ?? acc.pxToRpx;

    return acc;
  }, runtimeOptions);
}

export function apply(options: Partial<RuntimeOptions>) {
  runtimeOptions = merge(options);
}

export function get(key: keyof RuntimeOptions) {
  return runtimeOptions[key];
}

export function reset() {
  runtimeOptions = defaultRuntimeOptions;
}
