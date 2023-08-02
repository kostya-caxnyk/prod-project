import React, { type ReactNode } from 'react'

import cls from './StoreProvider.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: StateSchema
}

export function StoreProvider({ children, initialState }: StoreProviderProps) {
  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}
