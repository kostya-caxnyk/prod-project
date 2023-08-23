declare namespace ArticleDetailsPageModuleScssNamespace {
  export interface IArticleDetailsPageModuleScss {
    commentsTitle: string;
    recommendations: string;
  }
}

declare const ArticleDetailsPageModuleScssModule: ArticleDetailsPageModuleScssNamespace.IArticleDetailsPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleDetailsPageModuleScssNamespace.IArticleDetailsPageModuleScss;
}

export = ArticleDetailsPageModuleScssModule
