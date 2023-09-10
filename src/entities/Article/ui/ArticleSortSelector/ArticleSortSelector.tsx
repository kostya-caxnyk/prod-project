import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { Select, SelectOption } from '@/shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/article'
import { SortOrder } from '@/shared/types'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('ascending')
      },
      {
        value: 'desc',
        content: t('descending')
      }
    ],
    [t]
  )

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('date creation')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('name')
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views')
      }
    ],
    [t]
  )

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  )
})
