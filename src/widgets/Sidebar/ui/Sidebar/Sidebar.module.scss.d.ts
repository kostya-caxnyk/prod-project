declare namespace SidebarModuleScssNamespace {
  export interface ISidebarModuleScss {
    expandBtn: string
    expanded: string
    link: string
    links: string
    sidebar: string
    switchers: string
  }
}

declare const SidebarModuleScssModule: SidebarModuleScssNamespace.ISidebarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SidebarModuleScssNamespace.ISidebarModuleScss
}

export = SidebarModuleScssModule
