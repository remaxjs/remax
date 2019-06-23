import * as path from 'path';
import * as fs from 'fs';
import { OutputBundle, OutputOptions } from 'rollup';
import { getComponents } from './components';
import ejs from 'ejs';

function isPage(file: string) {
  return /^pages\/.+\.js$/.test(file);
}

function isApp(file: string) {
  return /^app.js$/.test(file);
}

async function createTemplate(pageFile: string) {
  const fileName = `${path.dirname(pageFile)}/${path.basename(pageFile, path.extname(pageFile))}.axml`;
  const code = (await ejs.renderFile(path.join(__dirname, '../../templates/page.ejs'))) as string;
  return {
    fileName,
    isAsset: true as true,
    source: code,
  };
}

async function createBaseTemplate() {
  const components = getComponents();
  const code = (await ejs.renderFile(path.join(__dirname, '../../templates/base.ejs'), { components })) as string;
  return {
    fileName: 'base.axml',
    isAsset: true as true,
    source: code,
  };
}

function createManifest() {
  return {
    fileName: 'app.json',
    isAsset: true as true,
    source: fs.readFileSync(path.resolve(process.cwd(), 'src/app.json')),
  };
}

export default function miniProgram() {
  return {
    name: 'template', // this name will show up in warnings and errors
    generateBundle: async (options: OutputOptions, bundle: OutputBundle) => {
      // app.json
      const manifest = createManifest();
      bundle[manifest.fileName] = manifest;

      const files = Object.keys(bundle);
      await Promise.all([
        files.map(async file => {
          if ((bundle[file] as any).isEntry) {
            if (isPage(file)) {
              const template = await createTemplate(file);
              bundle[template.fileName] = template;
            } else if (isApp(file)) {
              const template = await createBaseTemplate();
              bundle[template.fileName] = template;
            }
          }
        }),
      ]);
    },
  };
}
