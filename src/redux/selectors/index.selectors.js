import { initialTwitterState } from '../reducers/twitter.reducer'

export const TwitterMap = ({ twitterState = initialTwitterState }) => ({
  loading: twitterState.loading,
  error: twitterState.error,
  sentimentData: twitterState.sentimentData,
  twitterData: twitterState.twitterData,
})