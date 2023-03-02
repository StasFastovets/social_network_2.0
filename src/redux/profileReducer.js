import { getUser, updateStatusOfUser } from "../API/api"
import { getStatusOfUser } from './../API/api';

const SET_USER = 'GET_USER'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   profile: {
      photos: {
         small: null
      }
   },
   status: '',
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER:
         return {
            ...state,
            profile: action.profile
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      default:
         return state
   }
}


export const setUserProfileAC = (profile) => ({ type: SET_USER, profile })
export const setStatusOfUserAC = (status) => ({ type: SET_STATUS, status })

export const getUserProfileTC = (userID) => {
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

export const getStatusOfUserTC = (id) => {
   return (
      (dispatch) => {
         return (
            getStatusOfUser(id).then(data => {
               dispatch(setStatusOfUserAC(data))
            })
         )
      }
   )
}

export const updataStatusOfUserTC = (status) => {
   return (
      (dispatch) => {
         return (
            updateStatusOfUser(status).then(data => {
               if (data.resultCode == 0) {
                  dispatch(setStatusOfUserAC(status))
               }
            })
         )
      }
   )
}

export const updataPhotoOfUserTC = (photo) => {
   return (
      (dispatch) => {
         return (
            updateStatusOfUser(photo).then(data => {
               if (data.resultCode == 0) {
                  dispatch(setStatusOfUserAC(photo))
               }
            })
         )
      }
   )
}

export default profileReducer