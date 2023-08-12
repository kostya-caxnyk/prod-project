import React, { memo } from 'react'

import cls from './Avatar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
  return (
    <img
      className={classNames(cls.avatar, className)}
      src={src}
      style={{ width: size, height: size }}
      alt={alt}
    />
  )
})
