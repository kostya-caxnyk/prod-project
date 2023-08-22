declare namespace PageLoaderModuleScssNamespace {
  export interface IPageLoaderModuleScss {
    pageLoader: string;
  }
}

declare const PageLoaderModuleScssModule: PageLoaderModuleScssNamespace.IPageLoaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageLoaderModuleScssNamespace.IPageLoaderModuleScss;
}

export = PageLoaderModuleScssModule
