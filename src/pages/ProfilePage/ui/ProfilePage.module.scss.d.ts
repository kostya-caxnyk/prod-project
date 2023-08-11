declare namespace ProfilePageModuleScssNamespace {
  export interface IProfilePageModuleScss {
    profilePage: string
  }
}

declare const ProfilePageModuleScssModule: ProfilePageModuleScssNamespace.IProfilePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProfilePageModuleScssNamespace.IProfilePageModuleScss
}

export = ProfilePageModuleScssModule
