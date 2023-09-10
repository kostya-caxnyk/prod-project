import { StateSchema } from '@/app/providers/StoreProvider'

export const getScrollRestoration = (state: StateSchema) =>
  state.scrollRestoration.scroll

export const getScrollPositionByPath = (state: StateSchema, path: string) =>
  state.scrollRestoration.scroll[path] || 0
