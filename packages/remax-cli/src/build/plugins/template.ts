import * as path from 'path';
import * as fs from 'fs';
import { OutputChunk, Plugin } from 'rollup';
import { getComponents } from './components';
import ejs from 'ejs';
import { RemaxOptions } from 'src/getConfig';
import getEntries from '../../getEntries';

function isPage(file: string | null, pages: string[]) {
  return file && pages.indexOf(file) > -1;
}

async function createTemplate(pageFile: string) {
  const fileName = `${path.dirname(pageFile)}/${path.basename(pageFile, path.extname(pageFile))}.axml`;
  const code = (await ejs.renderFile(path.join(__dirname, '../../../templates/page.ejs'), {
    baseTemplate: path.relative(path.dirname(pageFile), 'base.axml'),
  })) as string;

  return {
    fileName,
    isAsset: true as true,
    source: code,
  };
}

async function createBaseTemplate() {
  const components = getComponents();
  const code = (await ejs.renderFile(path.join(__dirname, '../../../templates/base.ejs'), { components })) as string;
  return {
    fileName: 'base.axml',
    isAsset: true as true,
    source: code,
  };
}

function createManifest(options: RemaxOptions) {
  return {
    fileName: 'app.json',
    isAsset: true as true,
    source: fs.readFileSync(path.resolve(options.cwd, 'src/app.json')),
  };
}

function createPageManifest(options: RemaxOptions, file: string) {
  const manifestFile = file.replace(/\.(js|jsx|ts|tsx)$/, '.json');
  const filePath = path.resolve(options.cwd, path.join('src', manifestFile));
  if (fs.existsSync(filePath)) {
    return {
      fileName: manifestFile,
      isAsset: true as true,
      source: fs.readFileSync(filePath),
    };
  }
}

function isEntry(chunk: any): chunk is OutputChunk {
  return chunk.isEntry;
}

export default function template(options: RemaxOptions): Plugin {
  return {
    name: 'template',
    generateBundle: async (_, bundle) => {
      const pages = getEntries(options).pages;
      // app.json
      const manifest = createManifest(options);
      bundle[manifest.fileName] = manifest;

      const template = await createBaseTemplate();
      bundle[template.fileName] = template;

      const files = Object.keys(bundle);
      await Promise.all([
        files.map(async file => {
          const chunk = bundle[file];
          if (isEntry(chunk)) {
            const filePath = Object.keys(chunk.modules)[0];
            if (isPage(filePath, pages)) {
              const template = await createTemplate(file);
              bundle[template.fileName] = template;
              const config = await createPageManifest(options, file);
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
