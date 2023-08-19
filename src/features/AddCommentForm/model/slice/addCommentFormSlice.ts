import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/AddCommentFormSchema'

const initialState: AddCommentFormSchema = {}

export const addCommentFormSlice = createSlice({
  name: 'addCommentFormSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action.payload
  //       state.isLoading = false
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.data = action.payload
  //       state.isLoading = false
  //     })
  // }
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
