import React, { type ReactNode, memo } from 'react'

import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text: ReactNode
  theme?: TextTheme
}

export const Text = memo(
  ({ className, text, title, theme = TextTheme.PRIMARY }: TextProps) => {
    return (
      <div className={classNames(cls.text, className, cls[theme])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    )
  }
)
