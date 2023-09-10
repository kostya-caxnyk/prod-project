import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
  ReduxStoreWithManager,
  StateSchemaKey
} from '@/app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export const useDynamicModuleLoader = (
  key: StateSchemaKey,
  reducer: Reducer,
  removeAfterUnmount = true
) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()
    const mounted = mountedReducers[key]

    if (!mounted) {
      store.reducerManager.add(key, reducer)
      dispatch({ type: `@INIT ${key} reducer` })
    }

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(key)
        dispatch({ type: `@DESTROY ${key} reducer` })
      }
    }
    // eslint-disable-next-line
  }, [])
}
