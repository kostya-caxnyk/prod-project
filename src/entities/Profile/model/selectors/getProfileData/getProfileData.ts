import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { Profile } from '../../types/profile'

export const getProfileData = (state: StateSchema) => state.profile?.data
