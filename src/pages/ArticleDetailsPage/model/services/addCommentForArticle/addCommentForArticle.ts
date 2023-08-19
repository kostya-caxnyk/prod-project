import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('addCommentForArticle', async (text, ThunkApi) => {
  try {
    const user = getUserAuthData(ThunkApi.getState())
    const article = getArticleDetailsData(ThunkApi.getState())

    if (!user || !text || !article?.id) {
      return ThunkApi.rejectWithValue('error')
    }

    const response = await ThunkApi.extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: user.id,
      text
    })

    if (!response.data) {
      throw new Error()
    }

    await ThunkApi.dispatch(fetchCommentsByArticleId(article.id))

    return response.data
  } catch (e) {
    console.log(e)
    return ThunkApi.rejectWithValue('error')
  }
})
