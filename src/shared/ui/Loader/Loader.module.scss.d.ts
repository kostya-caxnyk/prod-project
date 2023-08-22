declare namespace LoaderModuleScssNamespace {
  export interface ILoaderModuleScss {
    'lds-ellipsis': string;
    'lds-ellipsis1': string;
    'lds-ellipsis2': string;
    'lds-ellipsis3': string;
  }
}

declare const LoaderModuleScssModule: LoaderModuleScssNamespace.ILoaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoaderModuleScssNamespace.ILoaderModuleScss;
}

export = LoaderModuleScssModule
