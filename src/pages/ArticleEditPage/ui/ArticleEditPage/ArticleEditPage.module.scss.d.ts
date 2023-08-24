declare namespace ArticleEditPageModuleScssNamespace {
  export interface IArticleEditPageModuleScss {
    ArticleEditPage: string;
  }
}

declare const ArticleEditPageModuleScssModule: ArticleEditPageModuleScssNamespace.IArticleEditPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ArticleEditPageModuleScssNamespace.IArticleEditPageModuleScss;
};

export = ArticleEditPageModuleScssModule;
