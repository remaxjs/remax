import * as fs from 'fs';
import * as path from 'path';
import type { EntryInfo, AppConfig, MiniPluginConfig } from '@remax/types';
import { slash } from '@remax/shared';
import { replaceExtension } from './utils/paths';
import Builder from './Builder';
import NormalEntry from './entries/NormalEntry';
import NativeEntry from './entries/NativeEntry';
import AppEntry from './entries/AppEntry';
import PageEntry from './entries/PageEntry';
import ComponentEntry from './entries/ComponentEntry';
import MpaEntry from './entries/MpaEntry';

type Entries = Map<string, PageEntry | ComponentEntry | NativeEntry>;

export default class EntryCollection {
  builder: Builder;
  appEntry?: AppEntry | NativeEntry | null = null;
  mainEntry: NormalEntry | null = null;
  nativeComponentEntries: Map<string, NativeEntry> = new Map();
  entries: Entries = new Map();

  constructor(builder: Builder) {
    this.builder = builder;
  }

  init() {
    this.appEntry = this.initAppEntry();
    this.mainEntry = this.initMainEntry();
    this.entries = this.initEntries();
  }

  private initAppEntry() {
    const appFile = this.builder.projectPath.searchJSFile(path.join(this.builder.projectPath.srcDir(), 'app'));
    if (!fs.existsSync(appFile)) {
      return null;
    }
    const sourceCode = fs.readFileSync(appFile).toString();
    return this.isNativeApp(sourceCode)
      ? new NativeEntry(this.builder, 'app', appFile)
      : new AppEntry(this.builder, 'app', appFile);
  }

  private initMainEntry() {
    const { projectConfig, projectPath } = this.builder;
    const { main } = projectConfig as MiniPluginConfig;
    return main
      ? new NormalEntry(this.builder, main, slash(projectPath.searchJSFile(path.join(projectPath.srcDir(), main))))
      : null;
  }

  private initEntries() {
    const { projectConfig, projectPath } = this.builder;
    // 页面
    const pages = projectConfig.pages.reduce(
      (ret: EntryInfo[], page: string) => [
        ...ret,
        {
          name: page,
          filename: projectPath.searchJSFile(path.join(projectPath.srcDir(), page)),
        },
      ],
      []
    );

    if (['miniapp', 'webapp'].includes(this.builder.buildType)) {
      const subPackages = (projectConfig as AppConfig).subPackages ?? (projectConfig as any).subpackages ?? [];

      // 分包页面
      subPackages.forEach((pack: { pages: string[]; root: string }) => {
        pages.push(
          ...pack.pages.reduce(
            (ret: EntryInfo[], page) => [
              ...ret,
              {
                name: slash(path.join(pack.root, page)),
                filename: projectPath.searchJSFile(path.join(projectPath.srcDir(), pack.root, page)),
              },
            ],
            []
          )
        );
      });
    }

    const entries: Entries = new Map();

    pages.forEach(p => {
      if (!p.filename) {
        return;
      }
      let entry;
      if (this.builder.target === 'web' && this.builder.options.web?.mpa) {
        entry = new MpaEntry(this.builder, p.name, p.filename);
      } else {
        entry = this.isNativeEntry(p.filename)
          ? new NativeEntry(this.builder, p.name, p.filename)
          : new PageEntry(this.builder, p.name, p.filename);
      }
      entries.set(p.filename, entry);
    });

    const { publicComponents = {} } = projectConfig as MiniPluginConfig;

    Object.keys(publicComponents).forEach(it => {
      const name = publicComponents[it];
      const filename = projectPath.searchJSFile(projectPath.srcFile(name));
      const entry = this.isNativeEntry(filename)
        ? new NativeEntry(this.builder, name, filename)
        : new ComponentEntry(this.builder, name, filename);
      entries.set(filename, entry);
    });

    return entries;
  }

  private isNativeEntry(filename: string) {
    const templateFile = replaceExtension(filename, this.builder.api.getMeta().template.extension);
    return fs.existsSync(templateFile);
  }

  private isNativeApp(sourceCode: string) {
    return !/^export default /m.test(sourceCode);
  }
}
