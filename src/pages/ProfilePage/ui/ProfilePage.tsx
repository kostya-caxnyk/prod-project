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
  getProfileReadonly,
  getProfileValidationErrors,
  ValidationProfileError
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { Page } from 'widgets/Page/Page'

const ProfilePage = () => {
  useDynamicModuleLoader('profile', profileReducer)

  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  const readonly = useSelector(getProfileReadonly)
  const profileData = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileLoading)
  const validationErrors = useSelector(getProfileValidationErrors)

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id))
    }
  }, [dispatch])

  const updateProfile = useCallback(
    (newData: Profile) => {
      dispatch(profileActions.updateProfile(newData))
    },
    [dispatch]
  )

  const validationErrorTranslates = {
    [ValidationProfileError.SERVER_ERROR]: t('Server error'),
    [ValidationProfileError.NO_DATA]: t('No profile data'),
    [ValidationProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidationProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidationProfileError.INCORRECT_USER_DATA]: t('No firstname or lastname')
  }

  return (
    <Page className={cls.profilePage}>
      <ProfilePageHeader />
      {validationErrors?.map((error) => (
        <Text
          text={validationErrorTranslates[error]}
          key={error}
          theme={TextTheme.ERROR}
        />
      ))}
      <ProfileCard
        data={profileData}
        error={error}
        isLoading={isLoading}
        onChange={updateProfile}
        readonly={readonly}
      />
    </Page>
  )
}

export default memo(ProfilePage)
