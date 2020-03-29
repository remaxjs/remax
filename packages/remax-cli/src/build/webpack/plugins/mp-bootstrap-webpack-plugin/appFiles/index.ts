import { ConcatSource } from 'webpack-sources';
import path from 'path';
import fse from 'fs-extra';
import deepmerge from 'deepmerge';
import ejsRender from '../ejsRender';

const defaultConfig = {
  json: {
    pages: [] as string[],
    window: {
      navigationBarTitleText: '微拍堂',
      navigationBarBackgroundColor: '#282c34',
    },
  },
  project: {
    description: '项目配置文件',
    setting: {
      urlCheck: true,
      es6: false,
      postcss: true,
      minified: true,
      newFeature: true,
      coverView: true,
      autoAudits: false,
      showShadowRootInWxmlPanel: true,
      scopeDataCheck: false,
      checkInvalidKey: true,
      checkSiteMap: true,
      uploadWithSourceMap: true,
      babelSetting: {
        ignore: [],
        disablePlugins: [],
        outputPath: '',
      },
    },
    compileType: 'miniprogram',
    libVersion: '2.10.3',
    appid: '',
    projectname: '',
  },
};

export interface TempalteOptions {
  cwd?: string;
  homepage?: string;
  target?: string;
  pages?: string[];
  sourceDir?: string;
}

export default async function appFiles(options: TempalteOptions) {
  // TODO 判断平台生成对应的模版
  const templatePath = path.join(__dirname, '../templates/wechat');
  const baseWxml = path.join(templatePath, 'base.ejs');
  const depth = require('../templates/wechat/depth');
  const hostComponents = require('../templates/wechat/hostComponents');

  const { cwd = process.cwd() } = options || {};

  // TODO 执行目录下必须含有 usingComponents.json 文件
  const { usingComponents } = fse.readJsonSync(path.join(cwd, 'usingComponents.json'));

  const components = usingComponents.map((name: string) => {
    return {
      id: name,
      props: hostComponents[name].props,
    };
  });

  const baesData = {
    // TODO  真正的收集页面中使用到的组件
    components,
    viewComponent: {
      props: hostComponents.view.props,
    },
    depth,
  };
  const baseWxmlContent = await ejsRender(baseWxml, baesData);

  // 调整首页顺序
  if (options.homepage) {
    options.pages = options.pages!.sort((pageName: string) => {
      if (pageName.indexOf(options.homepage!) !== -1) {
        return -1;
      }
      return 0;
    });
  }

  let jsonContent = defaultConfig.json;
  let projectCentent = defaultConfig.project;

  projectCentent.projectname = path.basename(options.cwd!);

  jsonContent.pages = options.pages as string[];

  const userProjectConfig = path.join(options.cwd!, options.sourceDir!, 'project.config.js');

  const userAppConfig = path.join(options.cwd!, options.sourceDir!, 'app.config.js');

  if (fse.existsSync(userProjectConfig)) {
    const userProjectConfigData = require(userProjectConfig);
    projectCentent = deepmerge(projectCentent, userProjectConfigData[options.target!] || {});
  }
  if (fse.existsSync(userAppConfig)) {
    const userAppConfigData = require(userAppConfig);
    jsonContent = deepmerge(jsonContent, userAppConfigData[options.target!] || {});
  }

  return {
    'app.json': new ConcatSource(JSON.stringify(jsonContent, null, 2)),
    'base.wxml': new ConcatSource(baseWxmlContent),
    'project.config.json': new ConcatSource(JSON.stringify(projectCentent, null, 2)),
  };
}
