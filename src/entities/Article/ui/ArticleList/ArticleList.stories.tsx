import React from 'react'
import { type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleList } from './ArticleList'
import { Article } from '../..'

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const articles = [{
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
}, {
  id: '2',
  title: 'Новини JavaScript',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
  user: { id: '1', username: '123', roles: [] },
  blocks: [

  ]
}, {
  id: '3',
  title: 'Новини JavaScript',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
  user: { id: '1', username: '123', roles: [] },
  blocks: [

  ]
}, {
  id: '4',
  title: 'Новини JavaScript',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
  user: { id: '1', username: '123', roles: [] },
  blocks: [

  ]
}] as Article[]

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

export const NotFound = Template.bind({})
NotFound.args = {
  articles: []
}

export const Normal = Template.bind({})
Normal.args = {
  articles
}

export const Dark = Template.bind({})
Dark.args = {
  articles
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
