import axios from 'axios'

axios.defaults.baseURL = getApiUrl()

const getApiUrl = () => {
  switch(process.env.NODE_ENV) {
    case 'DEVELOPMENT':
      console.log('DEVELOPMENT')
      return 'http://localhost:8080'
    case 'PRODUCTION':
      console.log('PRODUCTION')
      return 'http://twang-api.herokuapp.com'
    default: 
      'http://localhost:8080'
    break;
  }
}

export const querySentimentData = async (keyword) => {
  const response = await axios.get('/twitter/open-stream', {
    params: {
      keyword,
    }
  })

  return response
}