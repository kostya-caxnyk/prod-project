import React from "react";

import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import Icon from "shared/assets/icons/cloud-moon.svg";
import { Button } from "shared/ui/Button/Button";
import { Theme } from "app/providers/ThemeProvider";

type ThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.s, {}, [className])}
    >
      <Icon width={50} height={50} fill={Theme.DARK ? "white" : "dark"} />
    </Button>
  );
}
