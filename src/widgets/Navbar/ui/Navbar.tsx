import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useToggle } from 'shared/lib/hooks/useToggle/useToggle'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useCallback } from 'react'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isOpenAuthModal, toggleAuthModal] = useToggle(false)
  const user = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  return (
    <header className={classNames(cls.navbar, className)}>
      <div className={cls.links}>
        {user ? (
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            {t('Log out')}
          </Button>
        ) : (
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuthModal}>
            {t('Sign in')}
          </Button>
        )}
        <LoginModal isOpen={isOpenAuthModal} onClose={toggleAuthModal} />
      </div>
    </header>
  )
}
