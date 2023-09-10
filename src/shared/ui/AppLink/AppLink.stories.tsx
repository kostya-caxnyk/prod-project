import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { AppLink, LinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
}

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: LinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  theme: LinkTheme.SECONDARY
}

export const Red = Template.bind({})
Red.args = {
  children: 'Text',
  theme: LinkTheme.RED
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  theme: LinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Text',
  theme: LinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})
RedDark.args = {
  children: 'Text',
  theme: LinkTheme.RED
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
