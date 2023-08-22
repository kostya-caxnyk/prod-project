declare namespace SkeletonModuleScssNamespace {
  export interface ISkeletonModuleScss {
    load: string;
    skeleton: string;
  }
}

declare const SkeletonModuleScssModule: SkeletonModuleScssNamespace.ISkeletonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkeletonModuleScssNamespace.ISkeletonModuleScss;
}

export = SkeletonModuleScssModule
