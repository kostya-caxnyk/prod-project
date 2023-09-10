import React, { Suspense } from 'react'

import { Modal } from '@/shared/ui/Modal/Modal'
import { Loader } from '@/shared/ui/Loader/Loader'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        {isOpen && <LoginFormLazy onSuccess={onClose} />}
      </Suspense>
    </Modal>
  )
}
