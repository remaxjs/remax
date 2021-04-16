import * as t from '@babel/types';

export default function insertImportDeclaration(program: any, imported: string, source: string) {
  let name = imported;

  const node = program.node.body.find((node: t.Node) => t.isImportDeclaration(node) && node.source.value === source);

  if (node) {
    const specifier = (node as t.ImportDeclaration).specifiers.find(
      specifier =>
        t.isImportSpecifier(specifier) && t.isIdentifier(specifier.imported) && specifier.imported.name === name
    );

    if (specifier) {
      name = specifier.local.name;
    } else {
      node.specifiers.push(t.importSpecifier(t.identifier(name), t.identifier(name)));
    }
  } else {
    const importDeclaration = t.importDeclaration(
      [t.importSpecifier(t.identifier(name), t.identifier(name))],
      t.stringLiteral(source)
    );
    program.node.body.unshift(importDeclaration);
  }

  return name;
}
