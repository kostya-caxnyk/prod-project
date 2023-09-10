import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { getProfileData } from './getProfileData'
import { Country } from '@/entities/Country'
import { Profile } from '../../types/profile'

describe('getProfileData test', () => {
  test('should return valid profile data form state', () => {
    const profileData: Profile = {
      username: 'kostya',
      first: 'Kostya',
      lastname: 'Sakhnyuk',
      country: Country.Ukraine,
      city: 'Vinnistya',
      age: 21,
      avatar: ''
    }
    expect(getProfileData({ profile: { data: profileData } } as StateSchema)).toEqual(profileData)
  })

  test('should return valid data form state when state is absent', () => {
    expect(getProfileData({ } as StateSchema)).toEqual(undefined)
  })
})
