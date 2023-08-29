declare namespace DropdownModuleScssNamespace {
  export interface IDropdownModuleScss {
    Dropdown: string;
    active: string;
    btn: string;
    item: string;
    menu: string;
    optionsBottomLeft: string;
    optionsBottomRight: string;
    optionsTopLeft: string;
    optionsTopRight: string;
  }
}

declare const DropdownModuleScssModule: DropdownModuleScssNamespace.IDropdownModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownModuleScssNamespace.IDropdownModuleScss;
}

export = DropdownModuleScssModule
