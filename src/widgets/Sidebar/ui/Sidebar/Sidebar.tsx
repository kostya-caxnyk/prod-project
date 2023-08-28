import React, { useCallback, useState } from 'react'

import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { SidebarLink } from '../SidebarLink/SidebarLink'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from 'shared/ui/Stack'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [isExpanded, toggleExpanded] = useState(true)

  const sidebarItems = useSelector(getSidebarItems)

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
      <VStack className={cls.links} align="center" gap="16">
        {sidebarItems.map((link) => (
          <SidebarLink link={link} isExpanded={isExpanded} key={link.path} />
        ))}
      </VStack>
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
