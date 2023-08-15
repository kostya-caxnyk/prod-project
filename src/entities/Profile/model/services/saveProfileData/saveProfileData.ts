import { createAsyncThunk } from '@reduxjs/toolkit'
import { ValidationProfileError, type Profile } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileData } from '../../selectors/getProfileData/getProfileData'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const saveProfileData = createAsyncThunk<
Profile,
undefined,
ThunkConfig<ValidationProfileError[]>
>('profile/saveProfileData', async (_, ThunkApi) => {
  try {
    const profile = getProfileData(ThunkApi.getState())
    if (!profile) {
      return ThunkApi.rejectWithValue([ValidationProfileError.NO_DATA])
    }

    const validationErrors = validateProfileData(profile)
    if (validationErrors.length) {
      return ThunkApi.rejectWithValue(validationErrors)
    }

    const response = await ThunkApi.extra.api.put<Profile>('/profile', profile)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return ThunkApi.rejectWithValue([ValidationProfileError.SERVER_ERROR])
  }
})
