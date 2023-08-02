import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children?: ReactNode
  element?: Element
}

export function Portal({ children, element = document.body }: PortalProps) {
  return createPortal(children, element)
}
