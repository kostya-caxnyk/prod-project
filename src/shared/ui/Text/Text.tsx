import React, { type ReactNode, memo } from 'react'

import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'alignLeft',
  RIGHT = 'alignRight',
  CENTER = 'alignCenter'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string
  title?: string
  text?: ReactNode
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo(
  ({ className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M }: TextProps) => {
    return (
      <div className={classNames(cls.text, className, cls[theme], cls[align], cls[size])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    )
  }
)
