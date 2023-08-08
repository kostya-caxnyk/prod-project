declare namespace AppLinkModuleScssNamespace {
  export interface IAppLinkModuleScss {
    appLink: string
    primary: string
    red: string
    secondary: string
  }
}

declare const AppLinkModuleScssModule: AppLinkModuleScssNamespace.IAppLinkModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppLinkModuleScssNamespace.IAppLinkModuleScss
}

export = AppLinkModuleScssModule
