import { querySentimentData } from '../../services/analytics.service'
import { SENTIMENT_DATA_LOADED, SENTIMENT_DATA_LOADING, ANALYTICS_DATA_LOADED, KILL_STREAM } from '../reducers/analytics.reducer'

export const getSentimentData = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SENTIMENT_DATA_LOADING })
    
    const { sentimentData } = await querySentimentData(keyword)
    
    dispatch({ type: SENTIMENT_DATA_LOADED, payload: sentimentData })
  } catch (error) {
    console.log(error)
  }
}

export const updateAnalyticsData = (analyticsData) => async (dispatch) => {
  try {
    dispatch({ type: ANALYTICS_DATA_LOADED, payload: analyticsData })
  } catch (error) {
    console.log(error)
  }
}

export const killStream = () => async (dispatch) => {
  try {
    dispatch({ type: KILL_STREAM })
  } catch (error) {
    console.log(error)
  }
}