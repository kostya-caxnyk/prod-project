declare namespace ButtonModuleScssNamespace {
  export interface IButtonModuleScss {
    background: string
    backgroundInverted: string
    button: string
    clear: string
    clearInverted: string
    disabled: string
    outline: string
    size_l: string
    size_m: string
    size_xl: string
    square: string
  }
}

declare const ButtonModuleScssModule: ButtonModuleScssNamespace.IButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonModuleScssNamespace.IButtonModuleScss
}

export = ButtonModuleScssModule
