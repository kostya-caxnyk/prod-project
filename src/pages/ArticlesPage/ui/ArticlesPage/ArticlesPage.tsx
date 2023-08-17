import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

const ArticlesPage = memo(() => {
  const { t } = useTranslation()

  return <div className={classNames(cls.ArticlesPage)}></div>
})

export default ArticlesPage
