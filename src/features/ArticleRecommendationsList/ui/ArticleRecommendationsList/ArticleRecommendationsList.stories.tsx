import React from 'react'
import { type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { Article } from 'entities/Article'

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const article = {
  id: '1',
  title: 'Новини JavaScript',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
  user: { id: '1', username: '123', roles: [] },
  blocks: [

  ]
} as Article

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList />

export const Primary = Template.bind({})

Primary.parameters = {
  mockData: [
    {
        url: __API__ + '/articles&_limit=5',
        method: 'GET',
        status: 200,
        response: {
            data: [{ ...article, id: '1' }, { ...article, id: '2' }, { ...article, id: '3' }, { ...article, id: '4' }]
        }
    }
]
}
