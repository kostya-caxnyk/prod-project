import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleDetails, ArticleList } from 'entities/Article'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentsList } from 'entities/Comment'
import cls from './ArticleDetailsPage.module.scss'
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from '../../model/slice/articleDetailsCommentsSlice'
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsLoading
} from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecommendationsSlice'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slice'

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article')
  useDynamicModuleLoader('articleDetailsPage', articleDetailsPageReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const comments = useSelector(getArticleComments.selectAll)
  const isLoadingComments = useSelector(getArticleDetailsCommentsLoading)
  const commentsError = useSelector(getArticleDetailsCommentsError)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  )

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchCommentsByArticleId(id))
      void dispatch(fetchArticleRecommendations())
    }
  }, [id])

  const onSendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.articles)
  }, [navigate])

  return (
    <Page>
      <Button onClick={onBackToList}>{t('Back to list')}</Button>
      {id && <ArticleDetails id={id} />}
      <Text
        size={TextSize.L}
        className={cls.commentsTitle}
        title={t('Рекомендуем')}
      />
      <ArticleList
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        className={cls.recommendations}
        target="_blank"
      />
      <Text className={cls.commentsTitle} title={t('Comments')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentsList
        isLoading={isLoadingComments}
        error={commentsError}
        comments={comments}
      />
    </Page>
  )
})

export default ArticleDetailsPage
