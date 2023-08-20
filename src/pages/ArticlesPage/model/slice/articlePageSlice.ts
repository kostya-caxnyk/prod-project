import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entities/Article'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW__LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

export const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    view: ArticleView.SMALL,
    ids: [],
    entities: {},
    error: '',
    isLoading: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW__LOCALSTORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ARTICLE_VIEW__LOCALSTORAGE_KEY
      ) as ArticleView
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        articlesAdapter.setAll(state, action.payload)
        state.isLoading = false
      })
  }
})

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice
