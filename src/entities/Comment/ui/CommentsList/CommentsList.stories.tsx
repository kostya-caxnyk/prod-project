import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentsList } from './CommentsList'

export default {
  title: 'entities/Comment/CommentsList',
  component: CommentsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentsList>

const Template: ComponentStory<typeof CommentsList> = (args) => (
  <CommentsList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya', roles: [] }
    },
    {
      id: '2',
      text: 'Comment 2',
      user: { id: '1', username: 'Petya', roles: [] }
    }
  ]
}

export const Loading = Template.bind({})
Loading.args = {
  comments: [],
  isLoading: true
}
