export const SENTIMENT_DATA_LOADING = 'SENTIMENT_DATA_LOADING'
export const SENTIMENT_DATA_LOADED = 'SENTIMENT_DATA_LOADED'
export const ANALYTICS_DATA_LOADED = 'ANALYTICS_DATA_LOADED'
export const KILL_STREAM = 'KILL_STREAM'

export const initialAnalyticsState = {
  loading: true,
  error: undefined,
  sentimentData: undefined,
  twitterData: undefined
}

export default (state = initialAnalyticsState, action) => {
  switch(action.type) {
    case SENTIMENT_DATA_LOADING: 
      return { ...state, loading: true }
    case SENTIMENT_DATA_LOADED: 
      return { ...state, loading: false, sentimentData: action.payload }
    case ANALYTICS_DATA_LOADED:
      return { ...state, twitterData: action.payload }
    case KILL_STREAM:
      return { ...state, 
        twitterData: {
          count: 0,
          locations: {},
          languages: {}, 
          tweets: [],
        }
      }
    default:
      return state
  }
} 