import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type User, userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  const userData: User = { username: 'kostya', id: '1' }

  test('success login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: userData })
    )

    const thunk = new TestAsyncThunk(loginByUsername)
    const res = await thunk.callThunk({ username: 'kostya', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(userData)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.reject(new Error())
    )

    const thunk = new TestAsyncThunk(loginByUsername)
    const res = await thunk.callThunk({ username: 'kostya', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toBe('error')
  })
})
