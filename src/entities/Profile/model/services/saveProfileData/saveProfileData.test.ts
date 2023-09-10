import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { saveProfileData } from './saveProfileData'
import { Country } from '@/entities/Country'
import { Profile, ValidationProfileError } from '../../types/profile'

describe('save profile data test', () => {
  const profileData: Profile = {
    username: 'kostya',
    first: 'Kostya',
    lastname: 'Sakhnyuk',
    country: Country.Ukraine,
    city: 'Vinnistya',
    age: 21,
    avatar: ''
  }
  test('should return valid data from request', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, {
      profile: { data: profileData }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))

    const res = await thunk.callThunk('1')

    expect(thunk.api.put).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(profileData)
  })

  test('should return error', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, {
      profile: { data: profileData }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const res = await thunk.callThunk('1')

    expect(thunk.api.put).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toEqual([ValidationProfileError.SERVER_ERROR])
  })

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(saveProfileData, {
      profile: { data: { ...profileData, age: 0 } }
    })

    const res = await thunk.callThunk('1')

    expect(thunk.api.put).not.toHaveBeenCalled()
    expect(res.payload).toEqual([ValidationProfileError.INCORRECT_AGE])
  })
})
