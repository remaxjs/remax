import * as path from 'path';
import { parse } from 'acorn';
import { Plugin, OutputChunk } from 'rollup';
import { sortBy } from 'lodash';
import { getComponents } from './components';
import { RemaxOptions, Meta } from 'remax-types';
import ejs from 'ejs';
import API from '../../API';
import { ensureDepth } from '../../defaultOptions/UNSAFE_wechatTemplateDepth';
import readManifest from '../../readManifest';
import getEntries from '../../getEntries';
import { Context } from '../../types';
import winPath from '../../winPath';
import { getNativeComponents } from './nativeComponents/babelPlugin';
import { rename as renameExtension } from '../../extensions';

function pageUID(pagePath: string) {
  return winPath(pagePath).replace('/', '_');
}

async function createTemplate(
  pageFile: string,
  options: RemaxOptions,
  meta: Meta
) {
  const fileName = `${path.dirname(pageFile)}/${path.basename(
    pageFile,
    path.extname(pageFile)
  )}${meta.template.extension}`;

  const renderOptions: { [props: string]: any } = {
    baseTemplate: winPath(
      path.relative(path.dirname(pageFile), `base${meta.template.extension}`)
    ),
  };

  if (meta.jsHelper) {
    renderOptions.jsHelper = `./${pageUID(pageFile)}_helper${
      meta.jsHelper.extension
    }`;
  }

  const components = sortBy(
    getComponents().concat(Object.values(getNativeComponents())),
    'id'
  );

  const hostComponents = API.getHostComponents();

  let code: string = await ejs.renderFile(
    meta.ejs.page,
    {
      ...renderOptions,
      components,
      viewComponent: {
        props: [...new Set(hostComponents.get('view')!.props)].sort(),
      },
    },
    {
      rmWhitespace: options.compressTemplate,
    }
  );

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    code = code.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  return {
    type: 'asset' as const,
    fileName,
    source: code,
  };
}

async function createHelperFile(pageFile: string, meta: Meta) {
  if (!meta.jsHelper || !meta.ejs.jsHelper) {
    return null;
  }

  const code: string = await ejs.renderFile(meta.ejs.jsHelper, {
    target: API.adapter.name,
  });

  return {
    type: 'asset' as const,
    fileName: winPath(
      path.join(
        path.dirname(pageFile),
        `${pageUID(pageFile)}_helper${meta.jsHelper.extension}`
      )
    ),
    source: code,
  };
}

async function createBaseTemplate(options: RemaxOptions, meta: Meta) {
  if (!meta.ejs.base) {
    return null;
  }

  const hostComponents = API.getHostComponents();

  const components = sortBy(
    getComponents().concat(Object.values(getNativeComponents())),
    'id'
  );

  let code: string = await ejs.renderFile(
    meta.ejs.base,
    {
      components,
      depth: ensureDepth(options.UNSAFE_wechatTemplateDepth),
      viewComponent: {
        props: [...new Set(hostComponents.get('view')!.props)].sort(),
      },
    },
    {
      rmWhitespace: options.compressTemplate,
    }
  );

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    code = code.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  return {
    type: 'asset' as const,
    fileName: `base${meta.template.extension}`,
    source: code,
  };
}

function createAppManifest(options: RemaxOptions, context?: Context) {
  const config = context
    ? { ...context.app, pages: context.pages.map(p => p.path) }
    : readManifest(
        path.resolve(options.cwd, `${options.rootDir}/app.config`),
        API.adapter.name
      );
  return {
    type: 'asset' as const,
    fileName: 'app.json',
    source: JSON.stringify(config, null, 2),
  };
}

function createPageUsingComponents(
  page: any,
  configFilePath: string,
  options: RemaxOptions
) {
  const nativeComponents = getNativeComponents();
  const usingComponents: { [key: string]: string } = {};
  for (const { id, sourcePath, pages } of nativeComponents) {
    if (!pages.has(renameExtension(page))) {
      continue;
    }

    if (sourcePath.startsWith('plugin://')) {
      usingComponents[id] = sourcePath;
      continue;
    }

    usingComponents[id] = winPath(
      path
        .relative(
          path.dirname(configFilePath),
          sourcePath
            .replace(/node_modules/, `${options.rootDir}/npm`)
            .replace(/node_modules/g, 'npm')
        )
        .replace(/\.js$/, '')
        .replace(/@/g, '_')
    );
  }

  return usingComponents;
}

function createPageManifest(
  options: RemaxOptions,
  file: string,
  page: any,
  context?: Context
) {
  const configFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.config');
  const manifestFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.json');
  const configFilePath = path.resolve(
    options.cwd,
    path.join(options.rootDir, configFile)
  );
  const usingComponents = createPageUsingComponents(
    page,
    configFilePath,
    options
  );
  const config = readManifest(configFilePath, API.adapter.name);
  config.usingComponents = {
    ...(config.usingComponents || {}),
    ...usingComponents,
  };

  if (context) {
    const pageConfig = context.pages.find((p: any) => p.path === page.path);
    if (pageConfig) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { path, ...config } = pageConfig;
      config.usingComponents = {
        ...(config.usingComponents || {}),
        ...usingComponents,
      };
      return {
        type: 'asset' as const,
        fileName: manifestFile,
        source: JSON.stringify(config, null, 2),
      };
    }
  }

  return {
    type: 'asset' as const,
    fileName: manifestFile,
    source: JSON.stringify(config, null, 2),
  };
}

function isRemaxEntry(chunk: any): chunk is OutputChunk {
  if (!chunk.isEntry) {
    return false;
  }

  const ast: any = parse(chunk.code, {
    sourceType: 'module',
  });

  return ast.body.every((node: any) => {
    // 检查是不是原生写法
    if (
      node.type === 'ExpressionStatement' &&
      node.expression.type === 'CallExpression' &&
      node.expression.callee.type === 'Identifier' &&
      node.expression.callee.name === 'Page' &&
      node.expression.arguments.length > 0 &&
      node.expression.arguments[0].type === 'ObjectExpression'
    ) {
      return false;
    }

    return true;
  });
}

export default function template(
  options: RemaxOptions,
  context?: Context
): Plugin {
  return {
    name: 'template',
    async generateBundle(_, bundle, isWrite) {
      const meta = API.getMeta();
      const templateAssets = [];
      // app.json
      const manifest = createAppManifest(options, context);

      if (
        this.cache.get(manifest.fileName)?.toString() !==
        manifest.source.toString()
      ) {
        this.cache.set(manifest.fileName, manifest.source);
        templateAssets.push(manifest);
      }

      const template = await createBaseTemplate(options, meta);

      if (template) {
        templateAssets.push(template);
      }

      const entries = getEntries(options, context);
      const { pages } = entries;

      const files = Object.keys(bundle);
      await Promise.all(
        files.map(async file => {
          const chunk = bundle[file];
          if (isRemaxEntry(chunk)) {
            const modules = Object.keys(chunk.modules);
            const filePath = modules[modules.length - 1];
            const page = pages.find(p => p === filePath);
            if (page) {
              const template = await createTemplate(file, options, meta);
              templateAssets.push(template);

              const config = createPageManifest(options, file, page, context);

              const helperFile = await createHelperFile(file, meta);
              if (helperFile) {
                templateAssets.push(helperFile);
              }

              if (config) {
                if (
                  this.cache.get(file)?.toString() === config.source.toString()
                ) {
                  return;
                }
                this.cache.set(file, config.source);

                templateAssets.push(config);
              }
            }
          }
        })
      );

      templateAssets.forEach(file => {
        this.emitFile({
          type: 'asset',
          ...file,
        });
      });
    },
  };
}
