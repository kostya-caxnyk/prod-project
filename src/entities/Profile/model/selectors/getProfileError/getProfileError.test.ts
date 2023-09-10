import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { getProfileError } from './getProfileError'

describe('getProfileError test', () => {
  test('should return valid error data form state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('error')
  })

  test('should return valid data form state when state is absent', () => {
    expect(getProfileError({ } as StateSchema)).toEqual(undefined)
  })
})
