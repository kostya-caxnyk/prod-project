import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/AddCommentForm'
import { CommentsList } from 'entities/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  getArticleDetailsCommentsLoading,
  getArticleDetailsCommentsError
} from '../../model/selectors/comments'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { VStack } from 'shared/ui/Stack'

interface ArticleDetailsCommentsProps {
  id?: string
}

export const ArticleDetailsComments = memo(
  ({ id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const isLoadingComments = useSelector(getArticleDetailsCommentsLoading)
    const commentsError = useSelector(getArticleDetailsCommentsError)

    const onSendComment = useCallback(
      (text: string) => {
        void dispatch(addCommentForArticle(text))
      },
      [dispatch]
    )

    useInitialEffect(() => {
      if (id) {
        void dispatch(fetchCommentsByArticleId(id))
      }
    }, [id])

    return (
      <VStack max>
        <Text title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList
          isLoading={isLoadingComments}
          error={commentsError}
          comments={comments}
        />
      </VStack>
    )
  }
)
