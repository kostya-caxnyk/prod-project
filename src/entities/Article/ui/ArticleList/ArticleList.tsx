import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from '@/shared/ui/Text/Text'
import { LinkProps } from 'react-router-dom'

interface ArticleListProps {
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  className?: string
  target?: LinkProps['target']
  virtualized?: boolean
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)

export const ArticleList = memo(
  ({
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target
  }: ArticleListProps) => {
    const { t } = useTranslation()

    if (!isLoading && !articles.length) {
      return <Text title={t('Articles not found')} />
    }

    return (
      <div className={classNames(cls.articleList)}>
        {articles.map((article) => (
          <ArticleListItem
            target={target}
            article={article}
            view={view}
            key={article.id}
          />
        ))}
        {isLoading && getSkeletons(view)}
      </div>
    )
  }
)
