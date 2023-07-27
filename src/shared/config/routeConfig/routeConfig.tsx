import { AboutPageLazy } from 'pages/AboutPage'
import { MainPageLazy } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteObject } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routes: RouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPageLazy />
  },
  {
    path: RoutePaths.about,
    element: <AboutPageLazy />
  },
  {
    path: RoutePaths.not_found,
    element: <NotFoundPage/>
  }
]
