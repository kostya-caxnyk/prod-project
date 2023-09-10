import React from 'react'

import cls from './PageLoader.module.scss'
import { Loader } from '@/shared/ui/Loader/Loader'

export function PageLoader () {
  return (
    <div className={cls.pageLoader}>
      <Loader/>
    </div>
  )
}
