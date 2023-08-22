declare namespace CardModuleScssNamespace {
  export interface ICardModuleScss {
    card: string;
    normal: string;
    outlined: string;
  }
}

declare const CardModuleScssModule: CardModuleScssNamespace.ICardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardModuleScssNamespace.ICardModuleScss;
}

export = CardModuleScssModule
