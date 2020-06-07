const extensions = ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'];

export default extensions;

export const matcher = new RegExp(`(${extensions.join('|')})$`);

export const moduleMatcher = new RegExp(`(${extensions.filter(e => e !== '.json').join('|')})$`);

export const rename = (file: string, ext = '.js') => file.replace(matcher, ext);
