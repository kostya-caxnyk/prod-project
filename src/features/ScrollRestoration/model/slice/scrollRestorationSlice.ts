import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema'

const initialState: ScrollRestorationSchema = {
  scroll: {}
}

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestorationSlice',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      {
        payload: { path, position }
      }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[path] = position
    }
  }
})

export const { actions: scrollRestorationActions } = scrollRestorationSlice
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice
