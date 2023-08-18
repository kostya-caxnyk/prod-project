import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error
export const getArticleDetailsCommentsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading
