import { useCallback } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, useThemeContext } from './ThemeContext'

const useTheme = () => {
  const { theme, setTheme } = useThemeContext()

  const toggleTheme = useCallback(() => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.ORANGE
        break
      case Theme.ORANGE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.DARK
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme?.(newTheme)
  }, [setTheme, theme])

  document.body.className = theme || ''

  return { theme, toggleTheme }
}

export default useTheme
