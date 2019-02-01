import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

const baseUrl = () => {
  switch(process.env.NODE_ENV) {
    case 'DEVELOPMENT':
      console.log('DEVELOPMENT')
      return 'http://localhost:8080'
    case 'PRODUCTION':
      console.log('PRODUCTION')
      return 'https://twang-api.herokuapp.com'
    default: 
      return 'http://localhost:8080'
  }
}

axios.defaults.baseURL = baseUrl()

export const querySentimentData = async (keyword) => {
  const response = await axios.get('/twitter/open-stream', {
    params: {
      keyword,
    }
  })

  return response
}