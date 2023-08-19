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
import { useParams } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'

export const ProfilePageHeader = memo(() => {
  const { t } = useTranslation()
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const currentUser = useSelector(getUserAuthData)

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
      {currentUser?.id === id ? (
        readonly ? (
          <Button theme={ButtonTheme.OUTLINE} onClick={changeReadonly}>
            {t('Edit')}
          </Button>
        ) : (
          <Button theme={ButtonTheme.OUTLINE} onClick={saveProfile}>
            {t('Save')}
          </Button>
        )
      ) : null}
    </div>
  )
})
