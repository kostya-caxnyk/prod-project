import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { articleDetailsReducer } from '@/entities/Article'
import { profileReducer } from '@/entities/Profile'
import { addCommentFormReducer } from '@/features/AddCommentForm'
import { loginReducer } from '@/features/AuthByUsername'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer
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
