import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async ({ username, password }, ThunkApi) => {
    try {
      const response = await ThunkApi.extra.api.post<User>('/login', {
        username,
        password
      })

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      ThunkApi.dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      console.log(e)
      return ThunkApi.rejectWithValue('error')
    }
  }
)
