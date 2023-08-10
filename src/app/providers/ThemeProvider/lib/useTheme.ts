import { useCallback } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, useThemeContext } from './ThemeContext'

const useTheme = () => {
  const { theme, setTheme } = useThemeContext()

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme?.(newTheme)
  }, [setTheme, theme])

  document.body.className = theme || ''

  return { theme, toggleTheme }
}

export default useTheme
