import { type EnhancedStore } from '@reduxjs/toolkit'
import { type UserSchema } from '@/entities/User'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ReducerManager } from './reducerManager'
import { type ProfileSchema } from '@/entities/Profile'
import { type AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from '@/entities/Article'
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { AddCommentFormSchema } from '@/features/AddCommentForm'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
import { ScrollRestorationSchema } from '@/features/ScrollRestoration'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // lazy reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsPage?: ArticleDetailsPageSchema
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
