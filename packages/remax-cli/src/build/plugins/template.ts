import * as path from 'path';
import * as fs from 'fs';
import { OutputChunk, Plugin } from 'rollup';
import { getComponents } from './components';
import ejs from 'ejs';
import { RemaxOptions } from '../../getConfig';
import readManifest from '../../readManifest';
import getEntries from '../../getEntries';
import { Adapter } from '../adapters';

function isPage(file: string | null, pages: string[]) {
  return file && pages.indexOf(file) > -1;
}

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

function createAppManifest(options: RemaxOptions, target: string) {
  const manifestConfigPath = path.resolve(options.cwd, 'src/app.json');
  const manifestFilePath = path.resolve(options.cwd, 'src/app.config.js');

  if (fs.existsSync(manifestConfigPath)) {
    return {
      fileName: 'app.json',
      isAsset: true as true,
      source: fs.readFileSync(manifestConfigPath, 'utf-8'),
    };
  }

  return {
    fileName: 'app.json',
    isAsset: true as true,
    source: JSON.stringify(readManifest(manifestFilePath, target), null, 2),
  };
}

function createPageManifest(
  options: RemaxOptions,
  file: string,
  target: string
) {
  const configFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.config.js');
  const manifestFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.json');
  const configFilePath = path.resolve(
    options.cwd,
    path.join('src', configFile)
  );
  const manifestFilePath = path.resolve(
    options.cwd,
    path.join('src', manifestFile)
  );

  if (fs.existsSync(manifestFilePath)) {
    return {
      fileName: manifestFile,
      isAsset: true as true,
      source: fs.readFileSync(manifestFilePath, 'utf-8'),
    };
  }

  if (fs.existsSync(configFilePath)) {
    return {
      fileName: manifestFile,
      isAsset: true as true,
      source: JSON.stringify(readManifest(configFilePath, target), null, 2),
    };
  }
}

function isEntry(chunk: any): chunk is OutputChunk {
  return chunk.isEntry;
}

export default function template(
  options: RemaxOptions,
  adapter: Adapter
): Plugin {
  return {
    name: 'template',
    generateBundle: async (_, bundle) => {
      // app.json
      const manifest = createAppManifest(options, adapter.name);
      if (manifest) {
        bundle[manifest.fileName] = manifest;
      }

      const template = await createBaseTemplate(adapter);
      bundle[template.fileName] = template;

      const entries = getEntries(options, adapter);
      const { pages } = entries;

      const files = Object.keys(bundle);
      await Promise.all([
        files.map(async file => {
          const chunk = bundle[file];
          if (isEntry(chunk)) {
            const filePath = Object.keys(chunk.modules)[0];
            if (isPage(filePath, pages)) {
              const template = await createTemplate(file, adapter);
              bundle[template.fileName] = template;
              const config = await createPageManifest(
                options,
                file,
                adapter.name
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
