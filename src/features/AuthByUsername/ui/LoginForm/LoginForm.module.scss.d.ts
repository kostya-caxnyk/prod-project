declare namespace LoginFormModuleScssNamespace {
  export interface ILoginFormModuleScss {
    button: string;
    loginForm: string;
  }
}

declare const LoginFormModuleScssModule: LoginFormModuleScssNamespace.ILoginFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoginFormModuleScssNamespace.ILoginFormModuleScss;
}

export = LoginFormModuleScssModule
