import { useTranslation } from 'react-i18next'
import { memo, useContext } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { getArticles } from '../../model/slice/articlePageSlice'
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { pageContext } from 'widgets/Page/Page'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const { t } = useTranslation()

  if (error) {
    return <Text text={t('Error while loading articles')} />
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  )
})
