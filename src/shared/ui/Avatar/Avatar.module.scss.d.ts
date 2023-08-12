declare namespace AvatarModuleScssNamespace {
  export interface IAvatarModuleScss {
    avatar: string
  }
}

declare const AvatarModuleScssModule: AvatarModuleScssNamespace.IAvatarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AvatarModuleScssNamespace.IAvatarModuleScss
}

export = AvatarModuleScssModule
