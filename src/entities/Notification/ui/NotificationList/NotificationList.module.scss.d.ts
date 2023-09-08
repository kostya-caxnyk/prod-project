declare namespace NotificationListModuleScssNamespace {
  export interface INotificationListModuleScss {
    NotificationList: string;
  }
}

declare const NotificationListModuleScssModule: NotificationListModuleScssNamespace.INotificationListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotificationListModuleScssNamespace.INotificationListModuleScss;
}

export = NotificationListModuleScssModule
