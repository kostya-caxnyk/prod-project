import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getProfileReadonly,
  profileActions,
  saveProfileData
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const changeReadonly = useCallback(() => {
    dispatch(profileActions.setReadonly(!readonly))
  }, [dispatch, readonly])

  const saveProfile = useCallback(() => {
    dispatch(saveProfileData()).catch(console.log)
  }, [dispatch])

  return (
    <div className={cls.header}>
      <Text title={t('User profile')} />
      {readonly ? (
        <Button theme={ButtonTheme.OUTLINE} onClick={changeReadonly}>
          {t('Edit')}
        </Button>
      ) : (
        <Button theme={ButtonTheme.OUTLINE} onClick={saveProfile}>
          {t('Save')}
        </Button>
      )}
    </div>
  )
})
