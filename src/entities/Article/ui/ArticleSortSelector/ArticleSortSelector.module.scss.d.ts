declare namespace ArticleSortSelectorModuleScssNamespace {
  export interface IArticleSortSelectorModuleScss {
    articleSortSelector: string;
    order: string;
  }
}

declare const ArticleSortSelectorModuleScssModule: ArticleSortSelectorModuleScssNamespace.IArticleSortSelectorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleSortSelectorModuleScssNamespace.IArticleSortSelectorModuleScss;
}

export = ArticleSortSelectorModuleScssModule
