declare namespace ArticlesPageFiltersModuleScssNamespace {
  export interface IArticlesPageFiltersModuleScss {
    search: string;
    sortWrapper: string;
    tabs: string;
  }
}

declare const ArticlesPageFiltersModuleScssModule: ArticlesPageFiltersModuleScssNamespace.IArticlesPageFiltersModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticlesPageFiltersModuleScssNamespace.IArticlesPageFiltersModuleScss;
}

export = ArticlesPageFiltersModuleScssModule
