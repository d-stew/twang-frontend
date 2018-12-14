import { combineReducers } from 'redux'
import analyticsReducer from '../redux/reducers/analytics.reducer'
import userInsightsReducer from '../redux/reducers/user_insights.reducer'

export default combineReducers({
  analyticsState: analyticsReducer,
  userState: userInsightsReducer
})
