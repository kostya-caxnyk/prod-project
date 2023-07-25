import React from "react";

import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = () =>
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");

  return (
    <Button className={classNames(className)} onClick={toggle}>
      {t("Language")}
    </Button>
  );
}
