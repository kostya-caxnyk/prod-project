import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema, type Profile } from '../types/profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
    }
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
