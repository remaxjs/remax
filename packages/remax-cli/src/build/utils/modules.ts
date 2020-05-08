function getModuleResource(module: any) {
  if (!module) {
    return '';
  }

  // 跳过 css 模块
  if (module.constructor.name === 'CssModule') {
    return '';
  }

  // TODO: 针对不同类型的 module 做处理

  return module.resource || module.rootModule?.resource;
}

function getModule(module: any, modules: string[]): string[] {
  const resource = getModuleResource(module);

  if (!resource) {
    return [];
  }

  return Array.from(
    new Set([
      resource,
      ...(module.dependencies as any[]).reduce<string[]>((acc, d) => {
        const newModules = [...acc, ...modules];
        const module = d.module || d.originModule;

        const resource = getModuleResource(module);

        if (!resource) {
          return acc;
        }

        if (newModules.includes(resource)) {
          return acc;
        }

        return [...acc, resource, ...getModule(module, [...newModules, resource])];
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
