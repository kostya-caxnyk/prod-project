import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleRating.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi'

interface ArticleRatingProps {
  articleId: string
}

export const ArticleRating = memo(({ articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()
  const user = useSelector(getUserAuthData)

  const { data } = useGetArticleRating({ userId: user?.id, articleId })
  const rating = data?.[0]
  const [rateArticle] = useRateArticle()

  const handleRateArticle = useCallback(
    (rate: number) => {
      if (user) {
        void rateArticle({ userId: user?.id, articleId, rate })
      }
    },
    [articleId, rateArticle, user]
  )

  return (
    <RatingCard
      title={rating ? t('Thank you for rating') : t('Rate the article')}
      rate={data?.[0]?.rate || 0}
      onSelect={handleRateArticle}
    />
  )
})
