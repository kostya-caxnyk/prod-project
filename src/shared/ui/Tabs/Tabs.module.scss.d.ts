declare namespace TabsModuleScssNamespace {
  export interface ITabsModuleScss {
    tabs: string;
  }
}

declare const TabsModuleScssModule: TabsModuleScssNamespace.ITabsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TabsModuleScssNamespace.ITabsModuleScss;
}

export = TabsModuleScssModule
