import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { userReducer } from '@/entities/User'
import { createReducerManager } from './reducerManager'
import { api } from '@/shared/api/api'
import { type Reducer, type CombinedState } from 'redux'
import { scrollRestorationReducer } from '@/features/ScrollRestoration'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollRestoration: scrollRestorationReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const extraArg: ThunkExtraArg = {
    api
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      }).concat(rtkApi.middleware)
  })

  // @ts-expect-error no such field
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
