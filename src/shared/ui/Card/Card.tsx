import { classNames } from '@/shared/lib/classNames/classNames'
import { HTMLAttributes, memo, ReactNode } from 'react'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
  fullWidth?: boolean
}

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    fullWidth,
    ...otherProps
  } = props

  return (
    <div
      className={classNames(
        cls.card,
        className,
        cls[theme],
        fullWidth && cls.fullWidth
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
})
