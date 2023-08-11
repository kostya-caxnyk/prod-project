import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from 'entities/Profile'
import { Loader } from 'shared/ui/Loader/Loader'

interface ProfileCardProps {
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChange: (newData: Profile) => void
}

export const ProfileCard = memo(
  ({ data, error, isLoading, readonly, onChange }: ProfileCardProps) => {
    const { t } = useTranslation('profile')

    const changeField = useCallback(
      (value: string, field: keyof Profile) => {
        onChange({ ...data, [field]: value })
      },
      [data, onChange]
    )

    if (isLoading) {
      return (
        <div className={cls.profileCard}>
          <Loader />
        </div>
      )
    }

    if (error) {
      return (
        <div className={cls.profileCard}>
          <Text
            text={t('Try to reload page')}
            title={t('Something went wrong')}
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
          />
        </div>
      )
    }

    return (
      <div className={cls.profileCard}>
        <div className={cls.profile}>
          <Input
            value={data?.first}
            placeholder={t('Your name')}
            readOnly={readonly}
            onChange={changeField}
            name="first"
          />
          <Input
            value={data?.lastname}
            placeholder={t('Your lastname')}
            readOnly={readonly}
            onChange={changeField}
            name="lastname"
          />
          <Input
            value={data?.age}
            placeholder={t('Your age')}
            readOnly={readonly}
            onChange={changeField}
            name="age"
            type="number"
          />
          <Input
            value={data?.country}
            placeholder={t('Your country')}
            readOnly={readonly}
            onChange={changeField}
            name="country"
          />
          <Input
            value={data?.city}
            placeholder={t('Your city')}
            readOnly={readonly}
            onChange={changeField}
            name="city"
          />
        </div>
      </div>
    )
  }
)
