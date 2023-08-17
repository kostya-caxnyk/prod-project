import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => builder.addCase(fetchArticleById.pending, (state) => {
    state.error = undefined
    state.isLoading = true
  }).addCase(fetchArticleById.rejected, (state, action) => {
    state.error = action.payload
    state.isLoading = false
  }).addCase(fetchArticleById.fulfilled, (state, action) => {
    state.isLoading = false
    state.data = action.payload
  })
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
