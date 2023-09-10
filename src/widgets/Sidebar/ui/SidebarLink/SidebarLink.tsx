import React, { memo } from 'react'

import cls from './SidebarLink.module.scss'
import { AppLink, LinkTheme } from '@/shared/ui/AppLink/AppLink'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { SidebarLinkType } from '../../model/selectors/getSidebarItems'

interface SidebarLinkProps {
  link: SidebarLinkType
  isExpanded: boolean
}

export const SidebarLink = memo(({ link, isExpanded }: SidebarLinkProps) => {
  const user = useSelector(getUserAuthData)

  if (!user && link.authOnly) {
    return null
  }

  return (
    <AppLink to={link.path} theme={LinkTheme.SECONDARY} className={cls.link}>
      <link.icon
        width={20}
        height={20}
        fill="var(--inverted-primary-color)"
        stroke="var(--inverted-primary-color)"
      />
      {isExpanded && link.text}
    </AppLink>
  )
})
