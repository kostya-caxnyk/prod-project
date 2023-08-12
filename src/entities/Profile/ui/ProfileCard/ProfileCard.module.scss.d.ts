declare namespace ProfileCardModuleScssNamespace {
  export interface IProfileCardModuleScss {
    avatar: string
    loader: string
    profile: string
    profileCard: string
  }
}

declare const ProfileCardModuleScssModule: ProfileCardModuleScssNamespace.IProfileCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProfileCardModuleScssNamespace.IProfileCardModuleScss
}

export = ProfileCardModuleScssModule
