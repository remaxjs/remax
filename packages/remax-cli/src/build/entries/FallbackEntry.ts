import VirtualEntry from './VirtualEntry';

export default class FallbackEntry extends VirtualEntry {
  outputSource() {
    return `
      import { renderLanding } from '@remax/web';

      renderLanding(${JSON.stringify(
        Array.from(this.builder.entryCollection.entries.values()).map(entry => ({
          route: entry.name,
        })),
        null,
        2
      )});
    `;
  }
}
