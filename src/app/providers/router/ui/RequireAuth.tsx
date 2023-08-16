import React, { ReactElement, ReactNode, memo } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth = memo(({ children }: RequireAuthProps) => {
  const user = useSelector(getUserAuthData)
  const location = useLocation()

  if (!user) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />
  }

  return children as ReactElement
})
