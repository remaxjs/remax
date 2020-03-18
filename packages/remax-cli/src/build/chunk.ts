import { OutputBundle, OutputChunk } from 'rollup';

export function getEntryChunks(bundle: OutputBundle): OutputChunk[] {
  const entryChunks = [];
  for (const fileName in bundle) {
    const chunk = bundle[fileName];

    if (chunk.type === 'chunk' && chunk.isEntry) {
      entryChunks.push(chunk);
    }
  }

  return entryChunks;
}

export function getCommonChunks(bundle: OutputBundle): OutputChunk[] {
  const entryChunks = [];
  for (const fileName in bundle) {
    const chunk = bundle[fileName];

    if (chunk.type === 'chunk' && !chunk.facadeModuleId) {
      entryChunks.push(chunk);
    }
  }

  return entryChunks;
}

export function getRelatedModules(
  chunk: OutputChunk,
  commonChunks: OutputChunk[]
): string[] {
  const { imports } = chunk;

  const relatedChunks = commonChunks
    .filter(chunk => imports.find(i => i === chunk.fileName))
    .sort((a, b) => imports.indexOf(a.fileName) - imports.indexOf(b.fileName));

  const unrelatedChunks = commonChunks
    .filter(chunk => imports.find(i => i !== chunk.fileName))
    .sort((a, b) => imports.indexOf(a.fileName) - imports.indexOf(b.fileName));

  return [
    ...relatedChunks.reduce<string[]>(
      (acc, c) => [
        // 递归查找 common chunk 引用的 chunk
        ...getRelatedModules(c, unrelatedChunks),
        ...Object.keys(chunk.modules),
        ...acc,
      ],
      []
    ),
    ...Object.keys(chunk.modules),
  ];
}

export function getRelatedModulesForEntry(
  chunk: OutputChunk,
  bundle: OutputBundle
): string[] {
  return getRelatedModules(chunk, getCommonChunks(bundle));
}
