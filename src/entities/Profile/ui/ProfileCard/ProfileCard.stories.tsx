import { type ComponentStory } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/storybook.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>

export const Normal = Template.bind({})
Normal.args = {
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

export const WithLoader = Template.bind({})
WithLoader.args = {
  data: {
    first: 'kostya',
    lastname: 'Sakhnyuk',
    country: Country.Ukraine,
    age: 21,
    currency: Currency.UAH,
    city: 'Vinnistya',
    avatar,
    username: 'admin 228'
  },
  isLoading: true
}

export const WithError = Template.bind({})
WithError.args = {
  data: {
    first: 'kostya',
    lastname: 'Sakhnyuk',
    country: Country.Ukraine,
    age: 21,
    currency: Currency.UAH,
    city: 'Vinnistya',
    avatar,
    username: 'admin 228'
  },
  error: 'error'
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
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
