import React, { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useDynamicModuleLoader } from 'shared/lib/hooks/useToggle/useDynamicModuleLoader/useDynamicModuleLoader'
import { Page } from 'widgets/Page/Page'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { useParams } from 'react-router-dom'
import { VStack } from 'shared/ui/Stack'

const ArticleDetailsPage = memo(() => {
  const { id } = useParams<{ id: string }>()
  useDynamicModuleLoader('articleDetailsPage', articleDetailsPageReducer)

  return (
    <Page>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        {id && <ArticleDetails id={id} />}
        <ArticleRecommendationsList />
        <ArticleDetailsComments />
      </VStack>
    </Page>
  )
})

export default ArticleDetailsPage
