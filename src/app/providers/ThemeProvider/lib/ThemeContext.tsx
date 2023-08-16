import { createContext, useContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  ORANGE = 'app_orange_theme'
}

export interface ThemeContext {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const themeContext = createContext<ThemeContext>({})

export const useThemeContext = () => useContext(themeContext)

export const LOCAL_STORAGE_THEME_KEY = 'theme'
