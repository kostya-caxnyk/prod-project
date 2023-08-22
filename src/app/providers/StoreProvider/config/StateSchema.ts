import { type EnhancedStore } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ReducerManager } from './reducerManager'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { ScrollRestorationSchema } from 'features/ScrollRestoration'

export interface StateSchema {
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema

  // lazy reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export type ReduxStoreWithManager = {
  reducerManager: ReducerManager
} & EnhancedStore<StateSchema>

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<Error> {
  rejectValue: Error
  extra: ThunkExtraArg
  state: StateSchema
}
