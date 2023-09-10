import React from 'react'

import cls from './NotFoundPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

export function NotFoundPage () {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.wrapper)}>
        {t('Page not found')}
    </div>
  )
}
