import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly test', () => {
  test('should return valid readonly data form state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('should return valid data form state when state is absent', () => {
    expect(getProfileReadonly({ } as StateSchema)).toEqual(undefined)
  })
})
