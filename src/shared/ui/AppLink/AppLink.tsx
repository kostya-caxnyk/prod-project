import { classNames } from 'shared/lib/classNames/classNames'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'
import cls from './AppLink.module.scss'

export enum LinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: LinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = LinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
        <Link
            to={to}
            className={classNames(cls.appLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
  )
}
