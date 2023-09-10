import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
