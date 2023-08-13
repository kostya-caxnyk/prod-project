import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchProfileData = createAsyncThunk<
Profile,
undefined,
ThunkConfig<string>
>('profile/fetchProfileData', async (_, ThunkApi) => {
  try {
    const response = await ThunkApi.extra.api.get<Profile>('/profile')

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return ThunkApi.rejectWithValue('error')
  }
})
