import { initialAnalyticsState } from '../reducers/analytics.reducer'
import { initialUserState } from '../reducers/user_insights.reducer'

export const AnalyticsMap = ({ analyticsState = initialAnalyticsState }) => ({
  loading: analyticsState.loading,
  error: analyticsState.error,
  sentimentData: analyticsState.sentimentData,
  twitterData: analyticsState.twitterData,
})

export const UserMap = ({ userState = initialUserState }) => ({
  loading: userState.loading,
  error: userState.error,
  userData: userState.userData,
})