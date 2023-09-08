declare namespace PopoverModuleScssNamespace {
  export interface IPopoverModuleScss {
    panel: string;
  }
}

declare const PopoverModuleScssModule: PopoverModuleScssNamespace.IPopoverModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PopoverModuleScssNamespace.IPopoverModuleScss;
}

export = PopoverModuleScssModule
