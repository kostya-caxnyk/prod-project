declare namespace ArticleViewSelectorModuleScssNamespace {
  export interface IArticleViewSelectorModuleScss {
    notSelected: string;
  }
}

declare const ArticleViewSelectorModuleScssModule: ArticleViewSelectorModuleScssNamespace.IArticleViewSelectorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleViewSelectorModuleScssNamespace.IArticleViewSelectorModuleScss;
}

export = ArticleViewSelectorModuleScssModule
