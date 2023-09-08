import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useToggle } from 'shared/lib/hooks/useToggle/useToggle'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { HStack } from 'shared/ui/Stack'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import { AvatarDropdown } from 'features/avatarDropdown'
import { Popover } from 'shared/ui/Popups'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isOpenAuthModal, toggleAuthModal] = useToggle(false)
  const user = useSelector(getUserAuthData)

  return (
    <header className={classNames(cls.navbar, className)}>
      <div className={cls.links}>
        {user ? (
          <HStack gap="16">
            <Popover
              direction="bottom left"
              trigger={<Icon Svg={NotificationIcon} size={20} />}
            >
              <NotificationList className={cls.notifications} />
            </Popover>
            <AvatarDropdown />
          </HStack>
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
