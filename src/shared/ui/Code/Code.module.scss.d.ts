declare namespace CodeModuleScssNamespace {
  export interface ICodeModuleScss {
    code: string
    copyBtn: string
  }
}

declare const CodeModuleScssModule: CodeModuleScssNamespace.ICodeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CodeModuleScssNamespace.ICodeModuleScss
}

export = CodeModuleScssModule
