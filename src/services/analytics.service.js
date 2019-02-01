import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

axios.defaults.baseURL = process.env.NODE_ENV === 'DEVELOPMENT' ? 'http://localhost:8080' : 'https://twang-api.herokuapp.com'

export const querySentimentData = async (keyword) => {
  const response = await axios.get('/twitter/open-stream', {
    params: {
      keyword,
    }
  })

  return response
}