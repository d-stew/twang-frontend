import { queryUserData } from '../../services/user_insights.service'
import { USER_DATA_LOADING, USER_DATA_LOADED } from '../reducers/user_insights.reducer'

export const getUserData = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_DATA_LOADING })
    
    const { userData } = await queryUserData(username)
    
    dispatch({ type: USER_DATA_LOADED, payload: userData })
  } catch (error) {
    console.log(error)
  }
}