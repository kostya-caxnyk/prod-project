declare namespace SelectModuleScssNamespace {
  export interface ISelectModuleScss {
    label: string;
    option: string;
    select: string;
    wrapper: string;
  }
}

declare const SelectModuleScssModule: SelectModuleScssNamespace.ISelectModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SelectModuleScssNamespace.ISelectModuleScss;
}

export = SelectModuleScssModule
