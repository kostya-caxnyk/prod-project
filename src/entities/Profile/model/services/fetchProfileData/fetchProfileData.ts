import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'shared/api/api'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
Profile,
undefined,
{ rejectValue: string }
>('profile/fetchProfileData', async (_, ThunkApi) => {
  try {
    const response = await api.get<Profile>('/profile')
    return response.data
  } catch (e) {
    console.log(e)
    return ThunkApi.rejectWithValue('error')
  }
})
