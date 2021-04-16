export default class SourceCache {
  cache: {
    [name: string]: string;
  } = {};

  invalid(name: string, source: string, fn: () => void) {
    if (this.cache[name] === source) {
      return;
    }
    this.cache[name] = source;
    fn();
  }
}
