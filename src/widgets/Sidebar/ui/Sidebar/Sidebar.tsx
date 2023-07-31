import React, { useCallback, useState } from 'react'

import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export function Sidebar ({ className }: SidebarProps) {
  const [isExpanded, toggleExpanded] = useState(true)

  const toggleSidebar = useCallback(() => { toggleExpanded((prev) => !prev) }, [])

  return (
    <div
    data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.expanded]: isExpanded }, [
        className
      ])}
    >
      {/* <Button data-testid='sidebar-toggle' onClick={toggleSidebar}>Toggle</Button> */}
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
