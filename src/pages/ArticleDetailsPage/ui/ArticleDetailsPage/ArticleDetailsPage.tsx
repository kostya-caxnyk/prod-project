import React, { memo } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { Page } from '@/widgets/Page/Page'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { useParams } from 'react-router-dom'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRating } from '@/features/ArticleRating'

const ArticleDetailsPage = memo(() => {
  const { id } = useParams<{ id: string }>()
  useDynamicModuleLoader('articleDetailsPage', articleDetailsPageReducer)

  if (!id) {
    return null
  }

  return (
    <Page>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  )
})

export default ArticleDetailsPage
