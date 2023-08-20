import { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error
export const getArticlesPageLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view
