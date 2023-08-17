import { classNames } from 'shared/lib/classNames/classNames'
import React, { memo } from 'react'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  size?: number
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, size } = props

  return (
    <Svg
      className={classNames(cls.Icon, className)}
      width={size}
      height={size}
    />
  )
})
