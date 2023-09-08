declare namespace NotificationItemModuleScssNamespace {
  export interface INotificationItemModuleScss {
    NotificationItem: string;
    link: string;
  }
}

declare const NotificationItemModuleScssModule: NotificationItemModuleScssNamespace.INotificationItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotificationItemModuleScssNamespace.INotificationItemModuleScss;
}

export = NotificationItemModuleScssModule
