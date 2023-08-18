declare namespace CommentsListModuleScssNamespace {
  export interface ICommentsListModuleScss {
    commentsList: string
  }
}

declare const CommentsListModuleScssModule: CommentsListModuleScssNamespace.ICommentsListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CommentsListModuleScssNamespace.ICommentsListModuleScss
}

export = CommentsListModuleScssModule
