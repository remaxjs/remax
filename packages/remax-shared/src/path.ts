export function slash(path: string) {
  if (!path) {
    return path;
  }
  return /^\\\\\?\\/.test(path) ? path : path.replace(/\\/g, `/`);
}
