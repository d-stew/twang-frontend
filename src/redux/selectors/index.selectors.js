import {initialSentimentState} from '../reducers/sentiment.reducer'

export const sentimentMap = ({ sentimentState = initialSentimentState }) => ({
  count: sentimentState.count,
  isIncrementing: sentimentState.isIncrementing,
  isDecrementing: sentimentState.isDecrementing,
})