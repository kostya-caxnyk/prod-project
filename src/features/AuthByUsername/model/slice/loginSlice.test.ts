import { type DeepPartial } from '@reduxjs/toolkit'
import { loginActions, loginReducer } from './loginSlice'
import { type LoginSchema } from '../types/loginSchema'

describe('loginSlice.test', () => {
  test('should set username correctly', () => {
    const state: DeepPartial<LoginSchema> = { username: 'kostya' }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('213'))).toEqual({ username: '213' })
  })

  test('should set password correctly', () => {
    const state: DeepPartial<LoginSchema> = { password: '123123' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('kostyalog'))).toEqual({ password: 'kostyalog' })
  })
})
