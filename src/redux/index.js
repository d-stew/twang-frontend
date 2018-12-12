import { combineReducers } from 'redux'
import counterReducer from '../redux/reducers/counter.reducer'
import sentimentReducer from '../redux/reducers/sentiment.reducer'

export default combineReducers({
  counterReducer,
  sentimentReducer,
})
