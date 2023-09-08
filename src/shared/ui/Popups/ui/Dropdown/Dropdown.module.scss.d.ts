declare namespace DropdownModuleScssNamespace {
  export interface IDropdownModuleScss {
    item: string;
    menu: string;
  }
}

declare const DropdownModuleScssModule: DropdownModuleScssNamespace.IDropdownModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownModuleScssNamespace.IDropdownModuleScss;
}

export = DropdownModuleScssModule
