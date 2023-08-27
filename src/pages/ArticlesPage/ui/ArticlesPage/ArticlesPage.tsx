import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../../model/slice/articlePageSlice'
import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'

const ArticlesPage = memo(() => {
  const { t } = useTranslation()
  useDynamicModuleLoader('articlesPage', articlesPageReducer, false)
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  }, [])

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const onLoadNextPage = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <Page onScrollEnd={onLoadNextPage}>
      <ArticlesPageFilters />
      <ArticleList articles={articles} view={view} isLoading={isLoading} />
    </Page>
  )
})

export default ArticlesPage
