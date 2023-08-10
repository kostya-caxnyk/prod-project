import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

export const ProfileCard = memo(() => {
  const { t } = useTranslation('profile')

  const profileData = useSelector(getProfileData)
  const hasError = useSelector(getProfileData)
  const isLoading = useSelector(getProfileData)

  return (
    <div className={classNames(cls.profileCard)}>
      <div className={cls.header}>
        <Text title={t('User profile')} />
        <Button theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
      </div>
      <div className={cls.profile}>
        <Input value={profileData?.first} placeholder={t('Your name')} />
        <Input value={profileData?.lastname} placeholder={t('Your lastname')} />
      </div>
    </div>
  )
})
