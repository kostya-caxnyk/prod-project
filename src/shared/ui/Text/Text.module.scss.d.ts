declare namespace TextModuleScssNamespace {
  export interface ITextModuleScss {
    error: string
    primary: string
    text: string
    title: string
  }
}

declare const TextModuleScssModule: TextModuleScssNamespace.ITextModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TextModuleScssNamespace.ITextModuleScss
}

export = TextModuleScssModule
