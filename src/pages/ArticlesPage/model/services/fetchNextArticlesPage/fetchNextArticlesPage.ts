import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageLoading,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlePageSlice'

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const hasMore = getArticlesPageHasMore(getState())
  const page = getArticlesPageNum(getState())
  const isLoading = getArticlesPageLoading(getState())

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    void dispatch(
      fetchArticlesList({
        page: page + 1
      })
    )
  }
})
