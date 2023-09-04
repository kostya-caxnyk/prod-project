import { type FC, useMemo, useState, ReactNode } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  themeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme
  )

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
