import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ProfilePageHeader.module.scss'
import { Text } from '@/shared/ui/Text/Text'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  saveProfileData
} from '@/entities/Profile'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const currentUser = useSelector(getUserAuthData)
  const profile = useSelector(getProfileData)

  const changeReadonly = useCallback(() => {
    dispatch(profileActions.setReadonly(!readonly))
  }, [dispatch, readonly])

  const saveProfile = useCallback(() => {
    if (currentUser?.id) {
      void dispatch(saveProfileData(currentUser?.id))
    }
  }, [currentUser?.id, dispatch])

  return (
    <div className={cls.header}>
      <Text title={t('User profile')} />
      {currentUser?.id === profile?.id ? (
        readonly ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={changeReadonly}
            data-testid="ProfilePageHeader.EditButton"
          >
            {t('Edit')}
          </Button>
        ) : (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={saveProfile}
            data-testid="ProfilePageHeader.SaveButton"
          >
            {t('Save')}
          </Button>
        )
      ) : null}
    </div>
  )
})
