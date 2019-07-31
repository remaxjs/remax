import * as path from "path";

export function hostComponents(component: string) {
  return require(`./hostComponents/${component}`);
}

export const propsAlias: { [key: string]: string } = {
  className: "class",
  onClick: "bindtap",
  onChange: "bindchange",
  onTap: "bindtap",
  onInput: "bindinput"
};

export const extensions = {
  template: ".wxml",
  style: ".wxss"
};

const templateBaseDir = path.join(__dirname, "../../../../templates/weapp");

export const templates = {
  base: path.join(templateBaseDir, "base.ejs"),
  component: path.join(templateBaseDir, "component.ejs"),
  page: path.join(templateBaseDir, "page.ejs")
};

export const moduleFormat = "cjs";
