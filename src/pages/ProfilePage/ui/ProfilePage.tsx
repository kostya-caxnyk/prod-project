import React, { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { fetchProfileData, profileReducer, ProfileCard } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const ProfilePage = () => {
  useDynamicModuleLoader('profile', profileReducer)

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData()).then(console.log).catch(console.log)
  }, [dispatch])

  return (
    <div>
      <ProfileCard />
    </div>
  )
}

export default memo(ProfilePage)
