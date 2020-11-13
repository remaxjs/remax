import * as path from 'path';
import VirtualEntry from './VirtualEntry';

export default class PageEntry extends VirtualEntry {
  outputSource() {
    return `
      import { createPageConfig } from '@remax/runtime';
      import Entry from './${path.basename(this.filename)}';

      Page(createPageConfig(Entry, '${this.name}'));
    `;
  }
}
