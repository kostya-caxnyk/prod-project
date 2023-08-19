import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'
import { Country } from 'entities/Country'
import { Profile } from '../../types/profile'

describe('fetch profile data test', () => {
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
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }))

    const res = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(profileData)
  })

  test('should return error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const res = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
  })
})
