import { AboutPageLazy } from 'pages/AboutPage'
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage'
import { ArticlesPageLazy } from 'pages/ArticlesPage'
import { MainPageLazy } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePageLazy } from 'pages/ProfilePage'
import { RouteObject } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',

  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',

  [AppRoutes.NOT_FOUND]: '*'
}

export type AppRouteObject = RouteObject & { authOnly?: boolean }

export const routes: AppRouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPageLazy />
  },
  {
    path: RoutePaths.about,
    element: <AboutPageLazy />
  },
  {
    path: RoutePaths.profile,
    element: <ProfilePageLazy />,
    authOnly: true
  },
  {
    path: RoutePaths.articles,
    element: <ArticlesPageLazy />,
    authOnly: true
  },
  {
    path: RoutePaths.articleDetails,
    element: <ArticleDetailsPageLazy />,
    authOnly: true
  },
  {
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
]
