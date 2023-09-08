declare namespace PopupModuleScssNamespace {
  export interface IPopupModuleScss {
    active: string;
    disabled: string;
    optionsBottomLeft: string;
    optionsBottomRight: string;
    optionsTopLeft: string;
    optionsTopRight: string;
    popup: string;
    trigger: string;
  }
}

declare const PopupModuleScssModule: PopupModuleScssNamespace.IPopupModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PopupModuleScssNamespace.IPopupModuleScss;
}

export = PopupModuleScssModule
