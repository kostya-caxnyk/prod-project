declare namespace ProfilePageHeaderModuleScssNamespace {
  export interface IProfilePageHeaderModuleScss {
    header: string;
  }
}

declare const ProfilePageHeaderModuleScssModule: ProfilePageHeaderModuleScssNamespace.IProfilePageHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProfilePageHeaderModuleScssNamespace.IProfilePageHeaderModuleScss;
}

export = ProfilePageHeaderModuleScssModule
