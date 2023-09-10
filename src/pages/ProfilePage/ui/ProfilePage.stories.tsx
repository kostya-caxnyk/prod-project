import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/storybook.jpg'
import { Country } from '@/entities/Country'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  profile: {
    data: {
      first: 'kostya',
      lastname: 'Sakhnyuk',
      country: Country.Ukraine,
      age: 21,
      currency: Currency.UAH,
      city: 'Vinnistya',
      avatar,
      username: 'admin 228'
    }
  }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
