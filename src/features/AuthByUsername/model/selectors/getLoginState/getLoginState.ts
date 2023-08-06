import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginState = (state: StateSchema) => state.loginForm || { username: '', isLoading: false, password: '', error: undefined }
