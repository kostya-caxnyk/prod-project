import React from 'react'

import cls from './PageLoader.module.scss'

export function PageLoader () {
  return (
    <div className={cls.pageLoader}>
    <div className={cls['lds-circle']}><div></div></div>
    </div>
  )
}
