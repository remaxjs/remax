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

  const relatedChunks = commonChunks.filter(chunk =>
    imports.find(i => i === chunk.fileName)
  );

  const unrelatedChunks = commonChunks.filter(chunk =>
    imports.find(i => i !== chunk.fileName)
  );

  return [
    ...Object.keys(chunk.modules),
    ...relatedChunks.reduce<string[]>(
      (acc, c) => [
        ...acc,
        ...Object.keys(chunk.modules),
        // 递归查找 common chunk 引用的 chunk
        ...getRelatedModules(c, unrelatedChunks),
      ],
      []
    ),
  ];
}

export function getRelatedModulesForEntry(
  chunk: OutputChunk,
  bundle: OutputBundle
): string[] {
  return getRelatedModules(chunk, getCommonChunks(bundle));
}
