import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileValidationErrors } from './getProfileValidationErrors'
import { ValidationProfileError } from '../../types/profile'

describe('getProfileValidationErrors test', () => {
  test('should return valid validation errors data form state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationError: [ValidationProfileError.NO_DATA, ValidationProfileError.INCORRECT_AGE]
      }
    }
    expect(getProfileValidationErrors(state as StateSchema)).toEqual([ValidationProfileError.NO_DATA, ValidationProfileError.INCORRECT_AGE])
  })

  test('should return valid data form state when state is absent', () => {
    expect(getProfileValidationErrors({ } as StateSchema)).toEqual(undefined)
  })
})
