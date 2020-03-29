/**
 * 根据 pages 的 entry 生成对应的需要的文件
 * 需要解析出 base.wxml 的相对路径
 *
 * index.json
 * index.wxml
 * index.wxs
 */
import path from 'path';
import { ConcatSource } from 'webpack-sources';
import ejsRender from '../ejsRender';

export default async function pageFiles(options: { pages: string[] }) {
  const { pages } = options;
  const pageFiles: { [key: string]: ConcatSource } = {};
  const tempaltePath = path.join(__dirname, '../templates/wechat');
  const pageWxml = path.join(tempaltePath, 'page.ejs');
  const helpperWxs = path.join(tempaltePath, 'helper.ejs');

  // TODO 分包处理
  for (let index = 0; index < pages.length; index++) {
    const page = pages[index];
    pageFiles[`${page}.json`] = new ConcatSource('{"usingComponents": {}}');

    const helpperWxsContent = await ejsRender(helpperWxs, {
      target: 'wecaht',
    });
    pageFiles[`${page}.wxs`] = new ConcatSource(helpperWxsContent);
    const relativeToRoot = path.relative(path.dirname('/' + page), '/');

    const pageWxmlContent = await ejsRender(pageWxml, {
      jsHelper: './index.wxs',
      baseTemplate: relativeToRoot + '/base.wxml',
    });

    pageFiles[`${page}.wxml`] = new ConcatSource(pageWxmlContent);
  }

  return pageFiles;
}
