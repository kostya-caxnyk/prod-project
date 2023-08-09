declare namespace SidebarLinkModuleScssNamespace {
  export interface ISidebarLinkModuleScss {
    link: string
  }
}

declare const SidebarLinkModuleScssModule: SidebarLinkModuleScssNamespace.ISidebarLinkModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SidebarLinkModuleScssNamespace.ISidebarLinkModuleScss
}

export = SidebarLinkModuleScssModule
