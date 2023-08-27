import React, { memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { LinkProps } from 'react-router-dom'
import {
  AutoSizer,
  List,
  ListRowProps,
  WindowScroller
} from 'react-virtualized'
import { pageContext } from 'widgets/Page/Page'

interface ArticleListProps {
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  className?: string
  target?: LinkProps['target']
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
    target
  }: ArticleListProps) => {
    const { t } = useTranslation()
    const page = useContext(pageContext)

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
        <WindowScroller scrollElement={page as Element}>
          {({
            width,
            height,
            onChildScroll,
            isScrolling,
            scrollTop,
            registerChild
          }) => (
            <div
              ref={registerChild}
              className={classNames(cls.articleList, className)}
            >
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
