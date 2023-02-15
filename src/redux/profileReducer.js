import { getUser } from "../API/api"

const GET_USER = 'GET_USER'

let initialState = {
   profile: null,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return {
            ...state,
            profile: action.profile
         }
      default:
         return state
   }
}


export const setUserProfileAC = (profile) => ({ type: GET_USER, profile })

export const getUserProfileAC = (userID) => {
   return (
      (dispatch) => {
         return (
            getUser(userID).then(data => {
               dispatch(setUserProfileAC(data))
            })
         )
      }
   )
}


export default profileReducer