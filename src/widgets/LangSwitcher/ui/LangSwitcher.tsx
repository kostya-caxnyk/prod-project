import React, { useCallback } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation()

  const toggle = useCallback(async () => {
    await i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
  }, [i18n])

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Button className={classNames(className)} onClick={toggle}>
      {short ? t('Short language') : t('Language')}
    </Button>
  )
}
