import { type ComponentStory } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Normal = Template.bind({})
Normal.args = {
  isOpen: true,
  rootElement: document.body,
  children: 'Modal Children'
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
  isOpen: true,
  rootElement: document.body,
  children: 'Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children Modal Children '
}
