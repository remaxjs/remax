import { PlatformList } from '../../types';

export default function getExtensions(target: PlatformList): string[] {
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];
  return extensions.reduce((collect: string[], ext) => {
    collect.push(`.${target}${ext}`);
    collect.push(ext);
    return collect;
  }, []);
}
