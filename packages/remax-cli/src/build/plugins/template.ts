import * as path from 'path';
import * as fs from 'fs';
import { OutputChunk, Plugin } from 'rollup';
import ejs from 'ejs';
import { getComponents } from './components';
import { RemaxOptions } from '../../getConfig';
import readManifest from '../../readManifest';
import getEntries from '../../getEntries';
import { Adapter } from '../adapters';
import { Context } from '../../types';

function isPage(file: string | null, pages: any[]) {}

async function createTemplate(pageFile: string, adapter: Adapter) {
  const fileName = `${path.dirname(pageFile)}/${path.basename(
    pageFile,
    path.extname(pageFile)
  )}${adapter.extensions.template}`;
  const code = (await ejs.renderFile(adapter.templates.page, {
    baseTemplate: path.relative(
      path.dirname(pageFile),
      `base${adapter.extensions.template}`
    ),
  })) as string;

  return {
    fileName,
    isAsset: true as true,
    source: code,
  };
}

async function createBaseTemplate(adapter: Adapter) {
  const components = getComponents();
  const code = (await ejs.renderFile(adapter.templates.base, {
    components,
  })) as string;
  return {
    fileName: `base${adapter.extensions.template}`,
    isAsset: true as true,
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
    : readManifest(path.resolve(options.cwd, 'src/app.config.js'), target);
  return {
    fileName: 'app.json',
    isAsset: true as true,
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
    path.join('src', configFile)
  );
  if (fs.existsSync(configFilePath)) {
    return {
      fileName: manifestFile,
      isAsset: true as true,
      source: JSON.stringify(readManifest(configFilePath, target), null, 2),
    };
  }
  if (context) {
    const pageConfig = context.pages.find((p: any) => p.path === page.path);
    if (pageConfig) {
      const { path, ...config } = pageConfig;
      return {
        fileName: manifestFile,
        isAsset: true as true,
        source: JSON.stringify(config, null, 2),
      };
    }
  }
}

function isEntry(chunk: any): chunk is OutputChunk {
  return chunk.isEntry;
}

export default function template(
  options: RemaxOptions,
  adapter: Adapter,
  context?: Context
): Plugin {
  return {
    name: 'template',
    generateBundle: async (_, bundle) => {
      // app.json
      const manifest = createAppManifest(options, adapter.name, context);
      bundle[manifest.fileName] = manifest;

      const template = await createBaseTemplate(adapter);
      bundle[template.fileName] = template;

      const entries = getEntries(options, adapter, context);
      const { pages } = entries;

      const files = Object.keys(bundle);
      await Promise.all([
        files.map(async file => {
          const chunk = bundle[file];
          if (isEntry(chunk)) {
            const filePath = Object.keys(chunk.modules)[0];
            const page = pages.find(p => p.file === filePath);
            if (page) {
              const template = await createTemplate(file, adapter);
              bundle[template.fileName] = template;
              const config = await createPageManifest(
                options,
                file,
                adapter.name,
                page,
                context
              );

              if (config) {
                bundle[config.fileName] = config;
              }
            }
          }
        }),
      ]);
    },
  };
}
