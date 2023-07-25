import React, { ButtonHTMLAttributes } from "react";

import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type Variant = "";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "clear" | "filled";
};

export function Button({
  className,
  variant = "clear",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[variant]])}
      {...props}
    />
  );
}
