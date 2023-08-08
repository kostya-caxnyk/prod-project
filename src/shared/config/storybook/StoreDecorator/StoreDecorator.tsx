import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const StoreDecorator =
  (
    initialState: DeepPartial<StateSchema>,
    asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {}
  ) =>
    (StoryComponent: Story) =>
      (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
      )
