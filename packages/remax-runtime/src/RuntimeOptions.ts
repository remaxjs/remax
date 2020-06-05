import PluginDriver from './PluginDriver';
interface RuntimeOptions {
  pxToRpx: boolean;
  debug: boolean;
  hostComponents: any;
  pluginDriver: PluginDriver;
  pageEvents: Record<string, string[]>;
  appEvents: string[];
}

let runtimeOptions: RuntimeOptions = {
  pxToRpx: true,
  hostComponents: {},
  debug: false,
  appEvents: [],
  pageEvents: {},
  pluginDriver: new PluginDriver([]),
};

export function apply(options: RuntimeOptions) {
  runtimeOptions = {
    ...runtimeOptions,
    ...options,
  };
}

export function get(key: keyof RuntimeOptions) {
  return runtimeOptions[key];
}
