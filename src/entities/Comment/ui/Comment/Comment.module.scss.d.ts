declare namespace CommentModuleScssNamespace {
  export interface ICommentModuleScss {
    comment: string;
    userInfo: string;
  }
}

declare const CommentModuleScssModule: CommentModuleScssNamespace.ICommentModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CommentModuleScssNamespace.ICommentModuleScss;
}

export = CommentModuleScssModule
