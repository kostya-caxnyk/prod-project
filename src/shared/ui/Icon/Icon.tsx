import { classNames } from 'shared/lib/classNames/classNames'
import React, { SVGProps, memo } from 'react'
import cls from './Icon.module.scss'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  size?: number
}

export const Icon = memo(({ className, Svg, size, ...props }: IconProps) => {
  return (
    <Svg
      className={classNames(cls.Icon, className)}
      width={size}
      height={size}
      {...props}
    />
  )
})
