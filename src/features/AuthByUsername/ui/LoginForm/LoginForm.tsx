import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

export function LoginForm() {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm)}>
      <Input type="text" placeholder={t('Enter username')} autoFocus />
      <Input type="text" placeholder={t('Enter password')} />
      <Button className={cls.button}>{t('Sign in')}</Button>
    </div>
  )
}
