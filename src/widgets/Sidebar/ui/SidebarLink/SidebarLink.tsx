import React, { memo } from 'react'

import cls from './SidebarLink.module.scss'
import { type SidebarLinkType } from 'widgets/Sidebar/model/links'
import { AppLink, LinkTheme } from 'shared/ui/AppLink/AppLink'

interface SidebarLinkProps {
  link: SidebarLinkType
  isExpanded: boolean
}

export const SidebarLink = memo(({ link, isExpanded }: SidebarLinkProps) => {
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
