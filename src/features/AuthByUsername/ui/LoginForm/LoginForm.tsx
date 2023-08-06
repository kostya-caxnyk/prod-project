import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export function LoginForm() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

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

  const signIn = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

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
