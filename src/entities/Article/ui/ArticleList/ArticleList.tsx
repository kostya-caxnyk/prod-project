import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)

export const ArticleList = memo(
  ({ articles, view = ArticleView.SMALL, isLoading }: ArticleListProps) => {
    const { t } = useTranslation()

    const renderArticle = (article: Article) => {
      return <ArticleListItem article={article} key={article.id} view={view} />
    }

    return (
      <div className={classNames(cls.articleList)}>
        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </div>
    )
  }
)
