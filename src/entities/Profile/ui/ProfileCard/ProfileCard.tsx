import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { Input } from '@/shared/ui/Input/Input'
import { Profile } from '../..'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Country, CountrySelect } from '@/entities/Country'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { classNames } from '@/shared/lib/classNames/classNames'

interface ProfileCardProps {
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChange: (newData: Profile) => void
}

export const ProfileCard = memo(
  ({ data, error, isLoading, readonly, onChange }: ProfileCardProps) => {
    const { t } = useTranslation()

    const changeField = useCallback(
      (value: string, field: keyof Profile) => {
        onChange({ ...data, [field]: value })
      },
      [data, onChange]
    )

    const changeCountry = useCallback(
      (value: Country) => {
        onChange({ ...data, country: value })
      },
      [data, onChange]
    )

    const changeCurrency = useCallback(
      (value: Currency) => {
        onChange({ ...data, currency: value })
      },
      [data, onChange]
    )

    if (isLoading) {
      return (
        <div className={cls.profileCard}>
          <div className={cls.loader}>
            <Loader />
          </div>
        </div>
      )
    }

    if (error) {
      return (
        <div className={classNames(cls.profileCard, cls.loader)}>
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
          {data?.avatar && (
            <div className={cls.avatar}>
              <Avatar src={data?.avatar} size={150} />
            </div>
          )}
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
            value={data?.city}
            placeholder={t('Your city')}
            readOnly={readonly}
            onChange={changeField}
            name="city"
          />
          <Input
            value={data?.username}
            placeholder={t('Your username')}
            readOnly={readonly}
            onChange={changeField}
            name="username"
          />
          <Input
            value={data?.avatar}
            placeholder={t('Your avatar')}
            readOnly={readonly}
            onChange={changeField}
            name="avatar"
          />
          <CountrySelect
            value={data?.country}
            readonly={readonly}
            onChange={changeCountry}
          />
          <CurrencySelect
            value={data?.currency}
            readonly={readonly}
            onChange={changeCurrency}
          />
        </div>
      </div>
    )
  }
)
