declare namespace ArticleListModuleScssNamespace {
  export interface IArticleListModuleScss {
    articleList: string;
  }
}

declare const ArticleListModuleScssModule: ArticleListModuleScssNamespace.IArticleListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleListModuleScssNamespace.IArticleListModuleScss;
}

export = ArticleListModuleScssModule
