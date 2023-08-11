import React, { memo, useCallback, useEffect } from 'react'
import cls from './ProfilePage.module.scss'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import {
  fetchProfileData,
  profileReducer,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileLoading,
  Profile,
  profileActions,
  getProfileReadonly
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const ProfilePage = () => {
  useDynamicModuleLoader('profile', profileReducer)

  const dispatch = useAppDispatch()

  const readonly = useSelector(getProfileReadonly)
  const profileData = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)

  useEffect(() => {
    dispatch(fetchProfileData()).then(console.log).catch(console.log)
  }, [dispatch])

  const updateProfile = useCallback(
    (newData: Profile) => {
      dispatch(profileActions.updateProfile(newData))
    },
    [dispatch]
  )

  return (
    <div className={cls.profilePage}>
      <ProfilePageHeader />
      <ProfileCard
        data={profileData}
        error={error}
        isLoading={isLoading}
        onChange={updateProfile}
        readonly={readonly}
      />
    </div>
  )
}

export default memo(ProfilePage)
