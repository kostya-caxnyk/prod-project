import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

function AppRouter() {
  const routesToRender = routes.map((route) =>
    route.authOnly
      ? { ...route, element: <RequireAuth>{route.element}</RequireAuth> }
      : route
  )
  return (
    <Suspense fallback={<PageLoader />}>{useRoutes(routesToRender)}</Suspense>
  )
}

export default AppRouter
