import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'

import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { useSearchParams } from 'react-router-dom'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlePageSlice'
import cls from './ArticlesPage.module.scss'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  useDynamicModuleLoader('articlesPage', articlesPageReducer)

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  }, [])

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={classNames(cls.ArticlesPage, className)}
    >
      <ArticlesPageFilters />
      <ArticleInfiniteList className={cls.list} />
    </Page>
  )
}

export default memo(ArticlesPage)
