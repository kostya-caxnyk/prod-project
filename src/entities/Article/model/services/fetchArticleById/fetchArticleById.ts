import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article } from '../../types/article'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>('article/fetchArticleById', async (id, ThunkApi) => {
  try {
    if (!id) {
      throw new Error('No id')
    }

    const response = await ThunkApi.extra.api.get<Article>('/articles/' + id, {
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
