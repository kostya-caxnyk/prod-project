declare namespace ArticleTextBlockComponentModuleScssNamespace {
  export interface IArticleTextBlockComponentModuleScss {
    paragraph: string
    title: string
  }
}

declare const ArticleTextBlockComponentModuleScssModule: ArticleTextBlockComponentModuleScssNamespace.IArticleTextBlockComponentModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleTextBlockComponentModuleScssNamespace.IArticleTextBlockComponentModuleScss
}

export = ArticleTextBlockComponentModuleScssModule
