const extensions = ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'];

export default extensions;

export const rename = (file: string, ext = '.js') =>
  file.replace(new RegExp(`(${extensions.join('|')})$`), ext);
