import React, { ReactElement, ReactNode, memo, useMemo } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserRole, getUserRoles } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

interface RequireRoleProps {
  children: ReactNode
  roles: UserRole[]
}

export const RequireRole = memo(({ children, roles }: RequireRoleProps) => {
  const userRoles = useSelector(getUserRoles)
  const location = useLocation()

  const userHasRequiredRole = useMemo(
    () => roles.some((role) => userRoles?.includes(role)),
    [roles, userRoles]
  )

  if (!userHasRequiredRole) {
    return (
      <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />
    )
  }

  return children as ReactElement
})
