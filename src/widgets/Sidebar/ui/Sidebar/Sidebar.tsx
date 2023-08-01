import React, { useCallback, useState } from 'react'

import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { AppLink, LinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [isExpanded, toggleExpanded] = useState(true)
  const { t } = useTranslation()

  const toggleSidebar = useCallback(() => {
    toggleExpanded((prev) => !prev)
  }, [])

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.expanded]: isExpanded }, [
        className
      ])}
    >
      <div className={cls.links}>
        <AppLink
          to={RoutePaths.main}
          theme={LinkTheme.SECONDARY}
          className={cls.link}
        >
          <HomeIcon
            width={20}
            height={20}
            fill="var(--inverted-primary-color)"
            stroke="var(--inverted-primary-color)"
          />
          {isExpanded && t('Main Page')}
        </AppLink>
        <AppLink
          to={RoutePaths.about}
          theme={LinkTheme.SECONDARY}
          className={cls.link}
        >
          <AboutIcon
            width={20}
            height={20}
            fill="var(--inverted-primary-color)"
          />
          {isExpanded && t('About Us')}
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleSidebar}
        className={cls.expandBtn}
        theme={ButtonTheme.BACKGROUND}
      >
        {isExpanded ? '<' : '>'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={!isExpanded} />
      </div>
    </div>
  )
}
