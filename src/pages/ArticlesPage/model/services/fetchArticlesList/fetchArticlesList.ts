import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('fetchArticlesList', async ({ page = 1 }, ThunkApi) => {
  try {
    const limit = getArticlesPageLimit(ThunkApi.getState())
    const response = await ThunkApi.extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit
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
