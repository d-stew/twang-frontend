export const SENTIMENT_DATA_LOADING = 'SENTIMENT_DATA_LOADING'
export const SENTIMENT_DATA_LOADED = 'SENTIMENT_DATA_LOADED'
export const TWITTER_DATA_LOADED = 'TWITTER_DATA_LOADED'

export const initialTwitterState = {
  loading: true,
  error: undefined,
  sentimentData: undefined,
  twitterData: undefined
}

export default (state = initialTwitterState, action) => {
  switch(action.type) {
    case SENTIMENT_DATA_LOADING: 
      return { ...state, loading: true }
    case SENTIMENT_DATA_LOADED: 
      return { ...state, loading: false, sentimentData: action.payload }
    case TWITTER_DATA_LOADED:
      return { ...state, twitterData: action.payload }
    default:
      return state
  }
} 