import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const querySentimentData = async () => {
  console.log('IN SERVICE!!!')
  const { data } = await axios.get('/twitter')

  console.log('DATA', data)

  return data
}