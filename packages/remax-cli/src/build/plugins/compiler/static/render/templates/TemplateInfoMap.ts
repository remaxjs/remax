export interface TemplateInfo {
  template: string;
  id: string;
  module: string;
  isEntry?: boolean;
}

/**
 * 存储 template 信息
 *
 */
export default class TemplateInfoMap {
  public values() {
    return this.templates;
  }

  public has(id: string) {
    return !!this.templates.find(t => t.id === id);
  }

  public set(id: string, template: string, module: string, isEntry?: boolean) {
    this.templates = this.templates.filter(t => t.id !== id);
    this.templates.push({ template, module, id, isEntry });
  }

  public remove(module: string) {
    this.templates.filter(t => t.module !== module);
  }

  private templates: TemplateInfo[] = [];
}
