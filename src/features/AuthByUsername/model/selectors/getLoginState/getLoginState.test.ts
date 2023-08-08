import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getLoginState } from './getLoginState'

describe('getLoginState test', () => {
  test('should return valid login form state', () => {
    const loginForm = { username: 'kostya', password: '123', isLoading: true, error: 'error' }
    expect(getLoginState({ loginForm } as StateSchema)).toEqual(loginForm)
  })

  test('should return valid login form state when state is absent', () => {
    const defaultLoginForm: StateSchema['loginForm'] = { username: '', password: '', isLoading: false, error: undefined }
    expect(getLoginState({ } as StateSchema)).toEqual(defaultLoginForm)
  })
})
