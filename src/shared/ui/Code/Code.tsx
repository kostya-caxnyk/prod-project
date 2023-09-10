import React, { memo, useCallback } from 'react'

import cls from './Code.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import CopyIcon from '../../assets/icons/copy.svg'

interface CodeProps {
  className?: string
  children: string
}

export const Code = memo(({ className, children }: CodeProps) => {
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(children)
  }, [children])

  return (
    <pre className={classNames(cls.code, className)}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} size={20} />
      </Button>
      <code>{children}</code>
    </pre>
  )
})
