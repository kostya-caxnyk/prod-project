declare namespace ArticleListItemModuleScssNamespace {
  export interface IArticleListItemModuleScss {
    BIG: string
    SMALL: string
    date: string
    footer: string
    header: string
    imageWrapper: string
    img: string
    infoWrapper: string
    textBlock: string
    title: string
    types: string
    username: string
    views: string
  }
}

declare const ArticleListItemModuleScssModule: ArticleListItemModuleScssNamespace.IArticleListItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleListItemModuleScssNamespace.IArticleListItemModuleScss
}

export = ArticleListItemModuleScssModule
