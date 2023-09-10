import { UserRole } from '@/entities/User'
import { AboutPageLazy } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPageLazy } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPageLazy } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPageLazy } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePageLazy } from '@/pages/ProfilePage'
import { RouteObject } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_CREATE = 'article_create',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/:id',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',

  [AppRoutes.NOT_FOUND]: '*'
}

export type AppRouteObject = RouteObject & {
  authOnly?: boolean
  roles?: UserRole[]
}

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
    path: RoutePaths.article_details,
    element: <ArticleDetailsPageLazy />,
    authOnly: true
  },
  {
    path: RoutePaths.article_edit,
    element: <ArticleEditPage />,
    authOnly: true
  },
  {
    path: RoutePaths.article_create,
    element: <ArticleEditPage />,
    authOnly: true
  },
  {
    path: RoutePaths.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />
  },
  {
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
]
