import React, { memo } from 'react'

import cls from './CommentsList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import { CommentItem } from '../Comment/Comment'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentSkeleton } from '../Comment/CommentSkeleton'

interface CommentsListProps {
  comments?: Comment[]
  isLoading?: boolean
  error?: string
}

export const CommentsList = memo(
  ({ comments, isLoading, error }: CommentsListProps) => {
    const { t } = useTranslation()

    if (isLoading) {
      return (
        <div className={classNames(cls.commentsList)}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <CommentSkeleton key={idx} />
          ))}
        </div>
      )
    }

    return (
      <div className={classNames(cls.commentsList)}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <Text title={t('No comments yet')} />
        )}
      </div>
    )
  }
)
