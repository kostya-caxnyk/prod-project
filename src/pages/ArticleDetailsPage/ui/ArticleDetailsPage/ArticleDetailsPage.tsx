import React, { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ArticleDetails,
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from 'entities/Article'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article')
  useDynamicModuleLoader('articleDetails', articleDetailsReducer)
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  return (
    <ArticleDetails article={article} isLoading={isLoading} error={error} />
  )
})

export default ArticleDetailsPage
