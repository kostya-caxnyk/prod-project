import { loginByUsername } from './loginByUsername'
import { type User, userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsername.test', () => {
  const userData: User = { username: 'kostya', id: '1' }

  test('success login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(
      Promise.resolve({ data: userData })
    )

    const res = await thunk.callThunk({ username: 'kostya', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(userData)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)

    thunk.api.post.mockReturnValue(
      Promise.reject(new Error())
    )

    const res = await thunk.callThunk({ username: 'kostya', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toBe('error')
  })
})
