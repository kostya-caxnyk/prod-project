declare namespace NotFoundPageModuleScssNamespace {
  export interface INotFoundPageModuleScss {
    wrapper: string
  }
}

declare const NotFoundPageModuleScssModule: NotFoundPageModuleScssNamespace.INotFoundPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotFoundPageModuleScssNamespace.INotFoundPageModuleScss
}

export = NotFoundPageModuleScssModule
