import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

const initialState: UserSchema = { _inited: false }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
    initAuthData: (state) => {
      state._inited = true
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
