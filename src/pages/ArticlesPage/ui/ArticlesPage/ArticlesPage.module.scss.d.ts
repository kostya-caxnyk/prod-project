declare namespace ArticlesPageModuleScssNamespace {
  export interface IArticlesPageModuleScss {
    ArticlesPage: string;
    list: string;
  }
}

declare const ArticlesPageModuleScssModule: ArticlesPageModuleScssNamespace.IArticlesPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticlesPageModuleScssNamespace.IArticlesPageModuleScss;
}

export = ArticlesPageModuleScssModule
