import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'shared/api/api'
import { type Profile } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileData } from '../../selectors/getProfileData/getProfileData'

export const saveProfileData = createAsyncThunk<
Profile,
undefined,
ThunkConfig<string>
>('profile/saveProfileData', async (_, ThunkApi) => {
  try {
    const profile = getProfileData(ThunkApi.getState())
    const response = await api.put<Profile>('/profile', profile)
    return response.data
  } catch (e) {
    console.log(e)
    return ThunkApi.rejectWithValue('error')
  }
})
