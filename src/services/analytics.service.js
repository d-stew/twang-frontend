import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

const baseUrl = process.env.NODE_ENV === 'DEVELOPEMNT' ? 'http://localhost:8080' : 'https://twang-api.herokuapp.com'

axios.defaults.baseURL = baseUrl()

export const querySentimentData = async (keyword) => {
  const response = await axios.get('/twitter/open-stream', {
    params: {
      keyword,
    }
  })

  return response
}