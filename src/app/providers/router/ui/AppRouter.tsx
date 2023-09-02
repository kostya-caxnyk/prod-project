import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'
import { RequireRole } from './RequireRole'

function AppRouter() {
  const routesToRender = routes
    .map((route) =>
      route.roles
        ? {
            ...route,
            element: (
              <RequireRole roles={route.roles}>{route.element}</RequireRole>
            )
          }
        : route
    )
    .map((route) =>
      route.authOnly
        ? { ...route, element: <RequireAuth>{route.element}</RequireAuth> }
        : route
    )

  return (
    <Suspense fallback={<PageLoader />}>{useRoutes(routesToRender)}</Suspense>
  )
}

export default AppRouter
