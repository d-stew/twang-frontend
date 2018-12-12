import { querySentimentData } from '../../services/sentiment.service'

export const getSentimentData = (keyword) => async (dispatch) => {
  console.log('IN ACTION!!!')
  
  try {
    dispatch({ type: 'SENTIMENT_DATA_LOADING' })
    
    const { sentimentData } = await querySentimentData(keyword)
    
    dispatch({ type: 'SENTIMENT_DATA_LOADED', payload: sentimentData })
  } catch (error) {
    console.log(error)
  }
}