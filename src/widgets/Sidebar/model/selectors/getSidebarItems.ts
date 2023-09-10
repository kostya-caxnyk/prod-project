import { StateSchema } from '@/app/providers/StoreProvider'
import { getUserAuthData } from '@/entities/User'

import { RoutePaths } from '@/shared/config/routeConfig/routeConfig'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import i18n from '@/shared/config/i18n/i18n'
import { generatePath } from 'react-router-dom'

export interface SidebarLinkType {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  text: string
  path: string
  authOnly?: boolean
}

export const getSidebarItems = (state: StateSchema) => {
  const user = getUserAuthData(state)

  const sidebarItems: SidebarLinkType[] = [
    {
      path: RoutePaths.main,
      icon: HomeIcon,
      text: i18n.t('Main Page')
    },
    {
      path: RoutePaths.about,
      icon: AboutIcon,
      text: i18n.t('About us')
    }
  ]

  if (user) {
    sidebarItems.push(
      {
        path: generatePath(RoutePaths.profile, { id: user?.id }),
        icon: ProfileIcon,
        text: i18n.t('Profile'),
        authOnly: true
      },
      {
        path: RoutePaths.articles,
        icon: ArticlesIcon,
        text: i18n.t('Articles'),
        authOnly: true
      }
    )
  }

  return sidebarItems
}
