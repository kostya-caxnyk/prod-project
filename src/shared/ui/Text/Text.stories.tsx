import React from 'react'
import { Text as TextComponent, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { type ComponentStory } from '@storybook/react'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: 'Title lorem ipsun'
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: 'Description Description Description Description'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Title lorem ipsun'
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Description Description Description Description'
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
