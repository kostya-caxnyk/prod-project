import React, { useCallback } from 'react'

import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

export function PageError() {
  const { t } = useTranslation()

  const reloadPage = useCallback(() => {
    location.reload()
  }, [])

  return (
    <div className={classNames(cls.wrapper)}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reloadPage}>{t('Reload page')}</Button>
    </div>
  )
}
