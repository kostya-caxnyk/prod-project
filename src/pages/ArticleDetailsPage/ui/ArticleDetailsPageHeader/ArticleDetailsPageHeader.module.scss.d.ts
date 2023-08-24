declare namespace ArticleDetailsPageHeaderModuleScssNamespace {
  export interface IArticleDetailsPageHeaderModuleScss {
    ArticleDetailsPageHeader: string
    editBtn: string
  }
}

declare const ArticleDetailsPageHeaderModuleScssModule: ArticleDetailsPageHeaderModuleScssNamespace.IArticleDetailsPageHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleDetailsPageHeaderModuleScssNamespace.IArticleDetailsPageHeaderModuleScss
}

export = ArticleDetailsPageHeaderModuleScssModule
