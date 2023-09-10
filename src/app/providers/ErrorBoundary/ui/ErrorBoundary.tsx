import React, { Suspense } from 'react'
import { type ErrorInfo, type ReactNode } from 'react'
import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return <Suspense fallback=''>
          <PageError/>
        </Suspense>
    }

    return this.props.children
  }
}

export default ErrorBoundary
