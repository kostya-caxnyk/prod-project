import React, { memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { LinkProps } from 'react-router-dom'
import { List, ListRowProps, WindowScroller } from 'react-virtualized'

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
    className,
    target,
    virtualized
  }: ArticleListProps) => {
    const { t } = useTranslation()
    const page = document.getElementById('page-id') as Element

    const isBig = view === ArticleView.BIG
    const itemsPerRow = isBig ? 1 : Math.floor((page?.clientWidth || 700) / 230)
    const rowCount = isBig ? articles.length : articles.length / itemsPerRow

    const rowRenderer = useCallback(
      ({ index, key, style }: ListRowProps) => {
        const itemsToRender = []
        const fromIndex = index * itemsPerRow
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

        for (let i = fromIndex; i < toIndex; i++) {
          itemsToRender.push(
            <ArticleListItem
              target={target}
              article={articles[i]}
              view={view}
              key={articles[i].id}
            />
          )
        }

        return (
          <div key={key} style={style} className={cls.cardRow}>
            {itemsToRender}
          </div>
        )
      },
      [articles, itemsPerRow, target, view]
    )

    if (!isLoading && !articles.length) {
      return <Text title={t('Articles not found')} />
    }

    return (
      <>
        <WindowScroller scrollElement={page}>
          {({
            width,
            height,
            onChildScroll,
            isScrolling,
            scrollTop,
            registerChild
          }) => (
            <div
              // @ts-expect-error 123
              ref={registerChild}
              className={classNames(cls.articleList, className)}
            >
              {virtualized ? (
                <List
                  height={height || 700}
                  width={width - 80 || 700}
                  rowCount={rowCount}
                  rowHeight={isBig ? 700 : 330}
                  rowRenderer={rowRenderer}
                  scrollTop={scrollTop}
                  autoHeight
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                />
              ) : (
                articles.map((article) => (
                  <ArticleListItem
                    target={target}
                    article={article}
                    view={view}
                    key={article.id}
                  />
                ))
              )}
            </div>
          )}
        </WindowScroller>
        <div className={classNames(cls.articleList)}>
          {isLoading && getSkeletons(view)}
        </div>
      </>
    )
  }
)
