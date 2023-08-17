declare namespace TextModuleScssNamespace {
  export interface ITextModuleScss {
    alignCenter: string
    alignLeft: string
    alignRight: string
    error: string
    primary: string
    size_l: string
    size_m: string
    text: string
    title: string
  }
}

declare const TextModuleScssModule: TextModuleScssNamespace.ITextModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TextModuleScssNamespace.ITextModuleScss
}

export = TextModuleScssModule
