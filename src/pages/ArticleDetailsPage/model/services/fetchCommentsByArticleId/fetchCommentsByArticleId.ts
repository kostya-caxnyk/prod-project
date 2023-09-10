import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>('article/fetchCommentsByArticleId', async (articleId, ThunkApi) => {
  try {
    const response = await ThunkApi.extra.api.get<Comment[]>('/comments/', {
      params: { articleId, _expand: 'user' }
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
