declare namespace PageModuleScssNamespace {
  export interface IPageModuleScss {
    page: string;
    trigger: string;
  }
}

declare const PageModuleScssModule: PageModuleScssNamespace.IPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageModuleScssNamespace.IPageModuleScss;
}

export = PageModuleScssModule
