import React from 'react'
import { type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: `export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
      backgroundColor: { control: 'color' }
    }
  }`
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
  children: `export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
      backgroundColor: { control: 'color' }
    }
  }`
}
