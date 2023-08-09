import React, { useCallback, useState } from 'react'

import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { sidebarLinks } from '../../model/links'
import { SidebarLink } from '../SidebarLink/SidebarLink'

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
        {sidebarLinks.map((link) => (
          <SidebarLink link={link} isExpanded={isExpanded} key={link.path} />
        ))}
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
