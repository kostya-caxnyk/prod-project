import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
  Article[],
  undefined,
  ThunkConfig<string>
>('fetchArticlesList', async (_, ThunkApi) => {
  try {
    const response = await ThunkApi.extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user'
      }
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return ThunkApi.rejectWithValue('error')
  }
})
