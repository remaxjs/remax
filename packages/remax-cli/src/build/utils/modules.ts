function getModule(module: any): string[] {
  if (!module) {
    return [];
  }
  return Array.from(
    new Set([
      module.resource,
      ...(module.dependencies as any[]).reduce<string[]>((acc, d) => [...acc, d.originModule?.resource], []),
    ])
  );
}

export default function getModules(chunk: any) {
  const modules = Array.from(chunk._modules)
    .reduce<string[]>((acc, cur) => [...acc, ...getModule(cur)], [])
    .filter(Boolean)
    .sort();

  return Array.from(new Set(modules));
}
