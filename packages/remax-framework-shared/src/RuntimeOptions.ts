import type { HostComponent, Platform } from '@remax/types';
import PluginDriver from './PluginDriver';

interface RuntimeOptions {
  platform?: Platform | '';
  pxToRpx: boolean;
  debug: boolean;
  hostComponents: Record<string, HostComponent>;
  pluginDriver: PluginDriver;
  pageEvents: Record<string, string[]>;
  appEvents: string[];
  history: any;
  mpa: boolean;
}

const defaultRuntimeOptions: RuntimeOptions = {
  pxToRpx: true,
  hostComponents: {},
  debug: false,
  appEvents: [],
  pageEvents: {},
  pluginDriver: new PluginDriver([]),
  history: {},
  mpa: false,
};

let runtimeOptions = defaultRuntimeOptions;

function merge(...options: Array<Partial<RuntimeOptions>>) {
  return options.reduce<RuntimeOptions>((acc, option) => {
    acc.appEvents = option.appEvents ?? acc.appEvents;
    acc.debug = option.debug ?? acc.debug;
    acc.history = option.history ?? acc.history;

    Object.keys(option.hostComponents ?? {}).forEach(k => {
      const inputHostComponent = option.hostComponents?.[k];
      acc.hostComponents[k] = acc.hostComponents[k] ?? {};
      acc.hostComponents[k].additional = inputHostComponent?.additional ?? acc.hostComponents[k].additional;
      acc.hostComponents[k].alias = Object.assign(acc.hostComponents[k].alias ?? {}, inputHostComponent?.alias ?? {});
      acc.hostComponents[k].props = [
        ...new Set([...(acc.hostComponents[k].props ?? []), ...(inputHostComponent?.props ?? [])]),
      ];
    });

    acc.pluginDriver = option.pluginDriver ?? acc.pluginDriver;
    acc.pageEvents = option.pageEvents ?? acc.pageEvents;
    acc.platform = option.platform ?? acc.platform;
    acc.pxToRpx = option.pxToRpx ?? acc.pxToRpx;
    acc.mpa = option.mpa ?? acc.mpa;

    return acc;
  }, runtimeOptions);
}

export function apply(options: Partial<RuntimeOptions>) {
  runtimeOptions = merge(options);
}

export function get<K extends keyof RuntimeOptions>(key: K) {
  return runtimeOptions[key];
}

export function reset() {
  runtimeOptions = defaultRuntimeOptions;
}
