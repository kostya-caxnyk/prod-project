declare namespace FlexModuleScssNamespace {
  export interface IFlexModuleScss {
    alignCenter: string;
    alignEnd: string;
    alignStart: string;
    directionColumn: string;
    directionRow: string;
    flex: string;
    gap16: string;
    gap32: string;
    gap4: string;
    gap8: string;
    justifyBetween: string;
    justifyCenter: string;
    justifyEnd: string;
    justifyStart: string;
    max: string;
  }
}

declare const FlexModuleScssModule: FlexModuleScssNamespace.IFlexModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FlexModuleScssNamespace.IFlexModuleScss;
}

export = FlexModuleScssModule
