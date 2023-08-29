declare namespace ListBoxModuleScssNamespace {
  export interface IListBoxModuleScss {
    ListBox: string;
    active: string;
    disabled: string;
    item: string;
    options: string;
    optionsBottomLeft: string;
    optionsBottomRight: string;
    optionsTopLeft: string;
    optionsTopRight: string;
    trigger: string;
  }
}

declare const ListBoxModuleScssModule: ListBoxModuleScssNamespace.IListBoxModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ListBoxModuleScssNamespace.IListBoxModuleScss;
}

export = ListBoxModuleScssModule
