import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Comment.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

export const CommentSkeleton = memo(() => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.comment)}>
      <div className={cls.userInfo}>
        <Skeleton border="50%" width={30} height={30} />
        <Skeleton width={100} height={16} />
      </div>
      <Skeleton width={'100%'} height={50} />
    </div>
  )
})
