import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticlesPageProps {}

const ArticlesPage = memo(({}: ArticlesPageProps) => {
  const { t } = useTranslation()

  return <div className={classNames(cls.ArticlesPage)}>articles page</div>
})

export default ArticlesPage
