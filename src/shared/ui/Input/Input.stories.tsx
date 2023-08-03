import { type ComponentStory } from '@storybook/react'

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'value'
}

export const WithPlaeceholder = Template.bind({})
WithPlaeceholder.args = {
  placeholder: 'placeholder'
}
