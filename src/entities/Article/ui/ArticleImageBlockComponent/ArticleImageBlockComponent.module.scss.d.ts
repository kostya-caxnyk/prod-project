declare namespace ArticleImageBlockComponentModuleScssNamespace {
  export interface IArticleImageBlockComponentModuleScss {
    articleImageBlockComponent: string;
  }
}

declare const ArticleImageBlockComponentModuleScssModule: ArticleImageBlockComponentModuleScssNamespace.IArticleImageBlockComponentModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleImageBlockComponentModuleScssNamespace.IArticleImageBlockComponentModuleScss;
}

export = ArticleImageBlockComponentModuleScssModule
