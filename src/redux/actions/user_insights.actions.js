import { queryUserData, queryUserProfilePic } from '../../services/user_insights.service'
import { USER_DATA_LOADING, USER_INSIGHTS_LOADED } from '../reducers/user_insights.reducer'

export const getUserData = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_DATA_LOADING })
    
    const userDataResponse = await queryUserData(username)
    const profilePicResponse  = await queryUserProfilePic(username)

    dispatch({ type: USER_INSIGHTS_LOADED, payload: { ...userDataResponse.data, profilePicUrl: profilePicResponse.data } })
  } catch (error) {
    console.log(error)
  }
}