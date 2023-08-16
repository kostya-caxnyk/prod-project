import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleDetailsPageProps {}

const ArticleDetailsPage = memo(({}: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article')

  return <div className={classNames(cls.ArticleDetailsPage)}>article page</div>
})

export default ArticleDetailsPage
