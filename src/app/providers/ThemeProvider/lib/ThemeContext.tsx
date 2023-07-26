import { createContext, useContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContext {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const themeContext = createContext<ThemeContext>({})

export const useThemeContext = () => useContext(themeContext)

export const LOCAL_STORAGE_THEME_KEY = 'theme'
