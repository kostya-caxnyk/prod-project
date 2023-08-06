import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
  type ReduxStoreWithManager,
  type StateSchemaKey
} from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'

export const useDynamicModuleLoader = (key: StateSchemaKey, reducer: Reducer, removeAfterUnmount = true) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    store.reducerManager.add(key, reducer)
    dispatch({ type: `@INIT ${key} reducer` })

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(key)
        dispatch({ type: `@DESTROY ${key} reducer` })
      }
    }
    // eslint-disable-next-line
  }, [])

}
