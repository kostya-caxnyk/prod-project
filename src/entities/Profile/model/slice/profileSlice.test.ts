import { Country } from '@/entities/Country'
import { profileActions, profileReducer } from './profileSlice'
import { ProfileSchema } from '../types/profile'

describe('profile slice test', () => {
  test('should update readonly field', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({
      ...state,
      readonly: false
    })
  })

  test('should update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: {
        username: 'kostya',
        first: 'Kostya',
        lastname: 'Sakhnyuk',
        country: Country.Ukraine,
        city: 'Vinnistya',
        age: 21,
        avatar: ''
      }
    }
    const newProfileData = { ...state.data, age: 22 }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile(newProfileData)
      )
    ).toEqual({
      data: newProfileData
    })
  })
})
