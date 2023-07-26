import React, { type ReactNode } from 'react'

import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, type LinkProps } from 'react-router-dom'

type AppLinkProps = LinkProps & {
  className?: string
  children?: ReactNode
}

export function AppLink ({ className, ...props }: AppLinkProps) {
  return <Link className={classNames(cls.link, className)} {...props} />
}
