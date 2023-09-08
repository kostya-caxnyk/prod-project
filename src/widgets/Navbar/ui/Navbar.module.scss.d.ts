declare namespace NavbarModuleScssNamespace {
  export interface INavbarModuleScss {
    links: string;
    navbar: string;
    notifications: string;
  }
}

declare const NavbarModuleScssModule: NavbarModuleScssNamespace.INavbarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavbarModuleScssNamespace.INavbarModuleScss;
}

export = NavbarModuleScssModule
