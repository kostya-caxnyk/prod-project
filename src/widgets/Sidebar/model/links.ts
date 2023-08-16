import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import i18n from 'shared/config/i18n/i18n'

export interface SidebarLinkType {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  text: string
  path: string
  authOnly?: boolean
}

export const sidebarLinks: SidebarLinkType[] = [
  {
    path: RoutePaths.main,
    icon: HomeIcon,
    text: i18n.t('Main Page')
  },
  {
    path: RoutePaths.about,
    icon: AboutIcon,
    text: i18n.t('About us')
  },
  {
    path: RoutePaths.profile,
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
]
