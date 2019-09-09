import { existsSync } from 'fs';

const jsonPaths: string[] = [];

export function getjsonPaths() {
  return jsonPaths;
}

export default (id: string) => {
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    return null;
  }

  if (!jsonPaths.includes(filePath)) {
    jsonPaths.push(filePath);
  }
};
