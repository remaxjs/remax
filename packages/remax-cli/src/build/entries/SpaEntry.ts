import VirtualEntry from './VirtualEntry';

export default class SpaEntry extends VirtualEntry {
  outputSource() {
    return `
      import '@remax/web/assets/normalize.css';
      import '@remax/web/assets/app.css';
      import App from '@/app';
      import { bootstrap } from '@remax/web';

      bootstrap({
        appComponent: App,
        appConfig: ${JSON.stringify(this.builder.projectConfig, null, 2)},
        pages: ${JSON.stringify(
          Array.from(this.builder.entryCollection.entries.values()).map(entry => {
            const config = this.builder.api.onPageConfig({
              page: entry.name,
              config: entry.getManifest(),
            });
            return {
              route: entry.name,
              config,
            };
          }),
          null,
          2
        )},
        pageComponents: [
          ${Array.from(this.builder.entryCollection.entries.values())
            .map(
              entry => `function() {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "${entry.name}" */
    '${entry.filename}'
  )
}`
            )
            .join(',')}
        ],
        plugins: [
          ${this.builder.api
            .getRuntimePluginFiles()
            .map(file => `require('${file}')`)
            .join(',')}
        ]
      });
    `;
  }
}
