import React from "react";

import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import Icon from "shared/assets/icons/cloud-moon.svg";
import { Button } from "shared/ui/Button/Button";

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
      <Icon width={30} height={30} />
      Change theme
    </Button>
  );
}
