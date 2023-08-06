import { type ComponentStory } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({
  loginForm: {
    username: 'kostya',
    password: '123'
  }
})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
