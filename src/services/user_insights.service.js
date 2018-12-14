import axios from 'axios'

export const queryUserData = async (username) => {
  console.log('USERNAME in servie', username)
  
  const response = await axios.get('/twitter/user', {
    params: {
      username
    }
  })

  return response
}