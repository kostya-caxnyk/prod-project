import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__
  })
}
