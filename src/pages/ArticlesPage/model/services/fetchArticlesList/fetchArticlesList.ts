import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article, ArticleType } from '@/entities/Article'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from '../../selectors/articlesPageSelectors'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('fetchArticlesList', async ({ replace = false }, ThunkApi) => {
  try {
    const limit = getArticlesPageLimit(ThunkApi.getState())

    const sort = getArticlesPageSort(ThunkApi.getState())
    const order = getArticlesPageOrder(ThunkApi.getState())
    const search = getArticlesPageSearch(ThunkApi.getState())
    const page = getArticlesPageNum(ThunkApi.getState())
    const type = getArticlesPageType(ThunkApi.getState())

    addQueryParams({
      sort,
      order,
      search,
      type
    })
    const response = await ThunkApi.extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type
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
