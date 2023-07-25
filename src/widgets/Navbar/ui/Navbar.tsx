import React from "react";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";

import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={RoutePaths.main}>About Page</AppLink>
        <AppLink to={RoutePaths.about}>Main Page</AppLink>
      </div>
    </div>
  );
}
