declare namespace ListBoxModuleScssNamespace {
  export interface IListBoxModuleScss {
    item: string;
    options: string;
    trigger: string;
  }
}

declare const ListBoxModuleScssModule: ListBoxModuleScssNamespace.IListBoxModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ListBoxModuleScssNamespace.IListBoxModuleScss;
}

export = ListBoxModuleScssModule
