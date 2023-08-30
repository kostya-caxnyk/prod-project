import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text, TextSize } from 'shared/ui/Text/Text'
import { ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useArticleRecommendationsList } from '../../api/articleRecommedationApi'

export const ArticleRecommendationsList = memo(() => {
  const { t } = useTranslation()

  const { data: articles, isLoading, error } = useArticleRecommendationsList(4)

  return (
    <VStack gap="8">
      <Text size={TextSize.L} title={t('Recommend')} />
      {articles && (
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target="_blank"
        />
      )}
    </VStack>
  )
})
