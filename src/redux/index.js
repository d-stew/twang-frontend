import { combineReducers } from 'redux'
import twitterReducer from '../redux/reducers/twitter.reducer'

export default combineReducers({
  twitterState: twitterReducer,
})
