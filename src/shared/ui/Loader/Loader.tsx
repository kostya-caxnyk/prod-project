import React from 'react'

import cls from './Loader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export function Loader ({ className }: LoaderProps) {
  return (
    <div className={classNames(cls['lds-circle'], className)}><div></div></div>
  )
}
