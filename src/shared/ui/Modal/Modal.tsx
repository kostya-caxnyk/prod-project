import { useEffect, type MouseEvent, type ReactNode, useCallback, useState } from 'react'
import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  rootElement?: Element
  lazy?: boolean
}

export function Modal({ rootElement, children, isOpen, onClose, lazy }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const onContentClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      setIsMounted(isOpen)
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal element={rootElement}>
      <div className={classNames(cls.modal, { [cls.open]: isOpen })}>
        <div className={cls.overlay} onClick={onClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
