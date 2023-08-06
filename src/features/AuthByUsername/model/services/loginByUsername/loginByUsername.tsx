import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, ThunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
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
