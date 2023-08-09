import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const ProfilePage = () => {
  const { t } = useTranslation()
  useDynamicModuleLoader('profile', profileReducer)

  return <div>{t('Profile page')}</div>
}

export default memo(ProfilePage)
