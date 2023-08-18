import React, { memo } from 'react'

import cls from './Comment.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'

interface CommentProps {
  comment: Comment
}

export const CommentItem = memo(({ comment }: CommentProps) => {
  return (
    <div className={classNames(cls.comment)}>
      <div className={cls.userInfo}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  )
})
