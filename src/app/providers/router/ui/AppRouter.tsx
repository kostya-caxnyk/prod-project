import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

function AppRouter () {
  return (
    <Suspense fallback={<PageLoader/>}>
      <div className="page-wrapper">{useRoutes(routes)}</div>
    </Suspense>
  )
}

export default AppRouter
