import { validateProfileData } from './validateProfileData'
import { Country } from '@/entities/Country'
import { Profile, ValidationProfileError } from '../../types/profile'

describe('fetch profile data test', () => {
  const validProfileData: Profile = {
    username: 'kostya',
    first: 'Kostya',
    lastname: 'Sakhnyuk',
    country: Country.Ukraine,
    city: 'Vinnistya',
    age: 21,
    avatar: ''
  }
  test('should return empty array with errors', async () => {
    expect(validateProfileData(validProfileData)).toEqual([])
  })

  test('should return array with one error about age', async () => {
    expect(validateProfileData({ ...validProfileData, age: 0 })).toEqual([
      ValidationProfileError.INCORRECT_AGE
    ])
  })

  test('should return array with one error about no user data', async () => {
    expect(
      validateProfileData({ ...validProfileData, first: '', lastname: '' })
    ).toEqual([ValidationProfileError.INCORRECT_USER_DATA])
  })

  test('should return array with 2 errors about no user data and incorrect age', async () => {
    expect(
      validateProfileData({
        ...validProfileData,
        first: '',
        lastname: '',
        age: 101
      })
    ).toEqual([
      ValidationProfileError.INCORRECT_USER_DATA,
      ValidationProfileError.INCORRECT_AGE
    ])
  })
})
