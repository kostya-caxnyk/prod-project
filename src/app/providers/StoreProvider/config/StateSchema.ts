import { type EnhancedStore } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ReducerManager } from './reducerManager'

export interface StateSchema {
  user: UserSchema

  // lazy reducers
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export type ReduxStoreWithManager = {
  reducerManager: ReducerManager
} & EnhancedStore<StateSchema>
