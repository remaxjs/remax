import * as path from 'path';
import * as fs from 'fs';
import { parse } from 'acorn';
import { Plugin, OutputChunk } from 'rollup';
import { getComponents } from './components';
import ejs from 'ejs';
import { RemaxOptions } from '../../getConfig';
import readManifest from '../../readManifest';
import getEntries from '../../getEntries';
import { Adapter } from '../adapters';
import { Context } from '../../types';
import winPath from '../../winPath';

async function createTemplate(pageFile: string, adapter: Adapter) {
  const fileName = `${path.dirname(pageFile)}/${path.basename(
    pageFile,
    path.extname(pageFile)
  )}${adapter.extensions.template}`;

  const options: { [props: string]: any } = {
    baseTemplate: winPath(
      path.relative(
        path.dirname(pageFile),
        `base${adapter.extensions.template}`
      )
    ),
  };

  if (adapter.extensions.jsHelper) {
    options.jsHelper = winPath(
      path.relative(
        path.dirname(pageFile),
        `helper${adapter.extensions.jsHelper}`
      )
    );
  }

  const code: string = await ejs.renderFile(adapter.templates.page, options);

  return {
    fileName,
    source: code,
  };
}

async function createHelperFile(adapter: Adapter) {
  const code: string = await ejs.renderFile(adapter.templates.jsHelper, {
    target: adapter.name,
  });

  return {
    fileName: `helper${adapter.extensions.jsHelper}`,
    source: code,
  };
}

async function createBaseTemplate(adapter: Adapter, options: RemaxOptions) {
  const components = getComponents(adapter);
  let code: string = await ejs.renderFile(
    adapter.templates.base,
    {
      components,
      depth: options.UNSAFE_wechatTemplateDepth,
    },
    {
      // uglify
      rmWhitespace: process.env.NODE_ENV === 'production',
    }
  );

  // uglify
  if (process.env.NODE_ENV === 'production') {
    code = code.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  return {
    fileName: `base${adapter.extensions.template}`,
    source: code,
  };
}

function createAppManifest(
  options: RemaxOptions,
  target: string,
  context?: Context
) {
  const config = context
    ? { ...context.app, pages: context.pages.map(p => p.path) }
    : readManifest(
        path.resolve(options.cwd, `${options.rootDir}/app.config.js`),
        target
      );
  return {
    fileName: 'app.json',
    source: JSON.stringify(config, null, 2),
  };
}

function createPageManifest(
  options: RemaxOptions,
  file: string,
  target: string,
  page: any,
  context?: Context
) {
  const configFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.config.js');
  const manifestFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.json');
  const configFilePath = path.resolve(
    options.cwd,
    path.join(options.rootDir, configFile)
  );
  if (fs.existsSync(configFilePath)) {
    return {
      fileName: manifestFile,
      source: JSON.stringify(readManifest(configFilePath, target), null, 2),
    };
  }
  if (context) {
    const pageConfig = context.pages.find((p: any) => p.path === page.path);
    if (pageConfig) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { path, ...config } = pageConfig;
      return {
        fileName: manifestFile,
        source: JSON.stringify(config, null, 2),
      };
    }
  }
}

function isRemaxEntry(chunk: any): chunk is OutputChunk {
  if (!chunk.isEntry) {
    return false;
  }

  const ast: any = parse(chunk.code, {
    ecmaVersion: 6,
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
  adapter: Adapter,
  context?: Context
): Plugin {
  return {
    name: 'template',
    async generateBundle(_, bundle) {
      const templateAssets = [];
      // app.json
      const manifest = createAppManifest(options, adapter.name, context);
      const template = await createBaseTemplate(adapter, options);
      templateAssets.push(template, manifest);

      if (adapter.templates.jsHelper) {
        const helperFile = await createHelperFile(adapter);
        templateAssets.push(helperFile);
      }

      const entries = getEntries(options, adapter, context);
      const { pages } = entries;

      const files = Object.keys(bundle);
      await Promise.all(
        files.map(async file => {
          const chunk = bundle[file];
          if (isRemaxEntry(chunk)) {
            const filePath = Object.keys(chunk.modules)[0];
            const page = pages.find(p => p.file === filePath);
            if (page) {
              const template = await createTemplate(file, adapter);
              templateAssets.push(template);
              const config = await createPageManifest(
                options,
                file,
                adapter.name,
                page,
                context
              );

              if (config) {
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
