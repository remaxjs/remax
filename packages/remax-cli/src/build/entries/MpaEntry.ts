import * as path from 'path';
import VirtualEntry from './VirtualEntry';

export default class MpaEntry extends VirtualEntry {
  outputSource() {
    const config = this.builder.api.onPageConfig({
      page: this.name,
      config: this.getManifest(),
    });

    return `
      import '@remax/web/assets/normalize.css';
      import '@remax/web/assets/app.css';
      import App from '@/app';
      import Page from './${path.basename(this.filename)}';
      import { bootstrapMpa } from '@remax/web';

      bootstrapMpa({
        appComponent: App,
        pageComponent: Page,
        page: ${JSON.stringify(
          {
            route: this.name,
            config,
          },
          null,
          2
        )},
        appConfig: ${JSON.stringify(this.builder.projectConfig, null, 2)},
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
