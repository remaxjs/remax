import webpack from 'webpack';
import type { Options, Platform, AppConfig, BuildType, MiniPluginConfig } from '@remax/types';
import API from '../API';
import EntryCollection from './EntryCollection';
import ProjectPath from './ProjectPath';
import readManifest from '../readManifest';

export default abstract class Builder {
  api: API;
  options: Options;
  target: Platform;
  projectPath: ProjectPath;
  projectConfig: AppConfig | MiniPluginConfig;
  entryCollection: EntryCollection;
  webpackCompiler: webpack.Compiler;
  buildType: BuildType;
  webpackConfig: any;

  constructor(api: API, options: Options, buildType: BuildType) {
    this.api = api;
    this.options = options;
    this.target = options.target!;
    this.buildType = buildType;

    if (this.target !== 'web') {
      api.registerAdapterPlugins(this.target);
    }

    this.projectPath = new ProjectPath(this);
    this.projectConfig = this.fetchProjectConfig();
    this.entryCollection = new EntryCollection(this);
    this.entryCollection.init();
    this.webpackConfig = this.createWebpackConfig();
    this.webpackCompiler = this.createWebpackCompiler();
  }

  abstract run(): webpack.Compiler;
  abstract build(): void;
  abstract watch(): void;
  abstract createWebpackConfig(): webpack.Configuration;

  fetchProjectConfig() {
    const configFile =
      this.buildType === 'miniplugin' ? this.projectPath.pluginConfigFile() : this.projectPath.appConfigFile();
    const config = readManifest(configFile, this.target, false) as AppConfig;
    const finalConfig = ['miniapp', 'webapp'].includes(this.buildType) ? this.api.onAppConfig(config) : config;
    if (this.buildType === 'miniapp') {
      if (!finalConfig.pages || finalConfig.pages.length === 0) {
        throw new Error('app.config.js|ts 并未配置页面参数');
      }
    }
    this.projectConfig = finalConfig;
    return this.projectConfig;
  }

  createWebpackCompiler() {
    return webpack(this.webpackConfig);
  }
}
