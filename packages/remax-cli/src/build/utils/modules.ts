function getModule(module: any, modules: string[]): string[] {
  return Array.from(
    new Set([
      module.resource,
      ...(module.dependencies as any[]).reduce<string[]>((acc, d) => {
        const newModules = [...acc, ...modules];

        if (!d.module?.resource) {
          return acc;
        }

        if (newModules.includes(d.module?.resource)) {
          return acc;
        }

        return [...acc, d.module.resource, ...getModule(d.module, [...newModules, d.module.resource])];
      }, []),
    ])
  );
}

export default function getModules(chunk: any) {
  const modules = Array.from(chunk._modules)
    .reduce<string[]>((acc, cur) => [...acc, ...getModule(cur, acc)], [])
    .filter(Boolean)
    .sort();

  return Array.from(new Set(modules));
}
