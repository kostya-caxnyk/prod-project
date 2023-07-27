import React from 'react'

import { useTheme, Theme } from 'app/providers/ThemeProvider'

import Icon from 'shared/assets/icons/cloud-moon.svg'
import { Button } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher ({ className }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
    >
      <Icon width={50} height={50} fill={Theme.DARK ? 'white' : 'dark'} />
    </Button>
  )
}
