declare namespace AddCommentFormModuleScssNamespace {
  export interface IAddCommentFormModuleScss {
    addCommentForm: string;
    input: string;
  }
}

declare const AddCommentFormModuleScssModule: AddCommentFormModuleScssNamespace.IAddCommentFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AddCommentFormModuleScssNamespace.IAddCommentFormModuleScss;
}

export = AddCommentFormModuleScssModule
