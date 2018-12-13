import { querySentimentData } from '../../services/twitter.service'
import { SENTIMENT_DATA_LOADED, SENTIMENT_DATA_LOADING, TWITTER_DATA_LOADED, KILL_STREAM } from '../reducers/twitter.reducer'

export const getSentimentData = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SENTIMENT_DATA_LOADING })
    
    const { sentimentData } = await querySentimentData(keyword)
    
    dispatch({ type: SENTIMENT_DATA_LOADED, payload: sentimentData })
  } catch (error) {
    console.log(error)
  }
}

export const updateTwitterData = (twitterData) => async (dispatch) => {
  try {
    dispatch({ type: TWITTER_DATA_LOADED, payload: twitterData })
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