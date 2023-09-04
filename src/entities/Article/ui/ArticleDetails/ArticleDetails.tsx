import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Icon } from 'shared/ui/Icon/Icon'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/date.svg'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleSlice'

interface ArticleDetailsProps {
  id?: string
}

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  useDynamicModuleLoader('articleDetails', articleDetailsReducer)

  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchArticleById(id))
    }
  }, [id])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} key={block.id} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} key={block.id} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} key={block.id} />
      default:
        return null
    }
  }, [])

  if (isLoading) {
    return (
      <div className={classNames(cls.articleDetails)}>
        <div className={cls.skeletons}>
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            border="50%"
          />
          <Skeleton width={300} height={32} />
          <Skeleton width={600} height={24} />
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className={classNames(cls.articleDetails)}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Error with article loading')}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.articleDetails)}>
      <div className={cls.avatarWrapper}>
        <Avatar size={200} src={article.img} className={cls.avatar} />
      </div>
      <Text title={article.title} text={article.subtitle} size={TextSize.L} />
      <div className={cls.articleInfo}>
        <Icon className={cls.icon} Svg={EyeIcon} size={20} />
        <Text text={String(article.views)} />
      </div>
      <div className={cls.articleInfo}>
        <Icon className={cls.icon} Svg={CalendarIcon} size={20} />
        <Text text={article.createdAt} />
      </div>
      <div className={cls.blocks}>{article.blocks.map(renderBlock)}</div>
    </div>
  )
})
