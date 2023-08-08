declare namespace PageErrorModuleScssNamespace {
  export interface IPageErrorModuleScss {
    wrapper: string
  }
}

declare const PageErrorModuleScssModule: PageErrorModuleScssNamespace.IPageErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageErrorModuleScssNamespace.IPageErrorModuleScss
}

export = PageErrorModuleScssModule
