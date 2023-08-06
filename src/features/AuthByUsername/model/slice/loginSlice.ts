import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    }).addCase(loginByUsername.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }).addCase(loginByUsername.fulfilled, (state) => {
      state.error = undefined
      state.isLoading = false
    })
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
