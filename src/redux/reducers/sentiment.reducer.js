export const SENTIMENT_DATA_LOADING = 'SENTIMENT_DATA_LOADING'
export const SENTIMENT_DATA_LOADED = 'SENTIMENT_DATA_LOADED'

export const initialSentimentState = {
  loading: true,
  error: undefined,
  data: undefined,
}

export default (state = initialSentimentState, action) => {
  switch(action.type) {
    case SENTIMENT_DATA_LOADING: 
      return { ...state, loading: true }
    case SENTIMENT_DATA_LOADED: 
      return { ...state, loading: false, data: action.payload }
    default:
      return state
  }
} 