import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema, type Profile } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    }).addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }).addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.error = undefined
      state.isLoading = false
      state.data = action.payload
    })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
