import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { getProfileLoading } from './getProfileLoading'

describe('getProfileLoading test', () => {
  test('should return valid loading data form state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileLoading(state as StateSchema)).toEqual(true)
  })

  test('should return valid data form state when state is absent', () => {
    expect(getProfileLoading({ } as StateSchema)).toEqual(undefined)
  })
})
