declare namespace StarRatingModuleScssNamespace {
  export interface IStarRatingModuleScss {
    icon: string;
    unselected: string;
  }
}

declare const StarRatingModuleScssModule: StarRatingModuleScssNamespace.IStarRatingModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StarRatingModuleScssNamespace.IStarRatingModuleScss;
}

export = StarRatingModuleScssModule
