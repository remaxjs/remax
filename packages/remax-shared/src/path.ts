export function slash(path: string) {
  return /^\\\\\?\\/.test(path) ? path : path.replace(/\\/g, `/`);
}
