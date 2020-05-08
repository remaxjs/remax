let cacheStorage: any = {};

export function invalid(key: string, source: string) {
  const currentSource = cacheStorage[key];

  if (source !== currentSource) {
    cacheStorage[key] = source;

    return true;
  }

  return false;
}

export function reset() {
  cacheStorage = {};
}
