import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleDetails } from 'entities/Article'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
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
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article')
  useDynamicModuleLoader(
    'articleDetailsComments',
    articleDetailsCommentsReducer
  )
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  const comments = useSelector(getArticleComments.selectAll)
  const isLoadingComments = useSelector(getArticleDetailsCommentsLoading)
  const commentsError = useSelector(getArticleDetailsCommentsError)

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchCommentsByArticleId(id))
    }
  }, [id])

  console.log({ comments })

  return (
    <>
      {id && <ArticleDetails id={id} />}
      <Text className={cls.commentsTitle} title={t('Comments')} />
      <CommentsList
        isLoading={isLoadingComments}
        error={commentsError}
        comments={comments}
      />
    </>
  )
})

export default ArticleDetailsPage