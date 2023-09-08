import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Dropdown } from 'shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from 'entities/User'
import { generatePath } from 'react-router-dom'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const user = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!user) {
    return null
  }

  return (
    <Dropdown
      direction="bottom left"
      className={classNames('', {}, [className])}
      items={[
        {
          content: t('Admin panel'),
          href: RoutePaths.admin_panel
        },
        {
          content: t('Profile'),
          href: generatePath(RoutePaths.profile, { id: user.id })
        },
        { content: t('Log out'), onClick: onLogout }
      ]}
      trigger={<Avatar size={30} src={user.avatar} />}
    />
  )
})
