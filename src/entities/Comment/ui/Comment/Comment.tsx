import React, { memo } from 'react'

import cls from './Comment.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { generatePath } from 'react-router-dom'

interface CommentProps {
  comment: Comment
}

export const CommentItem = memo(({ comment }: CommentProps) => {
  return (
    <div className={classNames(cls.comment)}>
      <AppLink
        to={generatePath(RoutePaths.profile, { id: comment.user.id })}
        className={cls.userInfo}
      >
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  )
})
