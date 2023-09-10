import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentItem } from './Comment'
import { UserRole } from '@/entities/User'

export default {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentItem>

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <CommentItem {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya', roles: [UserRole.USER] }
  }
}
