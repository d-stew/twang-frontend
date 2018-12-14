export const USER_DATA_LOADING = 'USER_DATA_LOADING'
export const USER_DATA_LOADED = 'USER_DATA_LOADED'

export const initialUserState = {
  loading: true,
  error: undefined,
  userData: undefined,
}

export default (state = initialUserState, action) => {
  switch(action.type) {
    case USER_DATA_LOADING: 
      return { ...state, loading: true }
    case USER_DATA_LOADED: 
      return { ...state, loading: false, userData: action.payload }
    default:
      return state
  }
} 