import * as fs from 'fs';
import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import * as htmlparser2 from 'htmlparser2';
import { get } from 'lodash';
import { cssExtensions } from '../extensions';
import { replaceExtension, getNativeAssetOutputPath } from './utils/paths';
import Builder from './Builder';

export default class NativeAssets {
  builder: Builder;
  entry: string;
  assets: Map<
    string,
    {
      output: string;
      content: Buffer;
      filename: string;
    }
  > = new Map();

  constructor(builder: Builder, entry: string) {
    this.builder = builder;
    this.entry = entry;
  }

  getAll() {
    this.findInTemplate();
    this.findInCSS();

    return this.assets;
  }

  private addAsset(filename: string, content?: Buffer) {
    if (fs.existsSync(filename)) {
      this.assets.set(filename, {
        filename,
        output: getNativeAssetOutputPath(filename, this.builder.options),
        content: content || fs.readFileSync(filename),
      });
    }
  }

  private findInTemplate() {
    const { jsHelper, template } = this.builder.api.getMeta();

    const templateFile = replaceExtension(this.entry, template.extension);

    const walkJsHelper = (filename: string) => {
      if (!fs.existsSync(filename) || this.assets.has(filename)) {
        return;
      }
      const content = fs.readFileSync(filename);
      this.addAsset(filename, content);

      const ast = babelParser.parse(content.toString(), {
        sourceType: 'module',
      });

      const extract = ({ node }: any) => {
        const importPath =
          (get(node, 'callee.name') === 'require' ? get(node, 'arguments[0].value') : '') || get(node, 'source.value');

        if (!importPath) {
          return;
        }
        const jsFile = this.builder.projectPath.resolveAsset(importPath, filename);
        if (jsFile) {
          walkJsHelper(jsFile);
        }
      };

      traverse(ast, {
        CallExpression: extract,
        ImportDeclaration: extract,
      });
    };

    const walkTemplate = (filename: string) => {
      if (!fs.existsSync(filename) || this.assets.has(filename)) {
        return;
      }
      const content = fs.readFileSync(filename);
      this.addAsset(filename, content);

      const parser = new htmlparser2.Parser({});

      (parser as any)._cbs.onopentag = (name: string, attrs: any) => {
        if (jsHelper) {
          const { tag, src } = jsHelper!;
          if (name === tag && attrs[src]) {
            const jsFile = this.builder.projectPath.resolveAsset(attrs[src], filename);
            if (jsFile) {
              walkJsHelper(jsFile);
            }
          }
        }

        if (name === template.tag && attrs[template.src]) {
          const templateFile = this.builder.projectPath.resolveAsset(attrs[template.src], filename);
          if (templateFile) {
            walkTemplate(templateFile);
          }
        } else if (['include', 'import'].includes(name) && attrs.src) {
          let request = attrs.src;
          /**
           * 微信支持不写 ./ 引用当前路径
           * https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html
           */
          if (!/^(\.\/|\/)/.test(request)) {
            request = './' + request;
          }
          const templateFile = this.builder.projectPath.resolveAsset(request, filename);
          if (templateFile) {
            walkTemplate(templateFile);
          }
        } else if (name === 'image' && attrs.src) {
          const image = this.builder.projectPath.resolveAsset(attrs.src, filename);
          if (image) {
            this.addAsset(image);
          }
        }
      };

      parser.reset();
      parser.write(content.toString());
      parser.end();
    };

    walkTemplate(templateFile);
  }

  private findInCSS() {
    const cssFiles = [this.builder.api.getMeta().style, ...cssExtensions].map(ext => replaceExtension(this.entry, ext));
    // https://regexr.com/5fa60
    const URL_PATTERN = /(?<=url\(\s*['"]?)([^"')]+)(?=["']?\s*\))/gm;
    // https://regexr.com/5fa69
    const IMPORT_PATTERN = /(?<=@import\s*(\(.+\))?\s*["'])(.+)(?=["'])/gm;

    const walkCSS = (filename: string) => {
      if (!fs.existsSync(filename)) {
        return;
      }
      const content = fs.readFileSync(filename);
      const contentStr = content.toString();
      const urls = contentStr.match(URL_PATTERN);
      if (urls) {
        urls.forEach((url: string) => {
          if (!(url.startsWith('http://') || url.startsWith('https://'))) {
            const image = this.builder.projectPath.resolveAsset(url, filename);
            if (image) {
              this.addAsset(image);
            }
          }
        });
      }
      const imports = contentStr.match(IMPORT_PATTERN);
      if (imports) {
        imports.forEach((request: string) => {
          const cssFile = this.builder.projectPath.resolveAsset(request, filename);
          if (cssFile) {
            walkCSS(cssFile);
          }
        });
      }
      return true;
    };

    cssFiles.some(walkCSS);
  }
}
