import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const querySentimentData = async () => {
  const response = await axios.get('/twitter/open-stream', {
    params: {
      keyword: 'denver',
    }
  })

  return response
}