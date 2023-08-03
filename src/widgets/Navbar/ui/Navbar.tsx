import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useToggle } from 'shared/lib/hooks/useToggle/useToggle'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isOpenAuthModal, toggleAuthModal] = useToggle(false)

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuthModal}>
          {t('Sign in')}
        </Button>
        <LoginModal isOpen={isOpenAuthModal} onClose={toggleAuthModal} />
      </div>
    </div>
  )
}
