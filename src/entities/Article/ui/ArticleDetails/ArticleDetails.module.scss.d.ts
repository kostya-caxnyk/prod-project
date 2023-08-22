declare namespace ArticleDetailsModuleScssNamespace {
  export interface IArticleDetailsModuleScss {
    articleDetails: string;
    articleInfo: string;
    avatar: string;
    avatarWrapper: string;
    blocks: string;
    icon: string;
    skeletons: string;
  }
}

declare const ArticleDetailsModuleScssModule: ArticleDetailsModuleScssNamespace.IArticleDetailsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleDetailsModuleScssNamespace.IArticleDetailsModuleScss;
}

export = ArticleDetailsModuleScssModule
