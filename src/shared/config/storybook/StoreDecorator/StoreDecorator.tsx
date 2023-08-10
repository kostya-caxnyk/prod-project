import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer
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
