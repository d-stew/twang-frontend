import axios from 'axios'

export const queryUserData = async (username) => {
  const response = await axios.get('/twitter/user/timeline', {
    params: {
      username
    }
  })

  return response
}

export const queryUserProfilePic = async (username) => {
  const response = await axios.get('/twitter/user/profile-picture', {
    params: {
      username
    }
  })

  return response
}