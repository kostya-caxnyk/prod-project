import React from 'react'
import { type ComponentStory } from '@storybook/react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export const Primary = Text.bind({})
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description'
}

export const Error = Text.bind({})
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR
}

export const onlyTitle = Text.bind({})
onlyTitle.args = {
  title: 'Title lorem ipsun'
}

export const onlyText = Text.bind({})
onlyText.args = {
  text: 'Description Description Description Description'
}

export const PrimaryDark = Text.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Text.bind({})
onlyTitleDark.args = {
  title: 'Title lorem ipsun'
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Text.bind({})
onlyTextDark.args = {
  text: 'Description Description Description Description'
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
