import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './LoginForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import {
  loginActions,
  loginReducer
} from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  useDynamicModuleLoader('loginForm', loginReducer)

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(loginActions.setUsername(username))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password))
    },
    [dispatch]
  )

  const signIn = useCallback(async () => {
    const res = await dispatch(loginByUsername({ username, password }))
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, onSuccess, password, username])

  return (
    <div className={classNames(cls.loginForm)}>
      {error && (
        <Text
          text={t('Username or password are not correct')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        type="text"
        placeholder={t('Enter username')}
        autoFocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        placeholder={t('Enter password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.button}
        onClick={signIn}
        disabled={isLoading}
      >
        {t('Sign in')}
      </Button>
    </div>
  )
}
