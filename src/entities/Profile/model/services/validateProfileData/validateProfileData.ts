import { Profile, ValidationProfileError } from '../../types/profile'

export const validateProfileData = (
  profile: Profile
): ValidationProfileError[] => {
  const { age, first, lastname, username } = profile

  const errors: ValidationProfileError[] = []

  if (!first || !lastname || !username) {
    errors.push(ValidationProfileError.INCORRECT_USER_DATA)
  }

  if (!age || age > 100 || age < 12) {
    errors.push(ValidationProfileError.INCORRECT_AGE)
  }

  return errors
}
