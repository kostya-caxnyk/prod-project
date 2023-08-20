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
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

const ArticlesPage = memo(() => {
  const { t } = useTranslation()
  useDynamicModuleLoader('articlesPage', articlesPageReducer)
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    void dispatch(fetchArticlesList())
  }, [])

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
      dispatch(articlesPageActions.initState())
    },
    [dispatch]
  )

  return (
    <>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleList articles={articles} view={view} isLoading={isLoading} />
    </>
  )
})

export default ArticlesPage
