import { type EnhancedStore } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ReducerManager } from './reducerManager'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { AddCommentFormSchema } from 'features/AddCommentForm'

export interface StateSchema {
  user: UserSchema

  // lazy reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
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
