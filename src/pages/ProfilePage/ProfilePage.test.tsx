import { renderComponent } from '@/shared/lib/tests/renderComponent'
import ProfilePage from './ui/ProfilePage'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Profile, profileReducer } from '@/entities/Profile'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin213'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile
    },
    user: {
      authData: { id: '1', username: 'admin' }
    }
  },
  asyncReducers: {
    profile: profileReducer
  },
  route: '/profile/1'
}

describe('pages/ProfilePage', () => {
  test('Should be edit mode after clicking on edit button', async () => {
    renderComponent(<ProfilePage />, options)
    await userEvent.click(
      await screen.findByTestId('ProfilePageHeader.EditButton')
    )
    expect(
      screen.getByTestId('ProfilePageHeader.SaveButton')
    ).toBeInTheDocument()
  })
})
