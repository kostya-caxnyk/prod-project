import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageLoading,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlePageSlice'

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const inited = getArticlesPageInited(getState())
  if (!inited) {
    dispatch(articlesPageActions.initState())
    void dispatch(fetchArticlesList({ page: 1 }))
  }
})
